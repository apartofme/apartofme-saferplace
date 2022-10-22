import React, { useCallback } from 'react';

import { BACKGROUND_IMAGES } from '../../../assets';
import { VerticalSwipeView } from '../../../components';
import { IGroundingStartScreenProps } from './GroundingStart.types';

export const GroundingStartScreen: React.FC<IGroundingStartScreenProps> = ({
  navigation,
}) => {
  const onSubmit = useCallback(() => {
    navigation.push('GroundingInstruction');
  }, [navigation]);

  return (
    <VerticalSwipeView
      titleKey={'screens.parent_grounding_exercise.grounding_start.title'}
      subtitleKey={'screens.parent_grounding_exercise.grounding_start.subtitle'}
      aboutTitleKey={
        'screens.parent_grounding_exercise.grounding_start.about_title'
      }
      aboutSubtitleKey={
        'screens.parent_grounding_exercise.grounding_start.about_subtitle'
      }
      topBackground={BACKGROUND_IMAGES.PARENT_GROUNDING_WELCOME}
      bottomBackground={BACKGROUND_IMAGES.MENU}
      onSubmit={onSubmit}
    />
  );
};
