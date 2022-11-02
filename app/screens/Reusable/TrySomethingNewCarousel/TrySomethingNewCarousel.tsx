import { ImageBackground, SafeAreaView } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from 'react-native-modal';

import {
  BottomButtonView,
  Carousel,
  CarouselType,
  ExtendedButton,
  ExtendedText,
} from '../../../components';
import { CHARMS_BACKGROUNDS } from '../../../assets';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import {
  useIsChildMove,
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks/quest';
import { cacheSlice } from '../../../redux/slices';
import { generalStyles } from '../../../utils/styles';
import { TrySomethingModal } from './components';
import { styles } from './TrySomethingNewCarousel.styles';
import { ITrySomethingNewCarouselScreenProps } from './TrySomethingNewCarousel.types';
import {
  TRY_SOMETHING_FIRST,
  TRY_SOMETHING_SECOND,
} from './TrySomethingNewCarousel.data';
import { TRY_SOMETHING_NEW_PART_ONE_ID } from '../../../constants/quest';

export const TrySomethingNewCarouselScreen: React.FC<ITrySomethingNewCarouselScreenProps> =
  ({ route }) => {
    const {
      title,
      buttonTitle,
      description,
      tellMoreTitle,
      tellMoreDescription,
      backgroundImage,
      titleHasNickname,
      crossHeader,
      escapeMenuAlternativeNavigateTo,
    } = route.params.data;

    const dispatch = useAppDispatch();

    const curentQuestLineId = useAppSelector(
      state => state.quest.currentQuestLine?.id,
    );
    const isFirstPart = TRY_SOMETHING_NEW_PART_ONE_ID === curentQuestLineId;

    const carouselData = isFirstPart
      ? TRY_SOMETHING_FIRST
      : TRY_SOMETHING_SECOND;

    const [activeItem, setActiveItem] = useState(carouselData[0]);

    const [activeItemIndex, setActiveItemIndex] = useState(0);

    const [isModal, setIsModal] = useState(false);

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'title',
      style: styles.title,
    });

    const { t } = useTranslation();

    const onSubmit = useNavigateNextQuest();
    const isChild = useIsChildMove(title);

    const setModalStatus = useCallback(() => {
      setIsModal(!isModal);
    }, [isModal]);

    useEffect(() => {
      setActiveItem(carouselData[activeItemIndex]);
    }, [activeItemIndex, carouselData]);

    const onSubmitPress = useCallback(() => {
      if (isFirstPart) {
        if (isChild) {
          dispatch(
            cacheSlice.actions.saveChildTrySomethingFirstItem(activeItem),
          );
        } else {
          dispatch(
            cacheSlice.actions.saveParentTrySomethingFirstItem(activeItem),
          );
        }
      } else {
        if (isChild) {
          dispatch(
            cacheSlice.actions.saveChildTrySomethingSecondItem(activeItem),
          );
        } else {
          dispatch(
            cacheSlice.actions.saveParentTrySomethingSecondItem(activeItem),
          );
        }
      }

      onSubmit();
    }, [activeItem, dispatch, isChild, isFirstPart, onSubmit]);

    const Header = useRenderQuestHeader({
      crossHeader: crossHeader ?? false,
      escapeMenuAlternativeNavigateTo,
    });

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
              isFirstPart={isFirstPart}
            />
          </Modal>
          <Header />
          <BottomButtonView
            buttonTitle={buttonTitle || t('buttons.next')}
            isArrow={!buttonTitle}
            onSubmit={onSubmitPress}
            style={styles.container}>
            <Title />
            <ExtendedText style={styles.subtitle}>{description}</ExtendedText>
            <Carousel
              preset={CarouselType.Card}
              data={carouselData}
              setIndex={setActiveItemIndex}
              carouselStyle={styles.carousel}
            />
          </BottomButtonView>
          <ExtendedButton
            preset="border"
            title={t('buttons.create_your_own')}
            onPress={() => setIsModal(true)}
            style={styles.bottomButton}
          />
        </SafeAreaView>
      </ImageBackground>
    );
  };
