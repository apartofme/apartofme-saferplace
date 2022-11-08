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

import { ExtendedText } from '../../../../components';
import { ITimerTitleButtonScreenProps } from './TimerTitleButton.types';
import { styles } from './TimerTitleButton.styles';
import { generalStyles } from '../../../../utils/styles';
import {
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../../hooks';
import { CHARMS_BACKGROUNDS } from '../../../../assets';
import { SVG } from '../../../../assets/svg';
import { ANIMATIONS } from '../../../../assets/animations';
import { TEN_SECONDS } from '../../../../constants/time';

const RoundTriangleButtonIcon = SVG.RoundTriangleButtonIcon;
const RoundPauseButtonIcon = SVG.RoundPauseButtonIcon;

export const TimerTitleButtonScreen: React.FC<ITimerTitleButtonScreenProps> = ({
  route,
}) => {
  const {
    duration,
    title,
    description,
    backgroundImage,
    crossHeader,
    titleHasNickname,
    escapeMenuAlternativeNavigateTo,
  } = route.params.data;

  const lottieRef = useRef<Lottie>(null);

  const [timerValue, setTimerValue] = useState(duration ?? TEN_SECONDS);
  const [isTimerPause, setIsTimerPause] = useState(true);
  const navigateNextQuest = useNavigateNextQuest();

  const Header = useRenderQuestHeader({
    crossHeader: crossHeader ?? false,
    escapeMenuAlternativeNavigateTo,
  });

  const Title = useParsedJSXTextNickname({
    text: title,
    textHasNickname: titleHasNickname ?? true,
    preset: 'large-title',
    style: styles.title,
  });

  const ButtonIcon = useMemo(() => {
    if (isTimerPause) {
      lottieRef.current?.pause();
      return RoundTriangleButtonIcon;
    }
    lottieRef.current?.play();
    return RoundPauseButtonIcon;
  }, [isTimerPause]);

  const timerStatus = useCallback(() => {
    setIsTimerPause(!isTimerPause);
  }, [isTimerPause]);

  useEffect(() => {
    if (!isTimerPause) {
      if (timerValue > 0 && !isTimerPause) {
        const timer = setTimeout(() => setTimerValue(timerValue - 1), 1000);
        return () => {
          clearTimeout(timer);
        };
      }
      return navigateNextQuest();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTimerPause, timerValue]);

  return (
    <ImageBackground
      source={
        CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
      }
      style={generalStyles.flex}>
      <Lottie
        source={ANIMATIONS.TIMER}
        loop={false}
        style={styles.animation}
        ref={lottieRef}
      />
      <SafeAreaView style={generalStyles.flex}>
        <Header />
        <View style={styles.container}>
          {title && <Title />}
          {description && (
            <ExtendedText preset="secondary-text" style={styles.description}>
              {description}
            </ExtendedText>
          )}
          <TouchableOpacity onPress={timerStatus}>
            <ButtonIcon />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
