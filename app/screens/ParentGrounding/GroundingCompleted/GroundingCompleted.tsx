import React from 'react';

import { BACKGROUND_IMAGES } from '../../../assets';
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
        backgroundImage={BACKGROUND_IMAGES.PARENT_GROUNDING_EARTH_STRESS}
        onNextRouteName={'JointOnboardingStack'}
      />
    );
  };
