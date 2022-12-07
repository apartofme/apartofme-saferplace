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

import { IDancingTimerScreenProps } from './DancingTimer.types';
import { styles } from './DancingTimer.styles';
import {
  useAppSelector,
  useAppState,
  useMount,
  useNavigateNextQuest,
} from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { ExtendedText } from '../../../../components';
import { AudioPlayerHelper } from '../../../../services/helpers/AudioPlayerHelper';
import { SOUND_CAROUSEL } from '../../SelectSound/SelectSong.data';
import { SVG } from '../../../../assets/svg';
import { CHARMS_BACKGROUNDS } from '../../../../assets';
import { ANIMATIONS } from '../../../../assets/animations';
import { LottieAbsoluteStyles } from '../../../../utils';

const RoundTriangleButtonIcon = SVG.RoundTriangleButtonIcon;
const RoundPauseButtonIcon = SVG.RoundPauseButtonIcon;

export const DancingTimerScreen: React.FC<IDancingTimerScreenProps> = ({
  route,
}) => {
  const { title, description, duration, backgroundImage } = route.params.data;

  useKeepAwake();
  const lottieRef = useRef<Lottie>(null);
  const selectedSong = useAppSelector(state => state.cache.selectedSong);

  const navigateNextQuest = useNavigateNextQuest();

  const [timerValue, setTimerValue] = useState(duration ?? 10);
  const [isTimerPause, setIsTimerPause] = useState(false);
  const isFocused = useIsFocused();

  useMount(() => {
    AudioPlayerHelper.play(selectedSong ?? SOUND_CAROUSEL[0].id);
  });

  useEffect(() => {
    if (isFocused) {
      setTimerValue(duration ?? 10);
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
      navigateNextQuest();
      AudioPlayerHelper.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTimerPause, timerValue]);

  const timerStatus = useCallback(() => {
    setIsTimerPause(!isTimerPause);
  }, [isTimerPause]);

  const appStatus = useAppState();

  useEffect(() => {
    if (appStatus !== 'active') {
      setIsTimerPause(true);
      AudioPlayerHelper.pause();
    }
  }, [appStatus]);

  useEffect(() => {
    if (isTimerPause) {
      AudioPlayerHelper.pause();
      lottieRef.current?.pause();
    } else {
      AudioPlayerHelper.start();
      lottieRef.current?.play();
    }
  }, [isTimerPause]);

  const ButtonIcon = useMemo(() => {
    if (isTimerPause) {
      return RoundTriangleButtonIcon;
    }
    return RoundPauseButtonIcon;
  }, [isTimerPause]);

  return (
    <ImageBackground
      source={
        CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
      }
      style={generalStyles.flex}>
      <Lottie
        source={ANIMATIONS.DANCING_MOTH}
        autoPlay
        loop
        ref={lottieRef}
        style={LottieAbsoluteStyles(-30)}
      />
      <SafeAreaView style={generalStyles.flex}>
        <View style={styles.container}>
          {!!title && (
            <ExtendedText preset="large-title" style={styles.title}>
              {title}
            </ExtendedText>
          )}
          {!!description && (
            <ExtendedText
              preset="secondary-text"
              style={generalStyles.greyCenter}>
              {description}
            </ExtendedText>
          )}
          <TouchableOpacity onPress={timerStatus} style={styles.button}>
            <ButtonIcon />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
