import { useIsFocused } from '@react-navigation/native';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import Lottie from 'lottie-react-native';

import { BACKGROUND_IMAGES } from '../../../../assets';
import { ANIMATIONS } from '../../../../assets/animations';
import { SVG } from '../../../../assets/svg';
import { ExtendedText, MainHeader } from '../../../../components';
import { TEN_SECONDS } from '../../../../constants/time';
import { generalStyles } from '../../../../utils/styles';
import { styles } from './GroundingTimer.styles';
import { IGroundingTimerScreenProps } from './GroundingTimer.types';
import { LottieAbsoluteStyles } from '../../../../utils';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;
const RoundTriangleButtonIcon = SVG.RoundTriangleButtonIcon;
const RoundPauseButtonIcon = SVG.RoundPauseButtonIcon;

export const GroundingTimerScreen: React.FC<IGroundingTimerScreenProps> = ({
  navigation,
  route,
}) => {
  const {
    nextRouteName,
    acknowledgementTitleKey,
    acknowledgementSubtitleKey,
    duration,
  } = route.params.data;

  const lottieRef = useRef<Lottie>(null);

  const [timerValue, setTimerValue] = useState(
    duration ? duration : TEN_SECONDS,
  );
  const [isTimerPause, setIsTimerPause] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setTimerValue(duration ? duration : TEN_SECONDS);
    }
  }, [duration, isFocused]);

  useEffect(() => {
    if (!isTimerPause) {
      if (timerValue > 0 && !isTimerPause) {
        const timer = setInterval(() => setTimerValue(timerValue - 1), 1000);
        return () => {
          clearInterval(timer);
        };
      }
      navigation.push('GroundingAcknowledgementTitle', {
        data: {
          titleKey: acknowledgementTitleKey,
          subtitleKey: acknowledgementSubtitleKey,
          nextRouteName,
        },
      });
    }
    // intentionally
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTimerPause, timerValue]);

  const timerStatus = useCallback(() => {
    setIsTimerPause(!isTimerPause);
  }, [isTimerPause]);

  const ButtonIcon = useMemo(() => {
    if (isTimerPause) {
      lottieRef.current?.pause();
      return RoundTriangleButtonIcon;
    }
    lottieRef.current?.play();
    return RoundPauseButtonIcon;
  }, [isTimerPause]);

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.PARENT_GROUNDING_DEFAULT}
      style={generalStyles.flex}>
      <Lottie
        source={ANIMATIONS.TIMER}
        loop={false}
        autoPlay
        style={LottieAbsoluteStyles(-30)}
        ref={lottieRef}
      />
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={navigation.goBack}
        />
        <View style={styles.container}>
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
