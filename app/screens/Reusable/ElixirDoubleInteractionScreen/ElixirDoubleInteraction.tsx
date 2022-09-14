import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';

import { ExtendedText } from '../../../components';
import { styles } from './ElixirDoubleInteraction.styles';
import { IElixirDoubleInteractionScreenProps } from './ElixirDoubleInteraction.types';

export const ElixirDoubleInteractionScreen: React.FC<IElixirDoubleInteractionScreenProps> =
  ({ route }) => {
    const { t } = useTranslation();

    const { titleKey, subtitleKey, onAnimationEnd } = route.params.data;

    const [isFirst, setIsFirst] = useState(false);
    const [isSecond, setIsSecond] = useState(false);

    useEffect(() => {
      if (isFirst && isSecond) {
        console.log('on');
      }
    }, [isFirst, isSecond]);

    return (
      <SafeAreaView style={styles.container}>
        <ExtendedText style={styles.title}>{t(titleKey)}</ExtendedText>
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
