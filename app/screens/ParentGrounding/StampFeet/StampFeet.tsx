import React, { useCallback } from 'react';

import { BACKGROUND_IMAGES } from '../../../assets';
import { GroundingAcknowledgement } from '../components';
import { IStampFeetScreenProps } from './StampFeet.types';

export const StampFeetScreen: React.FC<IStampFeetScreenProps> = ({
  navigation,
}) => {
  const onSubmit = useCallback(() => {
    navigation.push('GroundingTimer', { nextRouteName: 'ImagineOak' });
  }, [navigation]);

  return (
    <GroundingAcknowledgement
      title={'screens.parent_grounding_exercise.stamp_feet.title'}
      buttonTitle={'buttons.start_timer'}
      backgroundImage={BACKGROUND_IMAGES.PARENT_GROUNDING_STAMP_FEET}
      onSubmit={onSubmit}
    />
  );
};
