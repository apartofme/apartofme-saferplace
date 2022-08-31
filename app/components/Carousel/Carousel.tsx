import _ from 'lodash';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import ReanimatedCarousel from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';

import { WINDOW_WIDTH } from '../../constants/window';
import { generalStyles } from '../../utils/styles';
import { ICarouselProps } from './Carousel.props';
import { styles } from './Carousel.styles';
import {
  ImageSubTitle,
  ImageTitleSubTitle,
  ProgressBarItem,
} from './components';
import { CarouselType, ICarouselItem } from './Carousel.data';

export const Carousel: React.FC<ICarouselProps> = ({
  preset,
  data,
  setIndex,
}) => {
  const progressValue = useSharedValue<number>(0);

  const onProgressChange = useCallback(
    (item, absoluteProgress) => {
      progressValue.value = absoluteProgress;
      if (setIndex) {
        setIndex(progressValue.value);
      }
    },
    [progressValue, setIndex],
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
    ({ item }: { item: ICarouselItem }) => {
      switch (preset) {
        case CarouselType.ImageTitleSubTitle:
          return <ImageTitleSubTitle data={item} />;
        case CarouselType.ImageSubTitle:
          return <ImageSubTitle data={item} />;
        default:
          return <View />;
      }
    },
    [preset],
  );

  return (
    <View style={styles.container}>
      <ReanimatedCarousel
        loop={false}
        width={WINDOW_WIDTH}
        data={data}
        renderItem={renderCarouselItem}
        style={generalStyles.flex}
        onProgressChange={onProgressChange}
      />
      <View style={generalStyles.aiCenter}>{renderProgressBar()}</View>
    </View>
  );
};
