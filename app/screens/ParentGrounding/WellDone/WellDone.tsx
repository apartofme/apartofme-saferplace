import React from 'react';

import { BACKGROUND_IMAGES } from '../../../assets';
import { SVG } from '../../../assets/svg';
import { GroundingAcknowledgementTitle } from '../components';
import { IWellDoneScreenProps } from './WellDone.types';

export const WellDoneScreen: React.FC<IWellDoneScreenProps> = () => {
  return (
    <GroundingAcknowledgementTitle
      title={'screens.parent_grounding_exercise.well_done.title'}
      subtitle={'screens.parent_grounding_exercise.well_done.description'}
      buttonTitle={'buttons.next'}
      Icon={SVG.CelebrationGuideIcon}
      backgroundImage={BACKGROUND_IMAGES.PARENT_GROUNDING_DEFAULT}
      onNextRouteName={'GroundingCompleted'}
    />
  );
};
