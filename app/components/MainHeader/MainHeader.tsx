import React from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ExtendedText } from '../ExtendedText';
import { IMainHeaderProps } from './MainHeader.props';
import { styles } from './MainHeader.styles';

export const MainHeader: React.FC<IMainHeaderProps> = ({
  title,
  rightIcon,
  leftIcon,
}) => {
  return (
    <SafeAreaView edges={['top']}>
      <View style={styles.container}>
        {leftIcon ? (
          <Image source={leftIcon} />
        ) : (
          <View style={styles.emptyContainer} />
        )}
        {title && <ExtendedText>{title}</ExtendedText>}
        {rightIcon ? (
          <Image source={rightIcon} />
        ) : (
          <View style={styles.emptyContainer} />
        )}
      </View>
    </SafeAreaView>
  );
};
