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
import {
  ONE_MINUTE,
  TEN_SECONDS,
  THIRTY_SECONDS,
  TWENTY_SECONDS,
} from '../../../../constants/time';
import { generalStyles } from '../../../../utils/styles';
import { styles } from './GroundingTimer.styles';
import { IGroundingTimerScreenProps } from './GroundingTimer.types';
import { LottieAbsoluteStyles } from '../../../../utils';
import { AudioPlayerHelper } from '../../../../services/helpers/AudioPlayerHelper';
import { AUDIO } from '../../../../constants/audio';

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

  const [timerValue, setTimerValue] = useState(duration ?? TEN_SECONDS);
  const [isTimerPause, setIsTimerPause] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setTimerValue(duration ?? TEN_SECONDS);
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

      AudioPlayerHelper.play(AUDIO.TIMER_SOUND_MAGIC);
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

  const animation = useMemo(() => {
    switch (duration) {
      case TEN_SECONDS:
        return ANIMATIONS.TEN_SECOND_TIMER;
      case TWENTY_SECONDS:
        return ANIMATIONS.TWENTY_SECOND_TIMER;
      case THIRTY_SECONDS:
        return ANIMATIONS.THIRTY_SECOND_TIMER;
      case ONE_MINUTE:
        return ANIMATIONS.ONE_MINUTE_TIMER;
      default:
        return ANIMATIONS.TIMER;
    }
  }, [duration]);

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.PARENT_GROUNDING_DEFAULT}
      style={generalStyles.flex}>
      <Lottie
        source={animation}
        loop={false}
        autoPlay
        style={LottieAbsoluteStyles()}
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
