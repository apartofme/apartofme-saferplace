import _ from 'lodash';
import React, { useCallback } from 'react';
import { ImageSourcePropType, View } from 'react-native';
import ReanimatedCarousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';

import { WINDOW_WIDTH } from '../../constants/window';
import { generalStyles } from '../../utils/styles';
import { ICarouselProps } from './Carousel.types';
import { styles } from './Carousel.styles';
import {
  ImageTitleSubTitle,
  OnlyImage,
  ProgressBarItem,
  ImageSubtitle,
  SubtitleImage,
} from './components';
import { CarouselType, ICarouselItem } from './Carousel.data';

export const Carousel: React.FC<ICarouselProps> = ({
  preset,
  data,
  setCurrentPossition,
  setImage,
  style,
  carouselStyle,
  carouselItemStyle,
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
        case CarouselType.ImageTitleSubtitle:
          return <ImageTitleSubTitle data={item} style={carouselItemStyle} />;
        case CarouselType.SubtitleImage:
          return <SubtitleImage data={item} style={carouselItemStyle} />;
        case CarouselType.OnlyImage:
          return <OnlyImage data={item} style={carouselItemStyle} />;
        case CarouselType.ImageSubtitle:
          return <ImageSubtitle data={item} style={carouselItemStyle} />;
        default:
          return <View />;
      }
    },
    [carouselItemStyle, preset],
  );

  return (
    <GestureHandlerRootView style={[styles.container, style]}>
      <ReanimatedCarousel
        loop={false}
        width={WINDOW_WIDTH}
        data={[...data]}
        //* Set undefind for default mode
        mode={preset === CarouselType.OnlyImage ? 'parallax' : undefined}
        renderItem={renderCarouselItem}
        style={[generalStyles.flex, carouselStyle]}
        onProgressChange={onProgressChange}
        onSnapToItem={onSnapToItem}
      />
      <View style={styles.progressBar}>{renderProgressBar()}</View>
    </GestureHandlerRootView>
  );
};
