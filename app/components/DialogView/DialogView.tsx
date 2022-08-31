import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';

import { generalStyles } from '../../utils/styles';
import { ExtendedText } from '../ExtendedText';
import { IDialogViewProps } from './DialogView.props';
import { styles } from './DialogView.styles';

export const DialogView: React.FC<IDialogViewProps> = ({
  backgroundImage,
  text,
  onButtonPress,
}) => {
  return (
    <ImageBackground source={backgroundImage} style={generalStyles.flex}>
      <View>
        <ExtendedText>{text}</ExtendedText>
      </View>
      <TouchableOpacity onPress={onButtonPress} style={styles.roundButton} />
    </ImageBackground>
  );
};
