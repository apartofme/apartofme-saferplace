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
import { CHARMS_BACKGROUNDS } from '../../../assets';
import { useAppDispatch, useAppSelector } from '../../../hooks';
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
import { ITrySomethingNewCarouselScreenProps } from './TrySomethingNewCarousel.types';
import { SVG } from '../../../assets/svg';
import {
  SECOND_TRY_SOMETHING_ITEMS,
  TRY_SOMETHING_DISCOVERY_ITEMS,
} from './TrySomethingNewCarousel.data';
import { THE_CHARM_OF_DISCOVERY_ID } from '../../../constants/quest';

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

    const curentQuestLineId = useAppSelector(
      state => state.quest.currentQuestLine?.id,
    );

    const carouselData =
      THE_CHARM_OF_DISCOVERY_ID === curentQuestLineId
        ? TRY_SOMETHING_DISCOVERY_ITEMS
        : SECOND_TRY_SOMETHING_ITEMS;

    const [activeItem, setActiveItem] = useState(carouselData[0]);

    const [activeItemIndex, setActiveItemIndex] = useState(0);

    const [isModal, setIsModal] = useState(false);

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'title',
      style: generalStyles.brilliantWhite,
    });

    const { t } = useTranslation();

    const goBack = useNavigatePrevQuest();
    const onSubmit = useNavigateNextQuest();
    const isChild = useIsChildMove(title);

    const setModalStatus = useCallback(() => {
      setIsModal(!isModal);
    }, [isModal]);

    useEffect(() => {
      setActiveItem(carouselData[activeItemIndex]);
    }, [activeItemIndex, carouselData]);

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
        source={
          CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
        }
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <Modal isVisible={isModal} style={styles.modal}>
            <TrySomethingModal
              titleHasNickname={titleHasNickname ?? false}
              setModalStatus={setModalStatus}
              title={tellMoreTitle ?? ''}
              subtitle={tellMoreDescription ?? ''}
              backgroundImage={
                CHARMS_BACKGROUNDS[
                  backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND'
                ]
              }
              isDiscovery={THE_CHARM_OF_DISCOVERY_ID === curentQuestLineId}
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
              data={carouselData}
              setIndex={setActiveItemIndex}
            />

            <View style={styles.buttonsConainer}>
              <ExtendedButton
                style={styles.selectButton}
                title={t('buttons.select')}
                onPress={onSubmitPress}
              />
              <ExtendedButton
                preset="border"
                title={t('buttons.create_your_own')}
                onPress={() => setIsModal(true)}
              />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  };
