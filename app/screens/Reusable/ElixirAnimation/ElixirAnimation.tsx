import React from 'react';
import { SafeAreaView } from 'react-native';

import { IElixirAnimationScreenProps } from './ElixirAnimation.types';
import { styles } from './ElixirAnimation.styles';
import { ExtendedText } from '../../../components';
import { generalStyles } from '../../../utils/styles';

export const ElixirAnimationScreen: React.FC<IElixirAnimationScreenProps> = ({
  route,
}) => {
  const { title } = route.params.data;

  return (
    <SafeAreaView style={generalStyles.flex}>
      {/* // TODO: add the image with styles.image*/}
      <ExtendedText preset="title">{title}</ExtendedText>
    </SafeAreaView>
  );
};
