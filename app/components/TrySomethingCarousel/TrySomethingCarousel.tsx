import _ from 'lodash';
import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import ReanimatedCarousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';

import { WINDOW_WIDTH } from '../../constants/window';
import { generalStyles } from '../../utils/styles';
import { ITrySomethingCarouselProps } from './TrySomethingCarousel.types';
import { styles } from './TrySomethingCarousel.styles';
import { ProgressBarItem, TrySomethingCarouselItem } from './components';
import {
  CAROUSEL_MODE_CONFIG,
  ITrySomethingCarouselItem,
} from './TrySomethingCarousel.data';

export const TrySomethingCarousel: React.FC<ITrySomethingCarouselProps> = ({
  data,
  setIndex,
}) => {
  const progressValue = useSharedValue(0);

  const [currentPosition, setCurrentPosition] = useState(0);

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
    ({ item, index }: { item: ITrySomethingCarouselItem; index: number }) => (
      <TrySomethingCarouselItem
        data={item}
        isActive={index === currentPosition}
      />
    ),
    [currentPosition],
  );

  const onScrollBegin = useCallback(() => {
    setCurrentPosition(-1);
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <ReanimatedCarousel
        loop={false}
        width={WINDOW_WIDTH}
        data={[...data]}
        renderItem={renderCarouselItem}
        mode={'parallax'}
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
