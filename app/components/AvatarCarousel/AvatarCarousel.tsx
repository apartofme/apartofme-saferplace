import _ from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import ReanimatedCarousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';

import { WINDOW_WIDTH } from '../../constants/window';
import { generalStyles } from '../../utils/styles';
import { IAvatarCarouselProps } from './AvatarCarousel.types';
import { styles } from './AvatarCarousel.styles';
import { AVATAR_CAROUSEL, IAvatarCarouselItem } from './AvatarCarousel.data';

import { AvatarCarouselItem, ProgressBarItem } from './components';

export const AvatarCarousel: React.FC<IAvatarCarouselProps> = ({
  setImage,
  defaultImage,
  style,
}) => {
  const progressValue = useSharedValue(0);
  const [defaultIndex, setDefaultIndex] = useState<number>();

  useEffect(() => {
    setDefaultIndex(
      defaultImage
        ? _.findIndex(AVATAR_CAROUSEL, item => item.image === defaultImage)
        : 0,
    );
  }, [defaultImage, defaultIndex]);

  const onSnapToItem = useCallback(
    index => {
      const currentPosition = Math.floor(index);
      if (setImage && AVATAR_CAROUSEL[currentPosition].image) {
        setImage(AVATAR_CAROUSEL[currentPosition].image as string);
      }
    },
    [setImage],
  );

  const onProgressChange = useCallback(
    (item, absoluteProgress) => {
      progressValue.value = absoluteProgress;
    },
    [progressValue],
  );

  const renderProgressBar = useCallback(() => {
    return (
      <View style={generalStyles.row}>
        {_.map(AVATAR_CAROUSEL, (item, index) => (
          <ProgressBarItem
            index={index}
            key={index}
            length={AVATAR_CAROUSEL.length}
            animValue={progressValue}
          />
        ))}
      </View>
    );
  }, [progressValue]);

  const renderCarouselItem = useCallback(
    ({ item }: { item: IAvatarCarouselItem }) => {
      return <AvatarCarouselItem data={item} />;
    },
    [],
  );

  return (
    <GestureHandlerRootView style={[styles.container, style]}>
      <ReanimatedCarousel
        loop={false}
        width={WINDOW_WIDTH}
        defaultIndex={defaultIndex}
        data={[...AVATAR_CAROUSEL]}
        renderItem={renderCarouselItem}
        style={generalStyles.flex}
        onSnapToItem={onSnapToItem}
        onProgressChange={onProgressChange}
      />
      <View style={styles.progressBar}>{renderProgressBar()}</View>
    </GestureHandlerRootView>
  );
};
