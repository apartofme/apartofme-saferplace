import React, { useCallback } from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';

import { WINDOW_WIDTH } from '../../constants/window';
import { generalStyles } from '../../utils/styles';
import { ISoundCarouselItemProps } from './SoundCarousel.types';
import { styles } from './SoundCarousel.styles';
import { OnlyImage } from './components';
import { CAROUSEL_MODE_CONFIG, ISoundCarouselItem } from './SoundCarousel.data';

export const SoundCarousel: React.FC<ISoundCarouselItemProps> = ({
  data,
  setCurrentPossition,
  setCurrentSong,
  style,
  carouselRef,
}) => {
  const progressValue = useSharedValue(0);

  const onSnapToItem = useCallback(
    index => {
      const currentPosition = Math.floor(index);
      setCurrentSong(data[currentPosition].id);
    },
    [data, setCurrentSong],
  );

  const onProgressChange = useCallback(
    (item, absoluteProgress) => {
      progressValue.value = absoluteProgress;
      if (setCurrentPossition) {
        setCurrentPossition(progressValue.value);
      }
    },
    [progressValue, setCurrentPossition],
  );

  const renderCarouselItem = useCallback(
    ({ item }: { item: ISoundCarouselItem }) => {
      return <OnlyImage data={item} />;
    },
    [],
  );

  return (
    <GestureHandlerRootView style={[styles.container, style]}>
      <Carousel
        ref={carouselRef}
        loop={false}
        width={WINDOW_WIDTH}
        data={[...data]}
        mode={'parallax'}
        modeConfig={CAROUSEL_MODE_CONFIG}
        defaultIndex={1}
        renderItem={renderCarouselItem}
        style={generalStyles.flex}
        onSnapToItem={onSnapToItem}
        onProgressChange={onProgressChange}
      />
    </GestureHandlerRootView>
  );
};
