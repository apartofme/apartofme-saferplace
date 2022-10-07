import _ from 'lodash';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import ReanimatedCarousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';

import { WINDOW_WIDTH } from '../../constants/window';
import { generalStyles } from '../../utils/styles';
import {
  IFavouriteCharmCarouselItem,
  IFavouriteCharmCarouselProps,
} from './FavouriteCharmCarousel.types';
import { styles } from './FavouriteCharmCarousel.styles';

import { FavouriteCharmCarouselItem, ProgressBarItem } from './components';

export const FavouriteCharmCarousel: React.FC<IFavouriteCharmCarouselProps> = ({
  data,
  setImage,
  style,
}) => {
  const progressValue = useSharedValue(0);

  const onSnapToItem = useCallback(
    index => {
      const currentPosition = Math.floor(index);
      if (setImage && data[currentPosition].image) {
        setImage(data[currentPosition].image as string);
      }
    },
    [data, setImage],
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
        {_.map(data, (item, index) => (
          <ProgressBarItem
            index={index}
            key={index}
            length={data.length}
            animValue={progressValue}
          />
        ))}
      </View>
    );
  }, [data, progressValue]);

  const renderCarouselItem = useCallback(
    ({ item }: { item: IFavouriteCharmCarouselItem }) => {
      return (
        <FavouriteCharmCarouselItem data={item} style={styles.itemContainer} />
      );
    },
    [],
  );

  return (
    <GestureHandlerRootView style={[styles.container, style]}>
      <ReanimatedCarousel
        loop={false}
        width={WINDOW_WIDTH}
        data={[...data]}
        renderItem={renderCarouselItem}
        style={[generalStyles.flex]}
        onSnapToItem={onSnapToItem}
        onProgressChange={onProgressChange}
      />
      <View style={styles.progressBar}>{renderProgressBar()}</View>
    </GestureHandlerRootView>
  );
};
