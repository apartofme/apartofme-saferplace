import _ from 'lodash';
import { useSharedValue } from 'react-native-reanimated';
import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import ReanimatedCarousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { WINDOW_WIDTH } from '../../constants/window';
import { generalStyles } from '../../utils/styles';
import {
  IAvatarItem,
  ICarouselItem,
  ICarouselProps,
  IIconDescription,
} from './Carousel.types';
import { styles } from './Carousel.styles';
import {
  Avatar,
  ProgressBarItem,
  IconTitleDescription,
  IconDescription,
  Card,
} from './components';
import {
  CarouselType,
  CAROUSEL_MODE_CONFIG_AVATAR,
  CAROUSEL_MODE_CONFIG_DEFAULT,
} from './Carousel.data';

export const Carousel: React.FC<ICarouselProps> = ({
  preset,
  data,
  defaultIndex = 0,
  carouselRef,
  setIndex,
  style,
  carouselStyle,
  carouselItemStyle,
  isProgressBar = true,
  scrollAnimationDuration,
}) => {
  const progressValue = useSharedValue<number>(0);

  const mode = useMemo(() => {
    switch (preset) {
      case CarouselType.Avatar:
      case CarouselType.Card:
        return 'parallax';
    }
  }, [preset]);

  const modeConfig = useMemo(() => {
    switch (preset) {
      case CarouselType.Avatar:
        return CAROUSEL_MODE_CONFIG_AVATAR;
      default:
        return CAROUSEL_MODE_CONFIG_DEFAULT;
    }
  }, [preset]);

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
    ({ item, index }: { item: ICarouselItem; index: number }) => {
      switch (preset) {
        case CarouselType.Avatar:
          return (
            <Avatar
              key={item.id}
              data={item as IAvatarItem}
              index={index}
              animValue={progressValue}
              style={carouselItemStyle}
            />
          );
        case CarouselType.Card:
          return (
            <Card
              key={item.id}
              data={item}
              index={index}
              animValue={progressValue}
              style={carouselItemStyle}
            />
          );
        case CarouselType.IconTitleDescription:
          return (
            <IconTitleDescription
              key={item.id}
              data={item}
              index={index}
              animValue={progressValue}
              style={carouselItemStyle}
            />
          );
        case CarouselType.IconDescription:
          return (
            <IconDescription
              key={item.id}
              data={item as IIconDescription}
              index={index}
              animValue={progressValue}
              style={carouselItemStyle}
            />
          );
        default:
          return <View />;
      }
    },
    [carouselItemStyle, preset, progressValue],
  );

  return (
    <GestureHandlerRootView style={[styles.container, style]}>
      <ReanimatedCarousel
        ref={carouselRef}
        loop={false}
        width={WINDOW_WIDTH}
        data={[...data]}
        defaultIndex={defaultIndex}
        mode={mode}
        modeConfig={modeConfig}
        renderItem={renderCarouselItem}
        onSnapToItem={setIndex && _.flow(Math.floor, setIndex)}
        onProgressChange={onProgressChange}
        style={[generalStyles.flex, carouselStyle]}
        scrollAnimationDuration={scrollAnimationDuration}
      />
      {isProgressBar && (
        <View style={styles.progressBar}>{renderProgressBar()}</View>
      )}
    </GestureHandlerRootView>
  );
};
