import React, { useCallback, useMemo, useState } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import { styles } from './NadiyaEmotionCarousel.styles';
import {
  useMount,
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks';
import {
  BottomButtonView,
  EmotionCarousel,
  ExtendedText,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IMAGES } from '../../../assets';
import { NADIYA_EMOTION_CAROUSEL_ITEMS } from './NadiyaEmotionCarousel.data';
import { INadiyaEmotionCarouselScreenProps } from './NadiyaEmotionCarousel.types';

export const NadiyaEmotionCarouselScreen: React.FC<INadiyaEmotionCarouselScreenProps> =
  ({ route }) => {
    const {
      title,
      description,
      buttonTitle,
      backgroundImage,
      titleHasNickname,
      crossHeader,
    } = route.params.data;

    const { t } = useTranslation();
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [nadiyaEmotionData, setNadiyaEmotionData] = useState(
      NADIYA_EMOTION_CAROUSEL_ITEMS,
    );

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

    const nadiyaEmotion = useMemo(() => {
      return title.split(' ').pop()?.replace(/\W/g, '') ?? '';
    }, [title]);

    useMount(() => {
      setNadiyaEmotionData(prev =>
        _.map(prev, item =>
          _.merge(item, {
            title: t(item.title).replace('|nadiyaEmotion|', nadiyaEmotion),
          }),
        ),
      );
    });

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
            <Title />
            <ExtendedText preset="secondary-text" style={styles.description}>
              {description}
            </ExtendedText>
            <EmotionCarousel
              data={nadiyaEmotionData}
              setIndex={setActiveItemIndex}
            />
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
