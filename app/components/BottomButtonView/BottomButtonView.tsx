import React from 'react';
import { View } from 'react-native';

import { generalStyles } from '../../utils/styles';
import { ExtendedButton } from '../ExtendedButton';
import { styles } from './BottomButtonView.styles';
import { IBottomButtonViewProps } from './BottomButtonView.props';

export const BottomButtonView: React.FC<IBottomButtonViewProps> = ({
  children,
  onSubmit,
  buttonTitle,
  isDisabledButton,
}) => {
  return (
    <View style={styles.container}>
      <View style={generalStyles.flex}>{children}</View>
      <ExtendedButton
        title={buttonTitle}
        onPress={onSubmit}
        disabled={isDisabledButton}
      />
    </View>
  );
};
