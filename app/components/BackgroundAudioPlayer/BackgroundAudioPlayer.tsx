import React, { useEffect } from 'react';

import { useAppState, usePrevious } from '../../hooks';
import { AudioPlayerHelper } from '../../services/helpers/AudioPlayerHelper';

export const BackgroundAudioPlayer: React.FC = () => {
  const appState = useAppState();
  const prevAppState = usePrevious(appState);
  useEffect(() => {
    if (appState === 'active' && prevAppState !== 'active') {
      AudioPlayerHelper.start();
    }
    if (appState !== 'active' && prevAppState === 'active') {
      AudioPlayerHelper.pause();
    }
  }, [appState, prevAppState]);
  return null;
};
