import React from 'react';

import { BACKGROUND_IMAGES } from '../../../assets';
import { AUDIO } from '../../../constants/audio';
import { useAppSelector, useMount } from '../../../hooks';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { GroundingAcknowledgementTitle } from '../components';
import { IGroundingCompletedScreenProps } from './GroundingCompleted.types';

export const GroundingCompletedScreen: React.FC<IGroundingCompletedScreenProps> =
  () => {
    const isBackgroundMusicEnabled = useAppSelector(
      state => state.settings.settings.audioSettings?.isBackgroundMusicEnabled,
    );

    useMount(() => {
      if (isBackgroundMusicEnabled) {
        AudioPlayerHelper.stop();
        AudioPlayerHelper.setInfiniteLoop(AUDIO.FOREST_AMBIENCE_LOOP);
      }
    });
    return (
      <GroundingAcknowledgementTitle
        title={'screens.parent_grounding_exercise.grounding_completed.title'}
        subtitle={
          'screens.parent_grounding_exercise.grounding_completed.description'
        }
        buttonTitle={'buttons.next'}
        backgroundImage={BACKGROUND_IMAGES.PARENT_GROUNDING_EARTH_STRESS}
        onNextRouteName={'JointOnboardingStack'}
      />
    );
  };
