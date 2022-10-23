import moment from 'moment';
import React, { useMemo } from 'react';
import { View } from 'react-native';

import { ONE_DAY_SECONDS, TWO_DAY_SECONDS } from '../../../../constants/time';
import { PLANTS_SVG } from '../../../../assets/images/dummySVG';
import { IPlantProps } from './Plant.types';
import { styles } from './Plant.styles';

export const Plant: React.FC<IPlantProps> = ({ plant }) => {
  const PlantImage = useMemo(() => {
    const nowSeconds = moment().format('X');
    const growthSeconds = +nowSeconds - +plant.plantedAt;

    if (growthSeconds < ONE_DAY_SECONDS) {
      return PLANTS_SVG[plant.image];
    }

    if (growthSeconds >= ONE_DAY_SECONDS && growthSeconds < TWO_DAY_SECONDS) {
      return PLANTS_SVG[plant.image];
    }

    return PLANTS_SVG[`${plant.image}Grown`];
  }, [plant.image, plant.plantedAt]);

  return (
    <View style={styles.plantContainer}>
      <PlantImage />
    </View>
  );
};
