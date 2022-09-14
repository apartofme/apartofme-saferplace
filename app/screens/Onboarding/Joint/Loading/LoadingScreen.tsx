import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';

import { BottomButtonView, ExtendedText, Timer } from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { ILoadingScreenProps } from './LoadingScreen.types';
import {
  INTERVAL_INCREASE,
  MAX_TIME,
  NEXT_SPEECH,
  SPEECH_LIST,
  TICK_VALUE,
} from './LoadingScreen.data';
import { styles } from './LoadingScreen.styles';

export const LoadingScreen: React.FC<ILoadingScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const [currentSpeechIdx, setCurrentSpeechIdx] = useState(0);
  const [currentLoaderValue, setCurrentLoaderValue] = useState(0);

  const currentSpeech = useMemo(
    () => SPEECH_LIST[currentSpeechIdx],
    [currentSpeechIdx],
  );

  const goToNextSpeech = useCallback(() => {
    setCurrentSpeechIdx(currentSpeechIdx + 1);
  }, [currentSpeechIdx]);

  const onSubmit = useCallback(() => {
    navigation.navigate('WelcomeChild');
  }, [navigation]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLocal = currentLoaderValue + INTERVAL_INCREASE;
      setCurrentLoaderValue(newLocal);
      if (currentLoaderValue === NEXT_SPEECH) {
        goToNextSpeech();
      }
    }, TICK_VALUE);

    if (currentLoaderValue >= MAX_TIME) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [currentLoaderValue, goToNextSpeech]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <BottomButtonView
        style={styles.container}
        buttonTitle={t('buttons.we_ready').toUpperCase()}
        onSubmit={onSubmit}>
        <Timer value={currentLoaderValue} style={styles.timer} />
        <ExtendedText style={styles.title} preset="large-title">
          {t(currentSpeech.titleKey)}
        </ExtendedText>
        <ExtendedText style={styles.subtitle} preset="secondary-text">
          {t(currentSpeech.subtitleKey)}
        </ExtendedText>
      </BottomButtonView>
    </SafeAreaView>
  );
};
