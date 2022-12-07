import React, { useCallback } from 'react';

import { BACKGROUND_IMAGES } from '../../../assets';
import { ONE_MINUTE } from '../../../constants/time';
import { GroundingAcknowledgement } from '../components';
import { IEarthStressScreenProps } from './EarthStress.types';

export const EarthStressScreen: React.FC<IEarthStressScreenProps> = ({
  navigation,
}) => {
  const onSubmit = useCallback(() => {
    navigation.push('GroundingTimerInstruction', {
      data: {
        titleKey:
          'screens.parent_grounding_exercise.second_timer_instruction.title',
        subtitleKey:
          'screens.parent_grounding_exercise.second_timer_instruction.description',
        acknowledgementTitleKey:
          'screens.parent_grounding_exercise.second_timer_acknowledgement.title',
        acknowledgementSubtitleKey:
          'screens.parent_grounding_exercise.second_timer_acknowledgement.description',
        nextRouteName: 'GroundingCompleted',
        duration: ONE_MINUTE,
      },
    });
  }, [navigation]);

  return (
    <GroundingAcknowledgement
      title={'screens.parent_grounding_exercise.earth_stress.title'}
      subtitle={'screens.parent_grounding_exercise.earth_stress.description'}
      buttonTitle={'buttons.next'}
      isButtonArrow={true}
      backgroundImage={BACKGROUND_IMAGES.PARENT_GROUNDING_EARTH_STRESS}
      onSubmit={onSubmit}
    />
  );
};
