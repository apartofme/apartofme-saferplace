import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';

import {
  ONE_DAY_SECONDS,
  TEN_MINUTES_SECONDS,
  TEN_SECONDS,
  TWO_DAY_SECONDS,
} from '../../../../constants/time';
import { PLANTS_SVG } from '../../../../assets/svg';
import { IPlantProps } from './Plant.types';
import { styles } from './Plant.styles';

export const Plant: React.FC<IPlantProps> = ({ plant }) => {
  const nowSeconds = +moment().format('X');

  const [timeValue, setTimeValue] = useState(nowSeconds);

  useEffect(() => {
    if (nowSeconds - +plant.plantedAt < TWO_DAY_SECONDS + TEN_SECONDS) {
      const time = setInterval(
        () => setTimeValue(timeValue + TEN_MINUTES_SECONDS),
        TEN_MINUTES_SECONDS * 1000,
      );
      return () => {
        clearInterval(time);
      };
    }
  }, [nowSeconds, plant.plantedAt, timeValue]);

  const PlantImage = useMemo(() => {
    const growthSeconds = timeValue - +plant.plantedAt;

    if (growthSeconds < ONE_DAY_SECONDS) {
      return PLANTS_SVG[plant.image];
    }

    if (growthSeconds >= ONE_DAY_SECONDS && growthSeconds < TWO_DAY_SECONDS) {
      return PLANTS_SVG[plant.image];
    }

    return PLANTS_SVG[`${plant.image}Grown`];
  }, [timeValue, plant]);

  return (
    <View style={styles.plantContainer}>
      <PlantImage width={120} height={120} />
    </View>
  );
};
