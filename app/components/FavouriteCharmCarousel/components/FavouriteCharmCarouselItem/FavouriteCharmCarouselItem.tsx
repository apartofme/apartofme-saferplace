import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { IFavouriteCharmCarouselItemProps } from './FavouriteCharmCarouselItem.types';
import { styles } from './FavouriteCharmCarouselItem.styles';
import { ExtendedText } from '../../../ExtendedText';
import { generalStyles } from '../../../../utils/styles';
import { SVG } from '../../../../assets/svg';

export const FavouriteCharmCarouselItem: React.FC<IFavouriteCharmCarouselItemProps> =
  ({ data, isActive }) => {
    const { t } = useTranslation();

    const progressValue = useDerivedValue(() => {
      return isActive
        ? withTiming(1, { duration: 250 })
        : withTiming(0, { duration: 500 });
    }, [isActive]);

    const itemStyles = useAnimatedStyle(() => {
      const borderWidth = interpolate(progressValue.value, [0, 1], [1, 2]);

      const opacity = interpolate(progressValue.value, [0, 1], [0.5, 1]);

      return {
        borderWidth,
        opacity,
      };
    });

    const Icon = SVG[data.iconKey];
    return (
      <GestureHandlerRootView style={generalStyles.flex}>
        <View style={styles.container}>
          <Animated.View style={[styles.contentContainer, itemStyles]}>
            <Icon height={96} width={96} />
            <ExtendedText preset="heading" style={styles.title}>
              {t(data.title)}
            </ExtendedText>
          </Animated.View>
        </View>
      </GestureHandlerRootView>
    );
  };
