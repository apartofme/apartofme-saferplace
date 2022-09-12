import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

import { IMAGES } from '../../../../../assets';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
  Timer,
} from '../../../../../components';
import { generalStyles } from '../../../../../utils/styles';
import { ITitleButtonProps } from './TitleButton.types';
import { styles } from './TitleButton.styles';

export const TitleButton: React.FC<ITitleButtonProps> = ({
  duration,
  onSubmit,
  titleKey,
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
      <MainHeader leftIcon={IMAGES.WHITE_BACK_ARROW} />
      <BottomButtonView
        buttonTitle={t(correctButtonTitle)}
        onSubmit={onSubmitPress}
        isDisabledButton={isTimerStart}
        style={styles.container}>
        <Timer
          duration={duration}
          isStart={isTimerStart}
          onAnimationComplete={onSubmit}
        />
        {!!titleKey && (
          <ExtendedText preset="heading" style={styles.title}>
            {t(titleKey)}
          </ExtendedText>
        )}
      </BottomButtonView>
    </SafeAreaView>
  );
};
