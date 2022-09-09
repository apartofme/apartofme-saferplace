import React, { useCallback, useState } from 'react';
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
}) => {
  const { t } = useTranslation();
  const [isTimerStart, setIsTimerStart] = useState<boolean>(false);

  const onSubmitPress = useCallback(() => {
    setIsTimerStart(true);
  }, []);

  const goToNextScreen = useCallback(() => {
    // TODO: add navigation
  }, []);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <ImageBackground source={background} style={generalStyles.flex}>
        <MainHeader leftIcon={IMAGES.WHITE_BACK_ARROW} />
        <BottomButtonView
          buttonTitle={t('')}
          onSubmit={onSubmitPress}
          isDisabledButton={isTimerStart}>
          <Timer
            duration={duration}
            isStart={isTimerStart}
            onAnimationComplete={goToNextScreen}
          />
          {!!titleKey && <ExtendedText>{t(titleKey)}</ExtendedText>}
        </BottomButtonView>
      </ImageBackground>
    </SafeAreaView>
  );
};
