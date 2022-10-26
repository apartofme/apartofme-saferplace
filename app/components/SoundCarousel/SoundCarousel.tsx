import React, { useCallback, useState } from 'react';
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
  const [currentPosition, setCurrentPosition] = useState(0);

  const onSnapToItem = useCallback(
    index => {
      console.log('pos', index);
      setCurrentPosition(index);
      setCurrentSong(data[index].id);
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
    ({ item, index }: { item: ISoundCarouselItem; index: number }) => {
      const isActive = index === currentPosition;
      return <OnlyImage data={item} isActive={isActive} />;
    },
    [currentPosition],
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
        renderItem={renderCarouselItem}
        style={generalStyles.flex}
        onSnapToItem={onSnapToItem}
        onScrollEnd={setCurrentPosition}
        onProgressChange={onProgressChange}
      />
    </GestureHandlerRootView>
  );
};
