import React from 'react';
import { KeyboardAvoidingView, KeyboardAvoidingViewProps } from 'react-native';

import { generalStyles } from '../../utils/styles';

export const ExtendedKeyboardAvoidingView: React.FC<KeyboardAvoidingViewProps> =
  ({ children, ...rest }) => {
    return (
      <KeyboardAvoidingView style={generalStyles.flex} {...rest}>
        {children}
      </KeyboardAvoidingView>
    );
  };
