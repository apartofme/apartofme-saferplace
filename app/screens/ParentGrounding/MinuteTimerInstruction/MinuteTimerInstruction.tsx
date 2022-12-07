import React, { useCallback } from 'react';

import { BACKGROUND_IMAGES } from '../../../assets';
import { GroundingAcknowledgement } from '../components';
import { IMinuteTimerInstructionScreenProps } from './MinuteTimerInstruction.types';

export const MinuteTimerInstructionScreen: React.FC<IMinuteTimerInstructionScreenProps> =
  ({ navigation }) => {
    const onSubmit = useCallback(() => {
      navigation.push('ImagineOak');
    }, [navigation]);

    return (
      <GroundingAcknowledgement
        isButtonArrow
        title={
          'screens.parent_grounding_exercise.minute_timer_instruction.title'
        }
        subtitle={
          'screens.parent_grounding_exercise.minute_timer_instruction.description'
        }
        buttonTitle={'buttons.next'}
        backgroundImage={BACKGROUND_IMAGES.PARENT_GROUNDING_CLOSE_EYES}
        onSubmit={onSubmit}
      />
    );
  };
