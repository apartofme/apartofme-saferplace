import React, { useCallback, useEffect, useRef, useState } from 'react';
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
  const timeout = useRef<NodeJS.Timeout>();

  useEffect(
    () => () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    },
    [],
  );

  useEffect(() => {
    setIsDisabled(!!isDisabledButton);
  }, [isDisabledButton]);
  const onSubmitPress = useCallback(() => {
    onSubmit();
    setIsDisabled(true);

    timeout.current = setTimeout(() => {
      setIsDisabled(false);
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    }, 1);
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
