import React, { useCallback } from 'react';

import { BACKGROUND_IMAGES } from '../../../assets';
import { GroundingAcknowledgement } from '../components';
import { IEarthStressScreenProps } from './EarthStress.types';

export const EarthStressScreen: React.FC<IEarthStressScreenProps> = ({
  navigation,
}) => {
  const onSubmit = useCallback(() => {
    navigation.push('BringingRoots');
  }, [navigation]);

  return (
    <GroundingAcknowledgement
      title={'screens.parent_grounding_exercise.earth_stress.title'}
      buttonTitle={'buttons.next'}
      isButtonArrow={true}
      backgroundImage={BACKGROUND_IMAGES.PARENT_GROUNDING_EARTH_STRESS}
      onSubmit={onSubmit}
    />
  );
};
