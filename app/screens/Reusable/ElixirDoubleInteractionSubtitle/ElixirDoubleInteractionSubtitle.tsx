import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { ExtendedText } from '../../../components';
import { styles } from './ElixirDoubleInteractionSubtitle.styles';
import { IElixirDoubleInteractionSubtitleScreenProps } from './ElixirDoubleInteractionSubtitle.types';

export const ElixirDoubleInteractionSubtitleScreen: React.FC<IElixirDoubleInteractionSubtitleScreenProps> =
  () => {
    const { t } = useTranslation();

    const [isСhildPress, setIsСhildPress] = useState(false);
    const [isAdultPress, setIsAdultPress] = useState(false);

    const setСhildPress = useCallback(() => {
      setIsСhildPress(!isСhildPress);
    }, [isСhildPress]);

    const setAdultPress = useCallback(() => {
      setIsAdultPress(!isAdultPress);
    }, [isAdultPress]);

    return (
      <SafeAreaView style={styles.container}>
        <ExtendedText style={styles.title}>
          {t('screens.recognition.elixir_double_interaction.title')}
        </ExtendedText>
        {/* // TODO: change to animation */}
        <View
          style={[
            styles.square,
            isСhildPress && isAdultPress && styles.redBackground,
          ]}
        />
        <ExtendedText style={styles.subtitle}>
          {t('screens.recognition.elixir_double_interaction.description')}
        </ExtendedText>
        <View style={styles.buttonsContainer}>
          <View
            style={styles.button}
            onTouchStart={setСhildPress}
            onTouchEnd={setСhildPress}
          />
          <View
            style={styles.button}
            onTouchStart={setAdultPress}
            onTouchEnd={setAdultPress}
          />
        </View>
      </SafeAreaView>
    );
  };
