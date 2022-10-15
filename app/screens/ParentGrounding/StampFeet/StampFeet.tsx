import React, { useCallback } from 'react';

import { IMAGES } from '../../../assets';
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
      image={IMAGES.LOGO}
      backgroundImage={IMAGES.WHITE_PENCIL}
      onSubmit={onSubmit}
    />
  );
};
