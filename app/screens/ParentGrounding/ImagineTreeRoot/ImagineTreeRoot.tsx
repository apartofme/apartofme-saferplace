import React, { useCallback } from 'react';

import { IMAGES } from '../../../assets';
import { GroundingAcknowledgement } from '../components';
import { IImagineTreeRootScreenProps } from './ImagineTreeRoot.types';

export const ImagineTreeRootScreen: React.FC<IImagineTreeRootScreenProps> = ({
  navigation,
}) => {
  const onSubmit = useCallback(() => {
    navigation.push('EarthStress');
  }, [navigation]);

  return (
    <GroundingAcknowledgement
      title={'screens.parent_grounding_exercise.imagine_tree_root.title'}
      buttonTitle={'buttons.next'}
      image={IMAGES.LOGO}
      backgroundImage={IMAGES.WHITE_PENCIL}
      onSubmit={onSubmit}
    />
  );
};
