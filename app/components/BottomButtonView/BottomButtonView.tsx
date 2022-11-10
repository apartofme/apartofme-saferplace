import React, { useCallback, useEffect, useState } from 'react';
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
  preset = 'default',
}) => {
  const [isDisabled, setIsDisabled] = useState(!!isDisabledButton);

  useEffect(() => {
    setIsDisabled(!!isDisabledButton);
  }, [isDisabledButton]);

  const onSubmitPress = useCallback(() => {
    onSubmit();
    setIsDisabled(true);

    setTimeout(() => {
      setIsDisabled(false);
    }, 100);
  }, [onSubmit]);

  return (
    <View style={styles.container}>
      <View style={[generalStyles.flex, style]}>{children}</View>
      <ExtendedButton
        title={buttonTitle}
        onPress={onSubmitPress}
        disabled={isDisabled}
        isArrow={isArrow}
        style={styles.button}
        preset={preset}
      />
    </View>
  );
};
