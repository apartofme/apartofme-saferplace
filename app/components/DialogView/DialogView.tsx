import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, TouchableOpacity, View } from 'react-native';

import { getKeyFromLocalizationString } from '../../utils';
import { ExtendedText } from '../ExtendedText';
import { IDialogViewProps } from './DialogView.types';
import { styles } from './DialogView.styles';
import { SVG } from '../../assets/svg';
import { generalStyles } from '../../utils/styles';

const RoundTriangleButtonIcon = SVG.RoundTriangleButtonIcon;

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

  const currentSpeech = useMemo(
    () => dialog[currentSpeechIdx],
    [currentSpeechIdx, dialog],
  );

  const Icon = useMemo(
    () => (currentSpeech.iconKey ? SVG[currentSpeech.iconKey] : null),
    [currentSpeech.iconKey],
  );

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
    <ImageBackground source={backgroundImage} style={[generalStyles.flex]}>
      <View style={styles.container}>
        {Icon && (
          <View style={currentSpeech.isBlur && styles.inactiveIconContainer}>
            <Icon />
          </View>
        )}

        <View style={styles.dialogContainer}>
          <ExtendedText
            key={getKeyFromLocalizationString(currentSpeech.textKey)}
            preset="heading"
            style={styles.title}>
            {t(currentSpeech.textKey)}
          </ExtendedText>
        </View>

        <TouchableOpacity
          onPress={getCorrectOnPress}
          style={styles.roundButton}>
          <RoundTriangleButtonIcon />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
