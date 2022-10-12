import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native';

import { IMAGES } from '../../../../assets';
import { DialogView } from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { INTRO_DIALOG } from './SidekickIntro.data';
import { ISidekickIntroScreenProps } from './SidekickIntro.types';

export const SidekickIntroScreen: React.FC<ISidekickIntroScreenProps> = ({
  navigation,
  route,
}) => {
  const isStart = route.params?.isStart;

  const goToSignUpNickname = useCallback(() => {
    navigation.navigate('SignUpNickname');
  }, [navigation]);

  // TODO: change to real stack
  const onSabmit = useCallback(() => {
    navigation.navigate('GardenStack', {
      screen: 'GardenTutorialDialog',
      params: { isStart: true },
    });
  }, [navigation]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <DialogView
        backgroundImage={IMAGES.LOGO}
        dialog={INTRO_DIALOG}
        // TODO: change _.noop to the real function
        onSubmit={onSabmit}
        navigateBetween={
          isStart
            ? {
                index: 6,
                onPress: goToSignUpNickname,
              }
            : null
        }
        initialIdx={isStart ? 0 : 7}
      />
    </SafeAreaView>
  );
};
