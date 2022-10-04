import React, { useCallback } from 'react';
import { SafeAreaView, View } from 'react-native';

import { ExtendedButton, ExtendedText, MainHeader } from '../../components';
import { IComingSoonScreenProps } from './ComingSoon.types';
import { IMAGES } from '../../assets';
import { generalStyles } from '../../utils/styles';

export const ComingSoonScreen: React.FC<IComingSoonScreenProps> = ({
  navigation,
}) => {
  const onSubmitPress = useCallback(() => {
    navigation.navigate('Initial');
  }, [navigation]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <View style={generalStyles.centered}>
        <ExtendedText preset="heading">Coming soon...</ExtendedText>
        <ExtendedButton title="Go to initial" onPress={onSubmitPress} />
      </View>
    </SafeAreaView>
  );
};
