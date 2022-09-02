import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import { BottomButtonView, ExtendedText, Timer } from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { ILoadingScreenProps } from './LoadingScreen.props';
import { SPEECH_LIST } from './LoadingScreen.data';

export const LoadingScreen: React.FC<ILoadingScreenProps> = () => {
  const { t } = useTranslation();

  const MAX_TIME = 100;
  const INTERVAL_INCREASE = 1;

  const [currentSpeechIdx, setCurrentSpeechIdx] = useState(0);
  const [currentLoaderValue, setCurrentLoaderValue] = useState(0);

  const goToNextSpeech = useCallback(() => {
    setCurrentSpeechIdx(currentSpeechIdx + 1);
  }, [currentSpeechIdx]);

  const getCurrentSpeech = useCallback(() => {
    return SPEECH_LIST[currentSpeechIdx];
  }, [currentSpeechIdx]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLoaderValue(currentLoaderValue + INTERVAL_INCREASE);
      if (currentLoaderValue === 50) {
        goToNextSpeech();
      }
    }, 100);

    if (currentLoaderValue >= MAX_TIME) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [currentLoaderValue, goToNextSpeech]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      {/*// TODO: change _.noop to a real function*/}
      <BottomButtonView
        buttonTitle={t('buttons.we_ready').toUpperCase()}
        onSubmit={_.noop}>
        <Timer value={currentLoaderValue} />
        <ExtendedText>{t(getCurrentSpeech().title)}</ExtendedText>
        <ExtendedText>{t(getCurrentSpeech().subtitle)}</ExtendedText>
      </BottomButtonView>
    </SafeAreaView>
  );
};
