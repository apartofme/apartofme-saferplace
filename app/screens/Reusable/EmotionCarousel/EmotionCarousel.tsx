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
import { IMAGES } from '../../../assets';
import { generalStyles } from '../../../utils/styles';
import {
  BottomButtonView,
  EmotionCarousel,
  ExtendedButton,
} from '../../../components';
import { EMOTION_CAROUSEL_ITEMS } from '../../../constants/emotionCarousel';
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
  const [emotionData, setEmotionData] = useState(
    _.cloneDeep(EMOTION_CAROUSEL_ITEMS),
  );
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
    // TODO: remove
    variableStyle: { color: '#00dbc0' },
  });

  const Header = useRenderQuestHeader({
    crossHeader: crossHeader ?? false,
    escapeMenuAlternativeNavigateTo,
  });

  const onSubmit = useCallback(() => {
    dispatch(cacheSlice.actions.saveEmotionItem(t(activeItem.title)));
    navigateToNextQuest();
  }, [activeItem.title, dispatch, navigateToNextQuest, t]);

  const setModalStatus = useCallback(() => {
    setIsModal(!isModal);
  }, [isModal]);

  useMount(() => {
    setEmotionData(prev =>
      _.map(prev, item =>
        _.merge(item, {
          title: t(item.title).replace('|emotion|', playerEmotion),
        }),
      ),
    );
  });

  useEffect(() => {
    setActiveItem(emotionData[activeItemIndex]);
  }, [activeItemIndex, emotionData]);

  return (
    <ImageBackground
      // TODO: change to real default image
      source={
        (backgroundImage && IMAGES[backgroundImage as keyof typeof IMAGES]) ?? {
          uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
        }
      }
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <Modal isVisible={isModal} style={styles.modal}>
          <EmotionModal
            title={tellMoreTitle ?? ''}
            backgroundImage={backgroundImage}
            setModalStatus={setModalStatus}
          />
        </Modal>
        <Header />
        <BottomButtonView
          buttonTitle={buttonTitle ?? t('buttons.select')}
          onSubmit={onSubmit}
          style={styles.container}>
          <Title />
          <EmotionCarousel
            data={emotionData}
            setIndex={setActiveItemIndex}
            style={styles.carousel}
            itemStyle={styles.carouselItem}
          />
        </BottomButtonView>
        <ExtendedButton
          title={t('buttons.write_your_own')}
          onPress={() => setIsModal(true)}
          style={styles.bottomButton}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};
