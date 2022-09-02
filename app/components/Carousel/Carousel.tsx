import _ from 'lodash';
import React, { useCallback } from 'react';
import { ImageSourcePropType, View } from 'react-native';
import ReanimatedCarousel from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';

import { WINDOW_WIDTH } from '../../constants/window';
import { generalStyles } from '../../utils/styles';
import { ICarouselProps } from './Carousel.props';
import { styles } from './Carousel.styles';
import {
  ImageSubTitle,
  ImageTitleSubTitle,
  OnlyImage,
  ProgressBarItem,
} from './components';
import { CarouselType, ICarouselItem } from './Carousel.data';

export const Carousel: React.FC<ICarouselProps> = ({
  preset,
  data,
  setCurrentPossition,
  setImage,
}) => {
  const progressValue = useSharedValue(0);

  const onProgressChange = useCallback(
    (item, absoluteProgress) => {
      progressValue.value = absoluteProgress;
      if (setCurrentPossition) {
        setCurrentPossition(progressValue.value);
      }
    },
    [progressValue, setCurrentPossition],
  );

  const onSnapToItem = useCallback(
    index => {
      const currentPosition = Math.floor(index);
      if (setImage && data[currentPosition].image) {
        setImage(data[currentPosition].image as ImageSourcePropType);
      }
    },
    [data, setImage],
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
        case CarouselType.OnlyImage:
          return <OnlyImage data={item} />;
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
        //* Set undefind for default mode
        mode={preset === CarouselType.OnlyImage ? 'parallax' : undefined}
        renderItem={renderCarouselItem}
        style={generalStyles.flex}
        onProgressChange={onProgressChange}
        onSnapToItem={onSnapToItem}
      />
      <View style={generalStyles.aiCenter}>{renderProgressBar()}</View>
    </View>
  );
};
