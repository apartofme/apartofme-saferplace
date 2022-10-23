import _ from 'lodash';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import ReanimatedCarousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { WINDOW_WIDTH } from '../../constants/window';
import { generalStyles } from '../../utils/styles';
import { ICarouselItem, ICarouselProps } from './Carousel.types';
import { styles } from './Carousel.styles';
import {
  Avatar,
  ImageTitleSubtitle,
  ProgressBarItem,
  ImageSubtitle,
  SubtitleImage,
} from './components';
import { CarouselType, CAROUSEL_MODE_CONFIG } from './Carousel.data';

export const Carousel: React.FC<ICarouselProps> = ({
  preset,
  data,
  defaultIndex = 0,
  setIndex,
  style,
  carouselStyle,
  carouselItemStyle,
}) => {
  const [progressValue, setProgressValue] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    setCurrentPosition(defaultIndex);
  }, [defaultIndex]);

  const mode = useMemo(() => {
    switch (preset) {
      case CarouselType.Avatar:
        return 'parallax';
    }
  }, [preset]);

  const onProgressChange = useCallback((item, absoluteProgress) => {
    setProgressValue(absoluteProgress);
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
    ({ item, index }: { item: ICarouselItem; index: number }) => {
      switch (preset) {
        case CarouselType.Avatar:
          return (
            <Avatar
              data={item}
              isActive={index === currentPosition}
              style={carouselItemStyle}
            />
          );
        case CarouselType.ImageTitleSubtitle:
          return <ImageTitleSubtitle data={item} style={carouselItemStyle} />;
        case CarouselType.SubtitleImage:
          return <SubtitleImage data={item} style={carouselItemStyle} />;
        case CarouselType.ImageSubtitle:
          return <ImageSubtitle data={item} style={carouselItemStyle} />;
        default:
          return <View />;
      }
    },
    [carouselItemStyle, currentPosition, preset],
  );

  const onScrollBegin = useCallback(() => {
    setCurrentPosition(-1);
  }, []);

  return (
    <GestureHandlerRootView style={[styles.container, style]}>
      <ReanimatedCarousel
        loop={false}
        width={WINDOW_WIDTH}
        data={[...data]}
        defaultIndex={defaultIndex}
        mode={mode}
        modeConfig={CAROUSEL_MODE_CONFIG}
        renderItem={renderCarouselItem}
        onSnapToItem={setIndex && _.flow(Math.floor, setIndex)}
        onProgressChange={onProgressChange}
        onScrollBegin={onScrollBegin}
        onScrollEnd={setCurrentPosition}
        style={[generalStyles.flex, carouselStyle]}
      />
      <View style={styles.progressBar}>{renderProgressBar()}</View>
    </GestureHandlerRootView>
  );
};
