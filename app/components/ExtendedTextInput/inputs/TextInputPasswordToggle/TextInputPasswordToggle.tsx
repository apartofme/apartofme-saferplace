import React, { useCallback, useState } from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  TextInputProps,
  Image,
} from 'react-native';

import { IMAGES } from '../../../../assets';
import { styles } from './TextInputPasswordToggle.styles';

export const TextInputPasswordToggle: React.FC<TextInputProps> = ({
  style,
  ...rest
}) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const onEyeIconPress = useCallback(() => {
    setIsPasswordHidden(!isPasswordHidden);
  }, [isPasswordHidden]);

  return (
    <View style={[styles.container, style]}>
      <TextInput
        {...rest}
        secureTextEntry={isPasswordHidden}
        style={styles.input}
      />
      <TouchableOpacity onPress={onEyeIconPress} style={styles.iconContainer}>
        <Image
          source={isPasswordHidden ? IMAGES.OPENED_EYE : IMAGES.CROSSED_OUT_EYE}
        />
      </TouchableOpacity>
    </View>
  );
};
