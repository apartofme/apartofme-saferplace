import React, { useCallback } from 'react';
import { View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IMAGES } from '../../assets';
import { styles } from './HomeScreen.styles';
import { generalStyles } from '../../utils/styles';
import { IHomeScreenProps } from './HomeScreen.props';
import { ExtendedButton, ExtendedText } from '../../components';

export const HomeScreen: React.FC<IHomeScreenProps> = ({ navigation }) => {
  const goToParentsOnboardingStack = useCallback(() => {
    navigation.navigate('ParentsOnboardingStack');
  }, [navigation]);

  const goToMenuStack = useCallback(() => {
    navigation.navigate('MenuStack');
  }, [navigation]);

  const goToJointOnboardingStack = useCallback(() => {
    navigation.navigate('JointOnboardingStack');
  }, [navigation]);

  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <View style={styles.body}>
        <View style={styles.titleContainer}>
          <Image source={IMAGES.LOGO} style={styles.logo} />
          <ExtendedText preset="title">Beyond Codeline</ExtendedText>
        </View>
        <ExtendedText preset="default" style={styles.description}>
          The Best React Native Boilerplate
        </ExtendedText>

        <ExtendedButton
          onPress={goToParentsOnboardingStack}
          title="Go to parents onboarding"
          style={styles.testButton}
          titleStyle={styles.dispatchTestButtonText}
        />
        <ExtendedButton
          onPress={goToJointOnboardingStack}
          title="Go to joint onboarding"
          style={styles.testButton}
          titleStyle={styles.dispatchTestButtonText}
        />
        <ExtendedButton
          onPress={goToMenuStack}
          title="Go to menu"
          style={styles.testButton}
          titleStyle={styles.dispatchTestButtonText}
        />
      </View>
    </SafeAreaView>
  );
};
