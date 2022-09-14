import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    <SafeAreaView edges={['top']} style={styles.container}>
      {leftIcon ? (
        <TouchableOpacity onPress={onLeftIconPress}>
          <Image source={leftIcon} />
        </TouchableOpacity>
      ) : (
        <View style={styles.emptyContainer} />
      )}
      {title && <ExtendedText>{title}</ExtendedText>}
      {rightIcon ? (
        <Image source={rightIcon} />
      ) : (
        <TouchableOpacity onPress={onRightIconPress}>
          <View style={styles.emptyContainer} />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};
