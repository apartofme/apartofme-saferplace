import React, { useCallback, useState } from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';

import { SVG } from '../../../../assets/svg';
import { styles } from './TextInputPasswordToggle.styles';

const OpenedEyeIcon = SVG.OpenedEyeIcon;
const CrossedOutEyeIcon = SVG.CrossedOutEyeIcon;

export const TextInputPasswordToggle: React.FC<TextInputProps> = ({
  style,
  ...rest
}) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const onEyeIconPress = useCallback(() => {
    setIsPasswordHidden(!isPasswordHidden);
  }, [isPasswordHidden]);

  const Icon = isPasswordHidden ? OpenedEyeIcon : CrossedOutEyeIcon;

  return (
    <View style={[style, styles.container]}>
      <TextInput
        {...rest}
        secureTextEntry={isPasswordHidden}
        style={styles.input}
      />
      <TouchableOpacity onPress={onEyeIconPress} style={styles.iconContainer}>
        <Icon height={17} />
      </TouchableOpacity>
    </View>
  );
};
