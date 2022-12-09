import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useIsFocused } from '@react-navigation/native';
import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import Lottie from 'lottie-react-native';
import { useKeepAwake } from '@sayem314/react-native-keep-awake';

import { IJointGroundingTimerScreenProps } from './JointGroundingTimer.types';
import { styles } from './JointGroundingTimer.styles';
import { useNavigateNextQuest } from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { ExtendedText } from '../../../../components';
import { SVG } from '../../../../assets/svg';
import { CHARMS_BACKGROUNDS } from '../../../../assets';
import { ANIMATIONS } from '../../../../assets/animations';
import { LottieAbsoluteStyles } from '../../../../utils';
import {
  ONE_MINUTE,
  TEN_SECONDS,
  THIRTY_SECONDS,
  TWENTY_SECONDS,
} from '../../../../constants/time';
import { AudioPlayerHelper } from '../../../../services/helpers/AudioPlayerHelper';
import { AUDIO } from '../../../../constants/audio';

const RoundTriangleButtonIcon = SVG.RoundTriangleButtonIcon;
const RoundPauseButtonIcon = SVG.RoundPauseButtonIcon;

export const JointGroundingTimerScreen: React.FC<IJointGroundingTimerScreenProps> =
  ({ route }) => {
    const { duration, backgroundImage } = route.params.data;

    useKeepAwake();

    const lottieRef = useRef<Lottie>(null);

    const [timerValue, setTimerValue] = useState(duration ?? TEN_SECONDS);
    const [isTimerPause, setIsTimerPause] = useState(false);
    const isFocused = useIsFocused();

    const navigateNextQuest = useNavigateNextQuest();

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
        navigateNextQuest();
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
        source={CHARMS_BACKGROUNDS[backgroundImage ?? 'CALM_BLUR_BACKGROUND']}
        style={generalStyles.flex}>
        <Lottie
          source={animation}
          loop={false}
          autoPlay
          style={LottieAbsoluteStyles(-30)}
          ref={lottieRef}
        />
        <SafeAreaView style={generalStyles.flex}>
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
