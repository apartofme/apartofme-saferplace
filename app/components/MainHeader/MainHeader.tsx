import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ExtendedText } from '../ExtendedText';
import { IMainHeaderProps } from './MainHeader.props';
import { styles } from './MainHeader.styles';

export const MainHeader: React.FC<IMainHeaderProps> = ({
  title,
  rightElement,
  leftElement,
}) => {
  return (
    <SafeAreaView edges={['top']}>
      <View style={styles.container}>
        {leftElement ?? <View style={styles.emptyContainer} />}
        {title && <ExtendedText>{title}</ExtendedText>}
        {rightElement ?? <View style={styles.emptyContainer} />}
      </View>
    </SafeAreaView>
  );
};
