import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import { styles } from './NadiyaEmotionCarousel.styles';
import {
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks';
import {
  BottomButtonView,
  Carousel,
  CarouselType,
  ExtendedText,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { CHARMS_BACKGROUNDS } from '../../../assets';
import { INadiyaEmotionCarouselScreenProps } from './NadiyaEmotionCarousel.types';
import { EMOTION_CAROUSEL } from '../../../components';

export const NadiyaEmotionCarouselScreen: React.FC<INadiyaEmotionCarouselScreenProps> =
  ({ route }) => {
    const {
      title,
      description,
      buttonTitle,
      backgroundImage,
      titleHasNickname,
      crossHeader,
      escapeMenuAlternativeNavigateTo,
    } = route.params.data;

    const { t } = useTranslation();
    const [nadiyaEmotionData, setNadiyaEmotionData] = useState(
      _.cloneDeep(EMOTION_CAROUSEL),
    );
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
      navigateToNextQuest();
    }, [navigateToNextQuest]);

    const nadiyaEmotion = useMemo(
      () => title.split(' ').pop()?.replace(/\|/g, '').replace(/\*/g, ''),

      [title],
    );

    useEffect(() => {
      if (nadiyaEmotion) {
        setNadiyaEmotionData(prev =>
          _.map(prev, item =>
            _.merge(item, {
              titleKey: t(item.titleKey).replace('|emotion|', nadiyaEmotion),
            }),
          ),
        );
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nadiyaEmotion]);

    return (
      <ImageBackground
        source={
          CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
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
            <Carousel
              data={nadiyaEmotionData}
              preset={CarouselType.Card}
              carouselStyle={styles.carousel}
            />
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
