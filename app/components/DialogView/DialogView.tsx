import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, TouchableOpacity, View } from 'react-native';

import { generalStyles } from '../../utils/styles';
import { ExtendedText } from '../ExtendedText';
import { IDialogViewProps } from './DialogView.props';
import { styles } from './DialogView.styles';

export const DialogView: React.FC<IDialogViewProps> = ({
  backgroundImage,
  dialog,
  onSubmit,
}) => {
  const { t } = useTranslation();
  const [currentSpeechIdx, setCurrentSpeechIdx] = useState(0);

  const getCurrentSpeech = useCallback(() => {
    return dialog[currentSpeechIdx];
  }, [currentSpeechIdx, dialog]);

  const goToNextSpeech = useCallback(() => {
    setCurrentSpeechIdx(currentSpeechIdx + 1);
  }, [currentSpeechIdx]);

  const getCorrectOnPress = useCallback(() => {
    if (currentSpeechIdx < dialog.length - 1) {
      return goToNextSpeech();
    } else {
      return onSubmit();
    }
  }, [currentSpeechIdx, dialog.length, goToNextSpeech, onSubmit]);

  return (
    <ImageBackground source={backgroundImage} style={generalStyles.flex}>
      <View>
        <ExtendedText key={getCurrentSpeech().id}>
          {t(getCurrentSpeech().text)}
        </ExtendedText>
      </View>
      <TouchableOpacity
        onPress={getCorrectOnPress}
        style={styles.roundButton}
      />
    </ImageBackground>
  );
};
