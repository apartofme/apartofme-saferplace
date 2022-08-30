import React from 'react';
import { View } from 'react-native';

import { generalStyles } from '../../utils/styles';
import { ExtendedButton } from '../ExtendedButton';
import { IBottomButtonViewProps } from './BottomButtonView.props';
import { styles } from './BottomButtonView.styles';

export const BottomButtonView: React.FC<IBottomButtonViewProps> = ({
  children,
  onSubmit,
  buttonTitle,
}) => {
  return (
    <View style={styles.container}>
      <View style={generalStyles.flex}>{children}</View>
      <ExtendedButton title={buttonTitle} onPress={onSubmit} />
    </View>
  );
};
