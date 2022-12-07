import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import { getKeyFromLocalizationString } from '../../utils';
import { ExtendedText } from '../ExtendedText';
import { IDialogViewProps } from './DialogView.types';
import { styles } from './DialogView.styles';
import { SVG } from '../../assets/svg';
import { generalStyles } from '../../utils/styles';
import { BACKGROUND_IMAGES } from '../../assets';

const RoundTriangleButtonIcon = SVG.RoundTriangleButtonIcon;

export const DialogView: React.FC<IDialogViewProps> = ({
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
    <ImageBackground
      source={BACKGROUND_IMAGES.GARDEN}
      style={generalStyles.flex}>
      <SafeAreaView style={styles.container}>
        {!!Icon && (
          <View
            style={[
              styles.iconContainer,
              currentSpeech.isBlur && styles.inactiveIconContainer,
            ]}>
            <Icon />
          </View>
        )}

        <View style={styles.dialogContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={generalStyles.flex}>
            <ExtendedText
              key={getKeyFromLocalizationString(currentSpeech.textKey)}
              preset="heading"
              style={styles.title}>
              {t(currentSpeech.textKey)}
            </ExtendedText>
          </ScrollView>
        </View>
        <TouchableOpacity
          onPress={getCorrectOnPress}
          style={styles.roundButton}>
          <RoundTriangleButtonIcon />
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};
