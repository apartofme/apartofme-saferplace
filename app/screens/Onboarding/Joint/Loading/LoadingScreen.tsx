import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import { BottomButtonView, ExtendedText, Timer } from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { ILoadingScreenProps } from './LoadingScreen.props';
import {
  INTERVAL_INCREASE,
  MAX_TIME,
  NEXT_SPEECH,
  SPEECH_LIST,
  TICK_VALUE,
} from './LoadingScreen.data';

export const LoadingScreen: React.FC<ILoadingScreenProps> = () => {
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
      {/*// TODO: change _.noop to a real function*/}
      <BottomButtonView
        buttonTitle={t('buttons.we_ready').toUpperCase()}
        onSubmit={_.noop}>
        <Timer value={currentLoaderValue} />
        <ExtendedText>{t(currentSpeech.titleKey)}</ExtendedText>
        <ExtendedText>{t(currentSpeech.subtitleKey)}</ExtendedText>
      </BottomButtonView>
    </SafeAreaView>
  );
};
