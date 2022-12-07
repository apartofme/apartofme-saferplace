import React, { useCallback } from 'react';

import { BACKGROUND_IMAGES } from '../../../assets';
import { GroundingAcknowledgement } from '../components';
import { IImagineOakScreenProps } from './ImagineOak.types';

export const ImagineOakScreen: React.FC<IImagineOakScreenProps> = ({
  navigation,
}) => {
  const onSubmit = useCallback(() => {
    navigation.push('ImagineTreeRoot');
  }, [navigation]);

  return (
    <GroundingAcknowledgement
      title={'screens.parent_grounding_exercise.imagine_oak.title'}
      subtitle={'screens.parent_grounding_exercise.imagine_oak.description'}
      buttonTitle={'buttons.next'}
      isButtonArrow={true}
      backgroundImage={BACKGROUND_IMAGES.PARENT_GROUNDING_IMAGINE_OAK}
      onSubmit={onSubmit}
    />
  );
};
