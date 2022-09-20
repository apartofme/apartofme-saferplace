import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { ExtendedText } from '../../../components';
import { styles } from './ElixirDoubleInteraction.styles';
import { IElixirDoubleInteractionScreenProps } from './ElixirDoubleInteraction.types';

export const ElixirDoubleInteractionScreen: React.FC<IElixirDoubleInteractionScreenProps> =
  ({ route }) => {
    const { t } = useTranslation();

    const { titleKey, subtitleKey, onAnimationEnd } = route.params.data;

    const [isСhildPress, setIsСhildPress] = useState(false);
    const [isAdultPress, setIsAdultPress] = useState(false);

    return (
      <SafeAreaView style={styles.container}>
        <ExtendedText style={styles.title}>{t(titleKey)}</ExtendedText>
        {/* // TODO: change to animation */}
        <View
          style={[
            styles.square,
            isСhildPress && isAdultPress && styles.redBackground,
          ]}
        />
        <ExtendedText style={styles.subtitle}>{t(subtitleKey)}</ExtendedText>
        <View style={styles.buttonsContainer}>
          <View
            style={styles.button}
            onTouchStart={() => setIsСhildPress(true)}
            onTouchEnd={() => setIsСhildPress(false)}
          />
          <View
            style={styles.button}
            onTouchStart={() => setIsAdultPress(true)}
            onTouchEnd={() => setIsAdultPress(false)}
          />
        </View>
      </SafeAreaView>
    );
  };
