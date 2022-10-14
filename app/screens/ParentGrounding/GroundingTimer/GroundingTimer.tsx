import React, { useCallback, useEffect, useState } from 'react';
import { Image, SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import { ExtendedButton, ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { styles } from './GroundingTimer.styles';

import { IGroundingTimerScreenProps } from './GroundingTimer.types';

export const GroundingTimerScreen: React.FC<IGroundingTimerScreenProps> = ({
  navigation,
}) => {
  const [timerValue, setTimerValue] = useState(10);

  const [isTimerPause, setIsTimerPause] = useState(false);

  useEffect(() => {
    if (timerValue > 0 && !isTimerPause) {
      const timer = setInterval(() => setTimerValue(timerValue - 1), 1000);
      return () => {
        clearInterval(timer);
      };
    } else if (!isTimerPause) {
      navigation.navigate('GroundingInput');
    }
  }, [isTimerPause, navigation, timerValue]);

  const timerStatus = useCallback(() => {
    setIsTimerPause(!isTimerPause);
  }, [isTimerPause]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <View style={styles.container}>
        <Image source={IMAGES.LOGO} style={styles.image} />
        <ExtendedText preset="large-title">{timerValue}</ExtendedText>
        <ExtendedButton
          title="pause"
          onPress={timerStatus}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};
