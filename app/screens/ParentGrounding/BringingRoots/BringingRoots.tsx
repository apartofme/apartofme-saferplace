import React, { useCallback } from 'react';

import { IMAGES } from '../../../assets';
import { GroundingAcknowledgement } from '../components';
import { IBringingRootsScreenProps } from './BringingRoots.types';

export const BringingRootsScreen: React.FC<IBringingRootsScreenProps> = ({
  navigation,
}) => {
  const onSubmit = useCallback(() => {
    navigation.push('WellDone');
  }, [navigation]);

  return (
    <GroundingAcknowledgement
      title={'screens.parent_grounding_exercise.bringing_roots.title'}
      buttonTitle={'buttons.next'}
      image={IMAGES.LOGO}
      backgroundImage={IMAGES.WHITE_PENCIL}
      onSubmit={onSubmit}
    />
  );
};
