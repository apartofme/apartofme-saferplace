import React, { useCallback } from 'react';

import { BACKGROUND_IMAGES } from '../../../assets';
import { GroundingAcknowledgement } from '../components';
import { IBringingRootsScreenProps } from './BringingRoots.types';

export const BringingRootsScreen: React.FC<IBringingRootsScreenProps> = ({
  navigation,
}) => {
  const onSubmit = useCallback(() => {
    navigation.push('EarthStress');
  }, [navigation]);

  return (
    <GroundingAcknowledgement
      title={'screens.parent_grounding_exercise.bringing_roots.title'}
      buttonTitle={'buttons.next'}
      isButtonArrow={true}
      backgroundImage={BACKGROUND_IMAGES.PARENT_GROUDING_BRINGING_ROOTS}
      onSubmit={onSubmit}
      subtitle={'screens.parent_grounding_exercise.bringing_roots.description'}
    />
  );
};
