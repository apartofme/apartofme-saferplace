import React, { useCallback } from 'react';

import { IMAGES } from '../../../assets';
import { GroundingAcknowledgement } from '../components';
import { IImagineOakScreenProps } from './ImagineOak.types';

export const ImagineOakScreen: React.FC<IImagineOakScreenProps> = ({
  navigation,
}) => {
  const onSubmit = useCallback(() => {
    navigation.push('EarthConnection');
  }, [navigation]);

  return (
    <GroundingAcknowledgement
      title={'screens.parent_grounding_exercise.imagine_oak.title'}
      buttonTitle={'buttons.next'}
      image={IMAGES.LOGO}
      backgroundImage={IMAGES.WHITE_PENCIL}
      onSubmit={onSubmit}
    />
  );
};
