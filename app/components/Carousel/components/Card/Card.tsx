import React, { useMemo } from 'react';
import { ViewStyle } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

import { generalStyles } from '../../../../utils/styles';
import { styles } from './Card.styles';
import { ExtendedText } from '../../../ExtendedText';
import { ICarouselItemProps, ICarouselItem } from '../../Carousel.types';
import {
  CHARMS_SVG,
  EMOTIONS_CAROUSEL_SVG,
  SVG_FAVORITE_CHARM,
  SVG_TRY_NEW,
} from '../../../../assets/svg';
import {
  CharmsSvgKeys,
  EmotionsCarouselSvgKeys,
  FavoriteCharmSvgKeys,
  TryNewSVG,
} from '../../../../utils/types';
import { OPACITY_RANGE } from '../../Carousel.data';
import { WINDOW_COEFFICIENT } from '../../../../constants/window';

export const Card: React.FC<ICarouselItemProps<ICarouselItem>> = ({
  data,
  animValue,
  index,
  style,
}) => {
  const { t } = useTranslation();

  const animationStyle = useAnimatedStyle(() => {
    const inputRange = [index - 1, index, index + 1];

    const opacity = interpolate(
      animValue.value,
      inputRange,
      OPACITY_RANGE,
      Extrapolate.CLAMP,
    );

    const borderWidth = interpolate(
      animValue.value,
      inputRange,
      [1, 2, 1],
      Extrapolate.CLAMP,
    );

    return {
      opacity,
      borderWidth,
    };
  }, [animValue, index]);

  const Icon = useMemo(() => {
    if (data.iconKey in CHARMS_SVG) {
      return CHARMS_SVG[data.iconKey as CharmsSvgKeys];
    }
    if (data.iconKey in SVG_FAVORITE_CHARM) {
      return SVG_FAVORITE_CHARM[data.iconKey as FavoriteCharmSvgKeys];
    }
    if (data.iconKey in EMOTIONS_CAROUSEL_SVG) {
      return EMOTIONS_CAROUSEL_SVG[data.iconKey as EmotionsCarouselSvgKeys];
    }
    if (data.iconKey in SVG_TRY_NEW) {
      return SVG_TRY_NEW[data.iconKey as TryNewSVG];
    }
  }, [data.iconKey]);

  const cardHeight: ViewStyle = useMemo(() => {
    return {
      maxHeight: data.descriptionKey ? 280 * WINDOW_COEFFICIENT : 240,
    };
  }, [data.descriptionKey]);

  return (
    <GestureHandlerRootView style={generalStyles.flex}>
      <Animated.View
        style={[styles.contentContainer, cardHeight, style, animationStyle]}>
        {!!Icon && <Icon width={96} height={96} />}
        {!!data.titleKey && (
          <ExtendedText preset="heading" style={styles.title}>
            {t(data.titleKey)}
          </ExtendedText>
        )}
        {!!data.descriptionKey && (
          <ExtendedText
            preset="tertiary-text-regular"
            style={styles.description}>
            {t(data.descriptionKey)}
          </ExtendedText>
        )}
      </Animated.View>
    </GestureHandlerRootView>
  );
};
