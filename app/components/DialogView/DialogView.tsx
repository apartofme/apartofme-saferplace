import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, TouchableOpacity, View } from 'react-native';

import { getKeyFromLocalizationString } from '../../utils';
import { ExtendedText } from '../ExtendedText';
import { IDialogViewProps } from './DialogView.props';
import { styles } from './DialogView.styles';

export const DialogView: React.FC<IDialogViewProps> = ({
  backgroundImage,
  dialog,
  onSubmit,
  initialIdx = 0,
  navigateBetween,
}) => {
  const { t } = useTranslation();
  const [currentSpeechIdx, setCurrentSpeechIdx] = useState(initialIdx);

  useEffect(() => {
    setCurrentSpeechIdx(initialIdx);
  }, [initialIdx]);

  const getCurrentSpeech = useCallback(() => {
    return dialog[currentSpeechIdx];
  }, [currentSpeechIdx, dialog]);

  const goToNextSpeech = useCallback(() => {
    setCurrentSpeechIdx(currentSpeechIdx + 1);
  }, [currentSpeechIdx]);

  const getCorrectOnPress = useCallback(() => {
    if (currentSpeechIdx < dialog.length - 1) {
      if (navigateBetween && currentSpeechIdx === navigateBetween?.index) {
        return navigateBetween?.onPress();
      }
      return goToNextSpeech();
    } else {
      return onSubmit();
    }
  }, [
    currentSpeechIdx,
    dialog.length,
    goToNextSpeech,
    navigateBetween,
    onSubmit,
  ]);

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <View style={styles.dialogContainer}>
        <ExtendedText
          key={getKeyFromLocalizationString(getCurrentSpeech().textKey)}
          preset="heading">
          {t(getCurrentSpeech().textKey)}
        </ExtendedText>
      </View>
      <TouchableOpacity
        onPress={getCorrectOnPress}
        style={styles.roundButton}
      />
    </ImageBackground>
  );
};
