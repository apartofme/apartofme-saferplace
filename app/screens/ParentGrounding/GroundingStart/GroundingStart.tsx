import React, { useCallback } from 'react';

import { BACKGROUND_IMAGES } from '../../../assets';
import { VerticalSwipeView } from '../../../components';
import { AUDIO } from '../../../constants/audio';
import { useAppDispatch, useMount } from '../../../hooks';
import { cacheSlice } from '../../../redux/slices';
import { IGroundingStartScreenProps } from './GroundingStart.types';

export const GroundingStartScreen: React.FC<IGroundingStartScreenProps> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch();

  const onSubmit = useCallback(() => {
    navigation.push('GroundingInstruction');
  }, [navigation]);

  useMount(() => {
    dispatch(cacheSlice.actions.setBackgroundAudio(AUDIO.GROUNDING_BACKGROUND));
  });

  return (
    <VerticalSwipeView
      titleKey={'screens.parent_grounding_exercise.grounding_start.title'}
      subtitleKey={
        'screens.parent_grounding_exercise.grounding_start.description'
      }
      aboutTitleKey={
        'screens.parent_grounding_exercise.grounding_start.about_title'
      }
      aboutSubtitleKey={
        'screens.parent_grounding_exercise.grounding_start.about_description'
      }
      topBackground={BACKGROUND_IMAGES.PARENT_GROUNDING_WELCOME}
      bottomBackground={BACKGROUND_IMAGES.PARENT_GROUNDING_WELCOME_BOTTOM}
      isHeader={false}
      onSubmit={onSubmit}
    />
  );
};
