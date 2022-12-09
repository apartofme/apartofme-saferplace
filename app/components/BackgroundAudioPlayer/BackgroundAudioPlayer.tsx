import React, { useEffect } from 'react';

import { useAppSelector, useAppState, usePrevious } from '../../hooks';
import { AudioPlayerHelper } from '../../services/helpers/AudioPlayerHelper';

export const BackgroundAudioPlayer: React.FC = () => {
  const appState = useAppState();
  const prevAppState = usePrevious(appState);
  const isBackgroundMusicEnabled = useAppSelector(
    state => state.settings.settings.audioSettings?.isBackgroundMusicEnabled,
  );
  useEffect(() => {
    if (appState === 'active' && prevAppState !== 'active') {
      if (isBackgroundMusicEnabled) {
        AudioPlayerHelper.start();
      }
    }
    if (appState !== 'active' && prevAppState === 'active') {
      AudioPlayerHelper.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appState, prevAppState]);
  return null;
};
