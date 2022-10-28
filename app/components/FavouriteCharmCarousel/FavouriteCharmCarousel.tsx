import _ from 'lodash';
import React, { useCallback, useState } from 'react';
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
import { CAROUSEL_MODE_CONFIG } from './FavouriteCharmCarousel.data';

export const FavouriteCharmCarousel: React.FC<IFavouriteCharmCarouselProps> = ({
  data,
  setIndex,
  style,
}) => {
  const progressValue = useSharedValue(0);
  const [currentPosition, setCurrentPosition] = useState(0);

  const onProgressChange = useCallback(
    (item, absoluteProgress) => {
      progressValue.value = absoluteProgress;
    },
    [progressValue],
  );

  const onScrollBegin = useCallback(() => {
    setCurrentPosition(-1);
  }, []);

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
    ({ item, index }: { item: IFavouriteCharmCarouselItem; index: number }) => {
      return (
        <FavouriteCharmCarouselItem
          data={item}
          isActive={index === currentPosition}
        />
      );
    },
    [currentPosition],
  );

  return (
    <GestureHandlerRootView style={[styles.container, style]}>
      <ReanimatedCarousel
        loop={false}
        width={WINDOW_WIDTH}
        data={[...data]}
        renderItem={renderCarouselItem}
        mode="parallax"
        modeConfig={CAROUSEL_MODE_CONFIG}
        style={generalStyles.flex}
        onSnapToItem={_.flow(Math.floor, setIndex)}
        onProgressChange={onProgressChange}
        onScrollBegin={onScrollBegin}
        onScrollEnd={setCurrentPosition}
      />
      <View style={styles.progressBar}>{renderProgressBar()}</View>
    </GestureHandlerRootView>
  );
};
