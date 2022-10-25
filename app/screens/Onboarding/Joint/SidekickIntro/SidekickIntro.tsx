import React, { useCallback } from 'react';

import { BACKGROUND_IMAGES } from '../../../../assets';
import { DialogView } from '../../../../components';
import { INTRO_DIALOG } from './SidekickIntro.data';
import { ISidekickIntroScreenProps } from './SidekickIntro.types';

export const SidekickIntroScreen: React.FC<ISidekickIntroScreenProps> = ({
  navigation,
}) => {
  const onSubmit = useCallback(() => {
    navigation.navigate('SignUpNickname');
  }, [navigation]);

  return (
    <DialogView
      backgroundImage={BACKGROUND_IMAGES.GARDEN}
      dialog={INTRO_DIALOG}
      onSubmit={onSubmit}
    />
  );
};
