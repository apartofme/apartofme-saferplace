import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

import { IDancingTimerScreenProps } from './DancingTimer.types';
import { styles } from './DancingTimer.styles';
import { useNavigateNextQuest, useRenderQuestHeader } from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { BottomButtonView, ExtendedText, Timer } from '../../../../components';

export const DancingTimerScreen: React.FC<IDancingTimerScreenProps> = ({
  route,
}) => {
  const { title, description, buttonTitle, duration, crossHeader } =
    route.params.data;

  const { t } = useTranslation();
  const [isTimerStart, setIsTimerStart] = useState<boolean>(false);
  const [isTimerEnd, setIsTimerEnd] = useState<boolean>(false);
  const navigateNextQuest = useNavigateNextQuest();

  const Header = useRenderQuestHeader(crossHeader ?? false);

  const onSubmitPress = useCallback(() => {
    if (isTimerEnd) {
      navigateNextQuest();
    } else {
      setIsTimerStart(true);
    }
  }, [isTimerEnd, navigateNextQuest]);

  const onTimerComplete = useCallback(() => {
    setIsTimerStart(false);
    setIsTimerEnd(true);
  }, []);

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

  return (
    <SafeAreaView style={generalStyles.flex}>
      <Header />
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
