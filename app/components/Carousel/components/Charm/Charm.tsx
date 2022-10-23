import React from 'react';
import { View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

import { generalStyles } from '../../../../utils/styles';
import { styles } from './Charm.styles';
import { ExtendedText } from '../../../ExtendedText';
import { ICarouselItemProps } from '../../Carousel.types';
import { SvgComponentType } from '../../../../utils/types';

export const Charm: React.FC<ICarouselItemProps> = ({
  data,
  isActive,
  style,
}) => {
  const { t } = useTranslation();

  const progressValue = useDerivedValue(() => {
    return isActive
      ? withTiming(1, { duration: 250 })
      : withTiming(0, { duration: 500 });
  }, [isActive]);

  const backgroundColorStyles = useAnimatedStyle(() => {
    const borderWidth = interpolate(progressValue.value, [0, 1], [1, 2]);

    const opacity = interpolate(progressValue.value, [0, 1], [0.5, 1]);

    return {
      borderWidth,
      opacity,
    };
  });

  const Icon = data.image as SvgComponentType;

  return (
    <GestureHandlerRootView style={generalStyles.flex}>
      <View style={[styles.container, style]}>
        <Animated.View style={[styles.contentContainer, backgroundColorStyles]}>
          {data.image && <Icon width={96} height={96} />}
          {data.titleKey && (
            <ExtendedText preset="heading" style={styles.title}>
              {t(data.titleKey)}
            </ExtendedText>
          )}
        </Animated.View>
      </View>
    </GestureHandlerRootView>
  );
};
