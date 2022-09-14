import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';

import { ExtendedText } from '../../components';
import { IInitialScreenProps } from './InitialScreen.types';
import { styles } from './InitialScreen.styles';

export const InitialScreen: React.FC<IInitialScreenProps> = ({
  navigation,
}) => {
  useEffect(() => {
    // TODO: Timeout for loading simulation. Replace it with data fetching
    setTimeout(() => navigation.replace('ParentsOnboardingStack'), 500);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.root}>
      <ExtendedText preset="title">Loading simulation...</ExtendedText>
    </SafeAreaView>
  );
};
