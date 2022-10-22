import { ImageBackground, SafeAreaView, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from 'react-native-modal';

import {
  ExtendedButton,
  ExtendedText,
  MainHeader,
  TrySomethingCarousel,
} from '../../../components';
import { IMAGES } from '../../../assets';
import { useAppDispatch } from '../../../hooks';
import {
  useIsChildMove,
  useNavigateNextQuest,
  useNavigatePrevQuest,
  useParsedJSXTextNickname,
} from '../../../hooks/quest';
import { cacheSlice } from '../../../redux/slices';
import { generalStyles } from '../../../utils/styles';
import { TrySomethingModal } from './components';
import { styles } from './TrySomethingNewCarousel.styles';
import { TRY_SOMETHING_ITEMS } from './TrySomethingNewCarousel.data';
import { ITrySomethingNewCarouselScreenProps } from './TrySomethingNewCarousel.types';
import { SVG } from '../../../assets/svg';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;
const WhiteCrossIcon = SVG.WhiteCrossIcon;

export const TrySomethingNewCarouselScreen: React.FC<ITrySomethingNewCarouselScreenProps> =
  ({ route }) => {
    const {
      title,
      description,
      tellMoreTitle,
      tellMoreDescription,
      backgroundImage,
      titleHasNickname,
    } = route.params.data;

    const dispatch = useAppDispatch();

    const [activeItem, setActiveItem] = useState(TRY_SOMETHING_ITEMS[0]);

    const [activeItemIndex, setActiveItemIndex] = useState(0);

    const [isModal, setIsModal] = useState(false);

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'title',
      // TODO: remove
      variableStyle: { color: '#00dbc0' },
    });

    const { t } = useTranslation();

    const goBack = useNavigatePrevQuest();
    const onSubmit = useNavigateNextQuest();
    const isChild = useIsChildMove(title);

    const setModalStatus = useCallback(() => {
      setIsModal(!isModal);
    }, [isModal]);

    useEffect(() => {
      setActiveItem(TRY_SOMETHING_ITEMS[activeItemIndex]);
    }, [activeItemIndex]);

    const onSubmitPress = useCallback(() => {
      if (isChild) {
        dispatch(
          cacheSlice.actions.saveChildTrySomethingItem({
            title: t(activeItem.title),
            description: t(activeItem.subtitle),
          }),
        );
      } else {
        dispatch(
          cacheSlice.actions.saveParentTrySomethingItem({
            title: t(activeItem.title),
            description: t(activeItem.subtitle),
          }),
        );
      }

      onSubmit();
    }, [activeItem.subtitle, activeItem.title, dispatch, isChild, onSubmit, t]);

    return (
      <ImageBackground
        // TODO: change to real image
        source={
          backgroundImage
            ? IMAGES[backgroundImage]
            : {
                uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
              }
        }
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <Modal isVisible={isModal} style={styles.modal}>
            <TrySomethingModal
              titleHasNickname={titleHasNickname ?? false}
              setModalStatus={setModalStatus}
              title={tellMoreTitle ?? ''}
              subtitle={tellMoreDescription ?? ''}
              // TODO: change to real image
              backgroundImage={
                backgroundImage
                  ? IMAGES[backgroundImage]
                  : {
                      uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
                    }
              }
            />
          </Modal>
          <MainHeader
            leftIcon={<WhiteBackArrowIcon />}
            rightIcon={<WhiteCrossIcon />}
            onLeftIconPress={goBack}
          />
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Title />
              <ExtendedText style={styles.subtitle}>{description}</ExtendedText>
            </View>
            <TrySomethingCarousel
              data={TRY_SOMETHING_ITEMS}
              setIndex={setActiveItemIndex}
            />
            <View style={styles.buttonsConainer}>
              <ExtendedButton
                style={styles.selectButton}
                title={t('buttons.select')}
                onPress={onSubmitPress}
              />
              <ExtendedButton
                title={t('buttons.create_your_own')}
                onPress={() => setIsModal(true)}
              />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  };
