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
import { EmotionsCarouselSvgKeys } from '../../../utils/types';

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
  const playerEmotion =
    useAppSelector(state => state.cache.emotions.selected) ?? '';

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
    dispatch(
      cacheSlice.actions.saveEmotionItem({
        title: t(activeItem.titleKey ?? ''),
        image: activeItem.image as EmotionsCarouselSvgKeys,
      }),
    );
    navigateToNextQuest();
  }, [activeItem.image, activeItem.titleKey, dispatch, navigateToNextQuest, t]);

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
            preset={CarouselType.Emotion}
            setIndex={setActiveItemIndex}
            style={styles.carousel}
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
