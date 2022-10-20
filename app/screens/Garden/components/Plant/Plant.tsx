import moment from 'moment';
import React, { useMemo } from 'react';
import { View } from 'react-native';

import { ONE_DAY_SECONDS, TWO_DAY_SECONDS } from '../../../../constants/time';
import { IPlantProps } from './Plant.types';
import { styles } from './Plant.styles';
import { PLANTS_SVG } from '../../../../assets/images/dummySVG';
import { isIOS } from '../../../../utils';

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
      <PlantImage width={isIOS ? 90 : 140} height={isIOS ? 90 : 140} />
    </View>
  );
};
