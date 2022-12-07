import React, { useCallback } from 'react';

import { BACKGROUND_IMAGES } from '../../../assets';
import { GroundingAcknowledgement } from '../components';
import { ICloseEyesScreenProps } from './CloseEyes.types';

export const CloseEyesScreen: React.FC<ICloseEyesScreenProps> = ({
  navigation,
}) => {
  const onSubmit = useCallback(() => {
    navigation.push('StampFeet');
  }, [navigation]);

  return (
    <GroundingAcknowledgement
      isButtonArrow
      title={'screens.parent_grounding_exercise.close_eyes.title'}
      subtitle={'screens.parent_grounding_exercise.close_eyes.description'}
      buttonTitle={'buttons.next'}
      backgroundImage={BACKGROUND_IMAGES.PARENT_GROUNDING_CLOSE_EYES}
      onSubmit={onSubmit}
    />
  );
};
