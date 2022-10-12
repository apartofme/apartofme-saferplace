import React from 'react';
import { Image, TouchableOpacity, View, SafeAreaView } from 'react-native';

import { ExtendedText } from '../ExtendedText';
import { IMainHeaderProps } from './MainHeader.types';
import { styles } from './MainHeader.styles';

export const MainHeader: React.FC<IMainHeaderProps> = ({
  title,
  rightIcon,
  leftIcon,
  onLeftIconPress,
  onRightIconPress,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      {leftIcon ? (
        <TouchableOpacity onPress={onLeftIconPress}>
          <Image source={leftIcon} />
        </TouchableOpacity>
      ) : (
        <View style={styles.emptyContainer} />
      )}
      {title && <ExtendedText>{title}</ExtendedText>}
      {rightIcon ? (
        <TouchableOpacity onPress={onRightIconPress}>
          <Image source={rightIcon} />
        </TouchableOpacity>
      ) : (
        <View style={styles.emptyContainer} />
      )}
    </SafeAreaView>
  );
};
