import React, { useCallback } from 'react';

import { DialogView } from '../../../../components';
import { INTRO_DIALOG } from './SidekickIntro.data';
import { ISidekickIntroScreenProps } from './SidekickIntro.types';

export const SidekickIntroScreen: React.FC<ISidekickIntroScreenProps> = ({
  navigation,
}) => {
  const onSubmit = useCallback(() => {
    navigation.navigate('SignUpNickname');
  }, [navigation]);

  return <DialogView dialog={INTRO_DIALOG} onSubmit={onSubmit} />;
};
