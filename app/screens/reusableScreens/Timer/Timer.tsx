import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';

import { IMAGES } from '../../../assets';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
  Timer,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { ITimerScreenProps } from './Timer.props';
import { styles } from './Timer.styles';

export const TimerScreen: React.FC<ITimerScreenProps> = ({
  background,
  duration,
  titleKey = '',
  onAnimationComplete,
}) => {
  const { t } = useTranslation();
  const [isTimerStart, setIsTimerStart] = useState<boolean>(false);

  const correctButtonTitle = useMemo(
    () => (isTimerStart ? 'buttons.timer_started' : 'buttons.start_timer'),
    [isTimerStart],
  );

  const onSubmitPress = useCallback(() => {
    setIsTimerStart(true);
  }, []);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <ImageBackground source={background} style={generalStyles.flex}>
        <MainHeader leftIcon={IMAGES.WHITE_BACK_ARROW} />
        <BottomButtonView
          buttonTitle={t(correctButtonTitle)}
          onSubmit={onSubmitPress}
          isDisabledButton={isTimerStart}
          style={styles.container}>
          <Timer
            duration={duration}
            isStart={isTimerStart}
            onAnimationComplete={onAnimationComplete}
          />
          {!!titleKey && (
            <ExtendedText preset="heading" style={styles.title}>
              {t(titleKey)}
            </ExtendedText>
          )}
        </BottomButtonView>
      </ImageBackground>
    </SafeAreaView>
  );
};
