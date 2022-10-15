import React from 'react';

import { IMAGES } from '../../../assets';
import { GroundingAcknowledgementTitle } from '../components';
import { IGroundingCompletedScreenProps } from './GroundingCompleted.types';

export const GroundingCompletedScreen: React.FC<IGroundingCompletedScreenProps> =
  () => {
    return (
      <GroundingAcknowledgementTitle
        title={'screens.parent_grounding_exercise.grounding_completed.title'}
        subtitle={
          'screens.parent_grounding_exercise.grounding_completed.description'
        }
        buttonTitle={'buttons.next'}
        image={IMAGES.LOGO}
        backgroundImage={IMAGES.WHITE_PENCIL}
        onNextRouteName={'JointOnboardingStack'}
      />
    );
  };
