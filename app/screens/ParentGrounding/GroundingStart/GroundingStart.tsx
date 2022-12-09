import React, { useCallback } from 'react';

import { BACKGROUND_IMAGES } from '../../../assets';
import { VerticalSwipeView } from '../../../components';
import { AUDIO } from '../../../constants/audio';
import { useAppSelector, useMount } from '../../../hooks';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { IGroundingStartScreenProps } from './GroundingStart.types';

export const GroundingStartScreen: React.FC<IGroundingStartScreenProps> = ({
  navigation,
}) => {
  const isBackgroundMusicEnabled = useAppSelector(
    state => state.settings.settings.audioSettings?.isBackgroundMusicEnabled,
  );

  const onSubmit = useCallback(() => {
    navigation.push('GroundingInstruction');
  }, [navigation]);

  useMount(() => {
    if (isBackgroundMusicEnabled) {
      AudioPlayerHelper.stop();
      AudioPlayerHelper.setInfiniteLoop(AUDIO.GROUNDING_BACKGROUND);
    }
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
