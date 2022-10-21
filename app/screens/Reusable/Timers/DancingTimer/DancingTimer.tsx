import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

import { IDancingTimerScreenProps } from './DancingTimer.types';
import { styles } from './DancingTimer.styles';
import {
  useAppSelector,
  useNavigateNextQuest,
  useNavigatePrevQuest,
} from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
  Timer,
} from '../../../../components';
import { AudioPlayerHelper } from '../../../../services/helpers/AudioPlayerHelper';
import { SOUND_CAROUSEL } from '../../SelectSound/SelectSong.data';
import { SVG_ICONS } from '../../../../assets/svg';

export const DancingTimerScreen: React.FC<IDancingTimerScreenProps> = ({
  navigation,
  route,
}) => {
  const {
    title,
    description,
    buttonTitle,
    duration,
    crossHeader,
    escapeMenuAlternativeNavigateTo,
  } = route.params.data;

  const { t } = useTranslation();

  const [isTimerStart, setIsTimerStart] = useState<boolean>(false);
  const [isTimerEnd, setIsTimerEnd] = useState<boolean>(false);

  const selectedSong = useAppSelector(state => state.cache.selectedSong);

  const navigateNextQuest = useNavigateNextQuest();

  const navigatePrevQuest = useNavigatePrevQuest();

  const onSubmitPress = useCallback(() => {
    if (isTimerEnd) {
      navigateNextQuest();
      AudioPlayerHelper.stop();
      return;
    }

    setIsTimerStart(true);

    AudioPlayerHelper.play(selectedSong ?? SOUND_CAROUSEL[0].id);
  }, [isTimerEnd, navigateNextQuest, selectedSong]);

  const onTimerComplete = useCallback(() => {
    AudioPlayerHelper.stop();
    setIsTimerStart(false);
    setIsTimerEnd(true);
  }, []);

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

  const correctTitle = useMemo(() => {
    if (isTimerStart) {
      return t('screens.dancing_timer.start');
    }
    if (isTimerEnd) {
      return t('screens.dancing_timer.end.title');
    }
    return title;
  }, [isTimerEnd, isTimerStart, t, title]);

  const correctDescription = useMemo(() => {
    if (isTimerEnd) {
      return t('screens.dancing_timer.end.description');
    }

    return description;
  }, [description, isTimerEnd, t]);

  const correctButtonTitle = useMemo(() => {
    if (isTimerStart) {
      return t('buttons.timer_started');
    }
    if (isTimerEnd) {
      return t('buttons.next');
    }

    return buttonTitle;
  }, [buttonTitle, isTimerEnd, isTimerStart, t]);

  const WhiteBackArrowIcon = SVG_ICONS.whiteBackArrowIcon;
  const WhiteCrossIcon = SVG_ICONS.whiteCrossIcon;

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
  }, [
    WhiteBackArrowIcon,
    WhiteCrossIcon,
    crossHeader,
    onBackArrowPress,
    onCrossPress,
  ]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      {renderHeader()}
      <BottomButtonView
        buttonTitle={correctButtonTitle ?? t('buttons.start')}
        onSubmit={onSubmitPress}
        isDisabledButton={isTimerStart}
        style={styles.container}>
        <Timer
          duration={duration ?? 10}
          isStart={isTimerStart}
          onAnimationComplete={onTimerComplete}
        />
        {title && (
          <ExtendedText preset="large-title" style={styles.title}>
            {correctTitle}
          </ExtendedText>
        )}
        {description && (
          <ExtendedText preset="secondary-text" style={styles.description}>
            {correctDescription}
          </ExtendedText>
        )}
      </BottomButtonView>
    </SafeAreaView>
  );
};
