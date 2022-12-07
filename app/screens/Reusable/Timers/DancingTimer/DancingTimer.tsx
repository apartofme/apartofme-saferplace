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
  useNavigatePrevQuest,
} from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { ExtendedText, MainHeader } from '../../../../components';
import { AudioPlayerHelper } from '../../../../services/helpers/AudioPlayerHelper';
import { SOUND_CAROUSEL } from '../../SelectSound/SelectSong.data';
import { SVG } from '../../../../assets/svg';
import { CHARMS_BACKGROUNDS } from '../../../../assets';
import { ANIMATIONS } from '../../../../assets/animations';
import { LottieAbsoluteStyles } from '../../../../utils';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;
const WhiteCrossIcon = SVG.WhiteCrossIcon;
const RoundTriangleButtonIcon = SVG.RoundTriangleButtonIcon;
const RoundPauseButtonIcon = SVG.RoundPauseButtonIcon;

export const DancingTimerScreen: React.FC<IDancingTimerScreenProps> = ({
  navigation,
  route,
}) => {
  const {
    title,
    description,
    duration,
    crossHeader,
    escapeMenuAlternativeNavigateTo,
    backgroundImage,
  } = route.params.data;

  useKeepAwake();
  const lottieRef = useRef<Lottie>(null);
  const selectedSong = useAppSelector(state => state.cache.selectedSong);

  const navigateNextQuest = useNavigateNextQuest();
  const navigatePrevQuest = useNavigatePrevQuest();

  const [timerValue, setTimerValue] = useState(duration ?? 10);
  const [isTimerPause, setIsTimerPause] = useState(false);
  const isFocused = useIsFocused();

  useMount(() => {
    AudioPlayerHelper.play(selectedSong ?? SOUND_CAROUSEL[0].id);
  });

  const onBackArrowPress = useCallback(() => {
    AudioPlayerHelper.stop();
    navigatePrevQuest();
  }, [navigatePrevQuest]);

  const onCrossPress = useCallback(() => {
    navigation.navigate('EscapeMenu', {
      data: {
        escapeMenuAlternativeNavigateTo: escapeMenuAlternativeNavigateTo,
      },
    });
  }, [escapeMenuAlternativeNavigateTo, navigation]);

  const renderHeader = useCallback(() => {
    if (crossHeader) {
      return (
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={onBackArrowPress}
          rightIcon={<WhiteCrossIcon />}
          onRightIconPress={onCrossPress}
        />
      );
    }
    return (
      <MainHeader
        leftIcon={<WhiteBackArrowIcon />}
        onLeftIconPress={onBackArrowPress}
      />
    );
  }, [crossHeader, onBackArrowPress, onCrossPress]);

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
        {renderHeader()}
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
