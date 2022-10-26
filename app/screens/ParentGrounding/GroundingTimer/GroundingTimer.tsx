import { useIsFocused } from '@react-navigation/native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

import { BACKGROUND_IMAGES, IMAGES } from '../../../assets';
import { SVG } from '../../../assets/svg';
import { ExtendedText, MainHeader } from '../../../components';
import { TEN_SECONDS } from '../../../constants/time';
import { generalStyles } from '../../../utils/styles';
import { styles } from './GroundingTimer.styles';
import { IGroundingTimerScreenProps } from './GroundingTimer.types';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;
const RoundTriangleButtonIcon = SVG.RoundTriangleButtonIcon;
const RoundPauseButtonIcon = SVG.RoundPauseButtonIcon;

export const GroundingTimerScreen: React.FC<IGroundingTimerScreenProps> = ({
  navigation,
  route,
}) => {
  const { nextRouteName } = route.params;

  const [timerValue, setTimerValue] = useState(TEN_SECONDS);

  const [isTimerPause, setIsTimerPause] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setTimerValue(TEN_SECONDS);
    }
  }, [isFocused]);

  useEffect(() => {
    if (!isTimerPause) {
      if (timerValue > 0 && !isTimerPause) {
        const timer = setInterval(() => setTimerValue(timerValue - 1), 1000);
        return () => {
          clearInterval(timer);
        };
      }
      navigation.push(nextRouteName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTimerPause, timerValue]);

  const timerStatus = useCallback(() => {
    setIsTimerPause(!isTimerPause);
  }, [isTimerPause]);

  const ButtonIcon = useMemo(() => {
    if (isTimerPause) {
      return RoundTriangleButtonIcon;
    }
    return RoundPauseButtonIcon;
  }, [isTimerPause]);

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.PARENT_GROUNDING_DEFAULT}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={navigation.goBack}
        />
        <View style={styles.container}>
          {/* //TODO: replace with animation */}
          <Image source={IMAGES.LOGO} style={styles.image} />
          <ExtendedText preset="large-title" style={styles.seconds}>
            {(timerValue < 10 ? '00:0' : '00:') + timerValue}
          </ExtendedText>
          <TouchableOpacity onPress={timerStatus}>
            <ButtonIcon />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
