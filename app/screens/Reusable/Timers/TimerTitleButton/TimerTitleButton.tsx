import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

import { IMAGES } from '../../../../assets';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
  Timer,
} from '../../../../components';
import { ITimerTitleButtonScreenProps } from './TimerTitleButton.types';
import { styles } from './TimerTitleButton.styles';
import { generalStyles } from '../../../../utils/styles';

export const TimerTitleButtonScreen: React.FC<ITimerTitleButtonScreenProps> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation();
  const [isTimerStart, setIsTimerStart] = useState<boolean>(false);

  const { duration, title } = route.params.data;

  const correctButtonTitle = useMemo(() => {
    if (isTimerStart) {
      return 'buttons.timer_started';
    } else {
      return 'buttons.start_timer';
    }
  }, [isTimerStart]);

  const onSubmitPress = useCallback(() => {
    setIsTimerStart(true);
  }, []);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <BottomButtonView
        buttonTitle={t(correctButtonTitle)}
        onSubmit={onSubmitPress}
        isDisabledButton={isTimerStart}
        style={styles.container}>
        <Timer duration={duration} isStart={isTimerStart} />
        {title && (
          <ExtendedText preset="heading" style={styles.title}>
            {title}
          </ExtendedText>
        )}
      </BottomButtonView>
    </SafeAreaView>
  );
};
