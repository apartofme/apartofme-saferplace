import React from 'react';
import { Image, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { IFavouriteCharmCarouselItemProps } from './FavouriteCharmCarouselItem.types';
import { styles } from './FavouriteCharmCarouselItem.styles';
import { IMAGES } from '../../../../assets';
import { ExtendedText } from '../../../ExtendedText';
import { generalStyles } from '../../../../utils/styles';
import { CAROUSEL_COLORS } from './FavouriteCharmCarouselItem.colors';

export const FavouriteCharmCarouselItem: React.FC<IFavouriteCharmCarouselItemProps> =
  ({ data, isActive }) => {
    const { t } = useTranslation();
    // TODO: change to correct duration
    const progressValue = useDerivedValue(() => {
      return isActive
        ? withTiming(1, { duration: 500 })
        : withTiming(0, { duration: 1000 });
    }, [isActive]);

    // TODO: change to correct styles
    const backgroundColorStyles = useAnimatedStyle(() => {
      const backgroundColor = interpolateColor(
        progressValue.value,
        [0, 1],
        [CAROUSEL_COLORS.INACTIVE, CAROUSEL_COLORS.ACTIVE],
      );
      return {
        backgroundColor,
      };
    });

    return (
      <GestureHandlerRootView style={generalStyles.flex}>
        <View style={styles.container}>
          <Animated.View
            style={[styles.contentContainer, backgroundColorStyles]}>
            <Image source={IMAGES[data.image]} style={styles.image} />
            <ExtendedText preset="heading" style={styles.title}>
              {t(data.title)}
            </ExtendedText>
          </Animated.View>
        </View>
      </GestureHandlerRootView>
    );
  };
