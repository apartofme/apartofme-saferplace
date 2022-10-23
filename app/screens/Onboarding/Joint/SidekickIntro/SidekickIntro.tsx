import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native';

import { IMAGES } from '../../../../assets';
import { DialogView } from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { INTRO_DIALOG } from './SidekickIntro.data';
import { ISidekickIntroScreenProps } from './SidekickIntro.types';

export const SidekickIntroScreen: React.FC<ISidekickIntroScreenProps> = ({
  navigation,
}) => {
  const onSubmit = useCallback(() => {
    navigation.navigate('SignUpNickname');
  }, [navigation]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <DialogView
        backgroundImage={IMAGES.LOGO}
        dialog={INTRO_DIALOG}
        onSubmit={onSubmit}
      />
    </SafeAreaView>
  );
};
