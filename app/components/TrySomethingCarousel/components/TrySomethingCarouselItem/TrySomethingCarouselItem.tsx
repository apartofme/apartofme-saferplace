import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

import { IOnlyImageProps } from './TrySomethingCarouselItem.types';
import { styles } from './TrySomethingCarouselItem.styles';
import { ExtendedText } from '../../../ExtendedText';
import { generalStyles } from '../../../../utils/styles';
import { SVG_TRY_NEW } from '../../../../assets/svg';

export const TrySomethingCarouselItem: React.FC<IOnlyImageProps> = ({
  data,
  isActive,
}) => {
  const { t } = useTranslation();

  const progressValue = useDerivedValue(() => {
    return isActive
      ? withTiming(1, { duration: 250 })
      : withTiming(0, { duration: 500 });
  }, [isActive]);

  const opacityContainer = useAnimatedStyle(() => {
    const opacity = interpolate(progressValue.value, [0, 1], [0.5, 1]);

    return {
      opacity,
    };
  });

  const Icon = SVG_TRY_NEW[data.iconKey];

  return (
    <GestureHandlerRootView style={generalStyles.aiCenter}>
      <Animated.View style={[styles.container, opacityContainer]}>
        <Icon />
        <ExtendedText style={styles.title} preset="heading">
          {t(data.title)}
        </ExtendedText>
        <ExtendedText style={styles.subtitle} preset="tertiary-text-regular">
          {t(data.subtitle)}
        </ExtendedText>
      </Animated.View>
    </GestureHandlerRootView>
  );
};
