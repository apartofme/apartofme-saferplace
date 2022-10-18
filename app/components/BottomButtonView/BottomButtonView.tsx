import React from 'react';
import { View } from 'react-native';

import { generalStyles } from '../../utils/styles';
import { ExtendedButton } from '../ExtendedButton';
import { styles } from './BottomButtonView.styles';
import { IBottomButtonViewProps } from './BottomButtonView.types';

export const BottomButtonView: React.FC<IBottomButtonViewProps> = ({
  children,
  onSubmit,
  buttonTitle,
  isDisabledButton,
  isArrow,
  style,
}) => {
  return (
    <View style={styles.container}>
      <View style={[generalStyles.flex, style]}>{children}</View>
      <ExtendedButton
        title={buttonTitle}
        onPress={onSubmit}
        disabled={isDisabledButton}
        isArrow={isArrow}
        style={styles.button}
      />
    </View>
  );
};
