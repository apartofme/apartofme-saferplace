import React, { useEffect } from 'react';

import { useAppSelector, useAppState, usePrevious } from '../../hooks';
import { AudioPlayerHelper } from '../../services/helpers/AudioPlayerHelper';

export const BackgroundAudioPlayer: React.FC = () => {
  const appState = useAppState();
  const prevAppState = usePrevious(appState);
  const isBackgroundMusicEnabled = useAppSelector(
    state => state.settings.settings.audioSettings?.isBackgroundMusicEnabled,
  );
  const backgroundAudio = useAppSelector(
    state => state.cache.backgroundAudio ?? null,
  );

  useEffect(() => {
    if (backgroundAudio) {
      if (isBackgroundMusicEnabled) {
        AudioPlayerHelper.stopInfiniteLoop();
        AudioPlayerHelper.setInfiniteLoop(backgroundAudio);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backgroundAudio]);

  useEffect(() => {
    if (appState === 'active' && prevAppState !== 'active') {
      if (isBackgroundMusicEnabled) {
        AudioPlayerHelper.startInfiniteLoop();
      }
    }
    if (appState !== 'active' && prevAppState === 'active') {
      AudioPlayerHelper.pauseInfiniteLoop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appState, prevAppState]);
  return null;
};
