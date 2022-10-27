import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

import { IDancingTimerScreenProps } from './DancingTimer.types';
import { styles } from './DancingTimer.styles';
import {
  useAppSelector,
  useMount,
  useNavigateNextQuest,
  useNavigatePrevQuest,
} from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { ExtendedText, MainHeader } from '../../../../components';
import { AudioPlayerHelper } from '../../../../services/helpers/AudioPlayerHelper';
import { SOUND_CAROUSEL } from '../../SelectSound/SelectSong.data';
import { SVG } from '../../../../assets/svg';
import { useIsFocused } from '@react-navigation/native';
import { CHARMS_BACKGROUNDS } from '../../../../assets';

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

  useEffect(() => {
    if (isTimerPause) {
      AudioPlayerHelper.pause();
    } else {
      AudioPlayerHelper.start();
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
      <SafeAreaView style={generalStyles.flex}>
        {renderHeader()}
        <View style={styles.container}>
          {/* //TODO: replace with animation */}
          {/* <Image source={IMAGES.LOGO} /> */}
          {title && (
            <ExtendedText preset="large-title" style={styles.title}>
              {title}
            </ExtendedText>
          )}
          {description && (
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
