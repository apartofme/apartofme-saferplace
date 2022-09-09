import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';

import { BottomButtonView, ExtendedText, Timer } from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { ILoadingScreenProps } from './LoadingScreen.props';
import { SPEECH_LIST, TIME_TO_NEXT_SPEECH } from './LoadingScreen.data';
import { styles } from './LoadingScreen.styles';

export const LoadingScreen: React.FC<ILoadingScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const [currentSpeechIdx, setCurrentSpeechIdx] = useState(0);

  const currentSpeech = useMemo(
    () => SPEECH_LIST[currentSpeechIdx],
    [currentSpeechIdx],
  );

  const goToNextSpeech = useCallback(() => {
    if (currentSpeechIdx < SPEECH_LIST.length - 1) {
      setCurrentSpeechIdx(currentSpeechIdx + 1);
    }
  }, [currentSpeechIdx]);

  const onSubmit = useCallback(() => {
    navigation.navigate('WelcomeChild');
  }, [navigation]);

  useEffect(() => {
    setTimeout(goToNextSpeech, TIME_TO_NEXT_SPEECH);
  }, [goToNextSpeech]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <BottomButtonView
        style={styles.container}
        buttonTitle={t('buttons.we_ready').toUpperCase()}
        onSubmit={onSubmit}>
        {/*// TODO: change to correnct time*/}
        <Timer duration={10} isStart={true} style={styles.timer} />
        <ExtendedText style={styles.title} preset="heading">
          {t(currentSpeech.titleKey)}
        </ExtendedText>
        <ExtendedText style={styles.subtitle} preset="secondary-text">
          {t(currentSpeech.subtitleKey)}
        </ExtendedText>
      </BottomButtonView>
    </SafeAreaView>
  );
};
