import React, { useCallback, useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import Modal from 'react-native-modal';

import { IEmotionCarouselScreenProps } from './EmotionCarousel.types';
import { styles } from './EmotionCarousel.styles';
import {
  useAppDispatch,
  useAppSelector,
  useMount,
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks';
import { CHARMS_BACKGROUNDS } from '../../../assets';
import { generalStyles } from '../../../utils/styles';
import {
  BottomButtonView,
  Carousel,
  CarouselType,
  EMOTION_CAROUSEL,
  ExtendedButton,
} from '../../../components';
import { cacheSlice } from '../../../redux/slices';
import { EmotionModal } from './components';

export const EmotionCarouselScreen: React.FC<IEmotionCarouselScreenProps> = ({
  route,
}) => {
  const {
    title,
    buttonTitle,
    backgroundImage,
    tellMoreTitle,
    titleHasNickname,
    crossHeader,
    escapeMenuAlternativeNavigateTo,
  } = route.params.data;

  const { t } = useTranslation();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [emotionData, setEmotionData] = useState(_.cloneDeep(EMOTION_CAROUSEL));
  const [activeItem, setActiveItem] = useState(emotionData[0]);
  const [isModal, setIsModal] = useState(false);
  const dispatch = useAppDispatch();
  const playerEmotion = useAppSelector(state => {
    const emotion = state.cache.emotions.selected;
    if (emotion) {
      return t(`labels.${emotion}`).toLocaleLowerCase();
    }
  });
  const navigateToNextQuest = useNavigateNextQuest();

  const Title = useParsedJSXTextNickname({
    text: title,
    textHasNickname: titleHasNickname ?? true,
    preset: 'title',
    style: styles.title,
  });

  const Header = useRenderQuestHeader({
    crossHeader: crossHeader ?? false,
    escapeMenuAlternativeNavigateTo,
  });

  const onSubmit = useCallback(() => {
    dispatch(cacheSlice.actions.saveEmotionItem(activeItem));
    navigateToNextQuest();
  }, [activeItem, dispatch, navigateToNextQuest]);

  const setModalStatus = useCallback(() => {
    setIsModal(!isModal);
  }, [isModal]);

  useMount(() => {
    setEmotionData(prev =>
      _.map(prev, item =>
        _.merge(item, {
          titleKey: t(item.titleKey ?? '').replace('|emotion|', playerEmotion),
        }),
      ),
    );
  });

  useEffect(() => {
    setActiveItem(emotionData[activeItemIndex]);
  }, [activeItemIndex, emotionData]);

  return (
    <ImageBackground
      source={
        CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
      }
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <Modal isVisible={isModal} style={styles.modal}>
          <EmotionModal
            title={tellMoreTitle ?? ''}
            backgroundImage={
              CHARMS_BACKGROUNDS[
                backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND'
              ]
            }
            setModalStatus={setModalStatus}
          />
        </Modal>
        <Header />
        <BottomButtonView
          buttonTitle={buttonTitle ?? t('buttons.select')}
          onSubmit={onSubmit}
          style={styles.container}>
          <Title />
          <Carousel
            data={emotionData}
            preset={CarouselType.Card}
            setIndex={setActiveItemIndex}
            style={styles.carouselContainer}
            carouselStyle={styles.carousel}
          />
        </BottomButtonView>
        <ExtendedButton
          title={t('buttons.write_your_own')}
          onPress={() => setIsModal(true)}
          style={styles.bottomButton}
          preset="border"
        />
      </SafeAreaView>
    </ImageBackground>
  );
};
