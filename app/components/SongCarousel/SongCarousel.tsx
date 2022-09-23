import React, { useCallback } from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';

import { WINDOW_WIDTH } from '../../constants/window';
import { generalStyles } from '../../utils/styles';
import { ISongCarouselItemProps } from './SongCarousel.types';
import { styles } from './SongCarousel.styles';
import { OnlyImage } from './components';
import { ISongCarouselItem } from './SongCarousel.data';

export const SongCarousel: React.FC<ISongCarouselItemProps> = ({
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
    ({ item }: { item: ISongCarouselItem }) => {
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
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 230,
          parallaxAdjacentItemScale: 0.4,
        }}
        defaultIndex={1}
        renderItem={renderCarouselItem}
        style={generalStyles.flex}
        onSnapToItem={onSnapToItem}
        onProgressChange={onProgressChange}
      />
    </GestureHandlerRootView>
  );
};
