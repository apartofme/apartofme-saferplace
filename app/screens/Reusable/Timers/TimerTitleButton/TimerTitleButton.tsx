import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

import { BottomButtonView, Timer } from '../../../../components';
import { ITimerTitleButtonScreenProps } from './TimerTitleButton.types';
import { styles } from './TimerTitleButton.styles';
import { generalStyles } from '../../../../utils/styles';
import {
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../../hooks';

export const TimerTitleButtonScreen: React.FC<ITimerTitleButtonScreenProps> = ({
  route,
}) => {
  const { t } = useTranslation();
  const [isTimerStart, setIsTimerStart] = useState<boolean>(false);
  const navigateNextQuest = useNavigateNextQuest();
  const {
    duration,
    title,
    crossHeader,
    titleHasNickname,
    escapeMenuAlternativeNavigateTo,
  } = route.params.data;

  const Header = useRenderQuestHeader({
    crossHeader: crossHeader ?? false,
    escapeMenuAlternativeNavigateTo,
  });

  const correctButtonTitle = useMemo(() => {
    if (isTimerStart) {
      return 'buttons.timer_started';
    } else {
      return 'buttons.start_timer';
    }
  }, [isTimerStart]);

  const Title = useParsedJSXTextNickname({
    text: title,
    textHasNickname: titleHasNickname ?? true,
    preset: 'heading',
    style: styles.title,
    // TODO: remove
    variableStyle: { color: '#00dbc0' },
  });

  const onSubmitPress = useCallback(() => {
    setIsTimerStart(true);
  }, []);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <Header />
      <BottomButtonView
        buttonTitle={t(correctButtonTitle)}
        onSubmit={onSubmitPress}
        isDisabledButton={isTimerStart}
        style={styles.container}>
        <Timer
          duration={duration ?? 10}
          isStart={isTimerStart}
          onAnimationComplete={navigateNextQuest}
        />
        {title && <Title />}
      </BottomButtonView>
    </SafeAreaView>
  );
};
