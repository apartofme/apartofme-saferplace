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

import { styles } from './TroublesomeSpiritQuestion.styles';
import { ExtendedText } from '../../../ExtendedText';
import { generalStyles } from '../../../../utils/styles';
import { ICarouselItemProps } from '../../Carousel.types';
import { CHARMS_SVG } from '../../../../assets/svg';
import { CharmsSvgKeys } from '../../../../utils/types';

export const TroublesomeSpiritQuestion: React.FC<ICarouselItemProps> = ({
  data,
  isActive,
}) => {
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

  const Icon = CHARMS_SVG[data.image as CharmsSvgKeys];

  return (
    <GestureHandlerRootView style={generalStyles.flex}>
      <View style={styles.container}>
        <Animated.View style={[styles.contentContainer, itemStyles]}>
          {Icon && <Icon width={96} height={96} />}
          <ExtendedText preset="heading" style={styles.title}>
            {t(data.titleKey ?? '')}
          </ExtendedText>
        </Animated.View>
      </View>
    </GestureHandlerRootView>
  );
};
