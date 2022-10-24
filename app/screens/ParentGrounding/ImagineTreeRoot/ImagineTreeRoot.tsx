import React, { useCallback } from 'react';

import { BACKGROUND_IMAGES } from '../../../assets';
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
      isButtonArrow={true}
      backgroundImage={BACKGROUND_IMAGES.PARENT_GROUNDING_IMAGINE_TREE_ROOT}
      onSubmit={onSubmit}
    />
  );
};
