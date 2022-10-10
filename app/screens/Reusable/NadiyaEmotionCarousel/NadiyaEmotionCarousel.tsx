import React, { useCallback, useState } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';

import { styles } from './NadiyaEmotionCarousel.styles';
import {
  useAppDispatch,
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks';
import { BottomButtonView, EmotionCarousel } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IMAGES } from '../../../assets';
import { NADIYA_EMOTION_CAROUSEL_ITEMS } from './NadiyaEmotionCarousel.data';
import { INadiyaEmotionCarouselScreenProps } from './NadiyaEmotionCarousel.types';

export const NadiyaEmotionCarouselScreen: React.FC<INadiyaEmotionCarouselScreenProps> =
  ({ route }) => {
    const {
      title,
      buttonTitle,
      backgroundImage,
      titleHasNickname,
      crossHeader,
    } = route.params.data;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [activeItemIndex, setActiveItemIndex] = useState(0);

    const navigateToNextQuest = useNavigateNextQuest();

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'title',
      style: styles.title,
      // TODO: remove
      nicknameStyle: { color: '#00dbc0' },
    });

    const Header = useRenderQuestHeader(crossHeader ?? false);

    const onSubmit = useCallback(() => {
      navigateToNextQuest();
    }, [navigateToNextQuest]);

    return (
      <ImageBackground
        // TODO: change to real default image
        source={
          (backgroundImage && IMAGES[backgroundImage]) ?? {
            uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
          }
        }
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <Header />
          <BottomButtonView
            buttonTitle={buttonTitle ?? t('buttons.select')}
            onSubmit={onSubmit}
            style={styles.container}>
            <EmotionCarousel
              data={NADIYA_EMOTION_CAROUSEL_ITEMS}
              setIndex={setActiveItemIndex}
            />
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
