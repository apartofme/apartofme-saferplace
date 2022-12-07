import React, { useCallback } from 'react';

import { IGroundingTimerInstructionScreenProps } from './GroundingTimerInstruction.types';
import { BACKGROUND_IMAGES } from '../../../../assets';
import { GroundingAcknowledgement } from '../../components';

export const GroundingTimerInstructionScreen: React.FC<IGroundingTimerInstructionScreenProps> =
  ({ navigation, route }) => {
    const {
      titleKey,
      subtitleKey,
      acknowledgementTitleKey,
      acknowledgementSubtitleKey,
      nextRouteName,
      duration,
    } = route.params.data;

    const onSubmit = useCallback(() => {
      navigation.push('GroundingTimer', {
        data: {
          acknowledgementTitleKey,
          acknowledgementSubtitleKey,
          nextRouteName,
          duration,
        },
      });
    }, [
      acknowledgementSubtitleKey,
      acknowledgementTitleKey,
      duration,
      navigation,
      nextRouteName,
    ]);

    return (
      <GroundingAcknowledgement
        title={titleKey}
        subtitle={subtitleKey}
        buttonTitle={'buttons.start_timer'}
        backgroundImage={BACKGROUND_IMAGES.PARENT_GROUNDING_CLOSE_EYES}
        onSubmit={onSubmit}
      />
    );
  };
