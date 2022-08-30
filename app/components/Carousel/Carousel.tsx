import _ from 'lodash';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import ReanimatedCarousel from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';

import { WINDOW_WIDTH } from '../../constants/window';
import { generalStyles } from '../../utils/styles';
import { ICarouselProps } from './Carousel.props';
import { styles } from './Carousel.styles';
import { ImageTitleSubTitle, PogressBarItem } from './components';
import { CarouselType, ICarouselItem } from './Carousel.data';

export const Carousel: React.FC<ICarouselProps> = ({ preset, data }) => {
  const progressValue = useSharedValue<number>(0);

  const onProgressChange = useCallback(
    (item, absoluteProgress) => (progressValue.value = absoluteProgress),
    [progressValue],
  );

  const renderProgressBar = useCallback(() => {
    return (
      <View style={generalStyles.row}>
        {_.map(data, (item, index) => (
          <PogressBarItem
            index={index}
            length={data.length}
            key={index}
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
          return <ImageTitleSubTitle data={item} />;
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
