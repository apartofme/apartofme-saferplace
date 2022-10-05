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
    navigation.navigate('DummyQuests');
  }, [navigation]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <View style={generalStyles.centered}>
        <ExtendedText preset="heading">Coming soon...</ExtendedText>
        <ExtendedButton
          title="Go to dummy quests screen"
          onPress={onSubmitPress}
        />
      </View>
    </SafeAreaView>
  );
};
