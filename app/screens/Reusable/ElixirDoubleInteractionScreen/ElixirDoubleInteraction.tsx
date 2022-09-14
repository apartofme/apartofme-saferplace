import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';

import { ExtendedText } from '../../../components';
import { styles } from './ElixirDoubleInteraction.styles';
import { IElixirDoubleInteractionScreenProps } from './ElixirDoubleInteraction.types';

export const ElixirDoubleInteractionScreen: React.FC<IElixirDoubleInteractionScreenProps> =
  ({ route }) => {
    const { t } = useTranslation();

    const { titleKey, subtitleKey, onAnimationEnd } = route.params.data;

    const [isFirst, setIsFirst] = useState(true);
    const [isSecond, setIsSecond] = useState(false);

    return (
      <SafeAreaView style={styles.container}>
        <ExtendedText style={styles.title}>{t(titleKey)}</ExtendedText>
        {/* // TODO: change to animation */}
        <View
          style={[styles.square, isFirst && isSecond && styles.redBackground]}
        />
        <ExtendedText style={styles.subtitle}>{t(subtitleKey)}</ExtendedText>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPressIn={() => setIsFirst(true)}
            onPressOut={() => setIsFirst(false)}
          />
          <TouchableOpacity
            style={styles.button}
            onPressIn={() => setIsSecond(true)}
            onPressOut={() => setIsSecond(false)}
          />
        </View>
      </SafeAreaView>
    );
  };
