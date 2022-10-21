import React, { useCallback, useEffect, useState } from 'react';
import { Image, SafeAreaView, View } from 'react-native';

import {
  ExtendedButton,
  ExtendedText,
  MainHeader,
} from '../../../../components';
import { IGroundingTimerProps } from './GroundingTimer.types';
import { styles } from './GroundingTimer.styles';
import { useNavigation } from '@react-navigation/native';
import { generalStyles } from '../../../../utils/styles';
import { IMAGES } from '../../../../assets';
import { SVG_ICONS } from '../../../../assets/svg';

export const GroundingTimer: React.FC<IGroundingTimerProps> = ({
  onNextRouteName,
}) => {
  const navigation = useNavigation();

  const [timerValue, setTimerValue] = useState(10);

  const [isTimerPause, setIsTimerPause] = useState(false);

  useEffect(() => {
    if (timerValue > 0 && !isTimerPause) {
      const timer = setInterval(() => setTimerValue(timerValue - 1), 1000);
      return () => {
        clearInterval(timer);
      };
    } else if (!isTimerPause) {
      navigation.navigate(onNextRouteName);
    }
  }, [isTimerPause, navigation, onNextRouteName, timerValue]);

  const timerStatus = useCallback(() => {
    setIsTimerPause(!isTimerPause);
  }, [isTimerPause]);

  const WhiteBackArrowIcon = SVG_ICONS.whiteBackArrowIcon;

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={<WhiteBackArrowIcon />}
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
