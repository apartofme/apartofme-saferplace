import moment from 'moment';
import React, { useCallback, useState } from 'react';
import { Image, ImageSourcePropType } from 'react-native';

import { ONE_DAY_SECONDS } from '../../../../constants/time';
import { IMAGES, PLANTS_IMAGES } from '../../../../assets';
import { useMount } from '../../../../hooks';
import { IPlantProps } from './Plant.types';
import { Nullable } from '../../../../utils';
import { styles } from './Plant.styles';

export const Plant: React.FC<IPlantProps> = ({ plant, additionalStyle }) => {
  const [plantImage, setPlantImage] =
    useState<Nullable<ImageSourcePropType>>(null);

  const setCorrectPlantImage = useCallback(
    (growthSeconds: number) => {
      if (growthSeconds < ONE_DAY_SECONDS) {
        setPlantImage(PLANTS_IMAGES[`${plant.image}_START`]);
      }
      // TODO: uncomment when added images
      //   else if (
      //     growthSeconds >= ONE_DAY_GROWTH &&
      //     growthSeconds < TWO_DAY_GROWTH
      //   ) {
      //     setPlantImage(PLANTS_IMAGES[`${plant.image}_MIDDLE`]);
      //   } else if (growthSeconds >= TWO_DAY_GROWTH) {
      //     setPlantImage(PLANTS_IMAGES[`${plant.image}_FINISH`]);
      //   }
    },
    [plant.image],
  );

  useMount(() => {
    const nowSeconds = moment().format('X');
    const growthSeconds = +nowSeconds - +plant.plantedAt;
    setCorrectPlantImage(growthSeconds);
  });

  return (
    <Image
      source={plantImage ? plantImage : IMAGES.LOGO}
      style={[styles.plant, additionalStyle]}
    />
  );
};
