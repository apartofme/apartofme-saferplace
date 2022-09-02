import _ from 'lodash';
import React from 'react';
import { SafeAreaView } from 'react-native';

import { IMAGES } from '../../../../assets';
import { DialogView } from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { INTRO_DIALOG } from './SidekickIntro.data';
import { ISidekickIntroScreenProps } from './SidekickIntro.props';

export const SidekickIntroScreen: React.FC<ISidekickIntroScreenProps> = () => {
  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <DialogView
        backgroundImage={IMAGES.LOGO}
        dialog={INTRO_DIALOG}
        onSubmit={_.noop}
      />
    </SafeAreaView>
  );
};
