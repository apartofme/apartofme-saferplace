import React from 'react';

import { IMAGES } from '../../../assets';
import { useAppSelector } from '../../../hooks';
import { GroundingAcknowledgementTitle } from '../components';
import { IWellDoneScreenProps } from './WellDone.types';

export const WellDoneScreen: React.FC<IWellDoneScreenProps> = () => {
  const parentNickname = useAppSelector(
    state => state.user.parent?.nickname,
  ) as string;

  return (
    <GroundingAcknowledgementTitle
      title={`screens.parent_grounding_exercise.well_done.title ${parentNickname}`}
      subtitle={'screens.parent_grounding_exercise.well_done.description'}
      buttonTitle={'buttons.next'}
      image={IMAGES.LOGO}
      backgroundImage={IMAGES.WHITE_PENCIL}
      onNextRouteName={'GroundingCompleted'}
    />
  );
};
