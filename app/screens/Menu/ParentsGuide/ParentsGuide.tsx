import React from 'react';
import { SafeAreaView } from 'react-native';

import { IMAGES } from '../../../assets';
import { MainHeader } from '../../../components';
import { IParentsGuideScreenProps } from './ParentsGuide.props';

export const ParentsGuideScreen: React.FC<IParentsGuideScreenProps> = ({
  navigation,
}) => {
  return (
    <SafeAreaView>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
    </SafeAreaView>
  );
};
