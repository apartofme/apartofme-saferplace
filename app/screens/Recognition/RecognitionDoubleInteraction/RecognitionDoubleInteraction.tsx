import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { ExtendedText } from '../../../components';
import { styles } from './RecognitionDoubleInteraction.styles';
import { IRecognitionDoubleInteractionScreenProps } from './RecognitionDoubleInteraction.types';

export const RecognitionDoubleInteractionScreen: React.FC<IRecognitionDoubleInteractionScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    const [isСhildPress, setIsСhildPress] = useState(false);
    const [isAdultPress, setIsAdultPress] = useState(false);

    const setСhildPress = useCallback(() => {
      setIsСhildPress(!isСhildPress);
    }, [isСhildPress]);

    const setAdultPress = useCallback(() => {
      setIsAdultPress(!isAdultPress);
    }, [isAdultPress]);

    useEffect(() => {
      if (isСhildPress && isAdultPress) {
        navigation.navigate('RecognitionDoubleInteractionSuccess');
      }
    }, [isAdultPress, isСhildPress, navigation]);

    return (
      <SafeAreaView style={styles.container}>
        <ExtendedText style={styles.title}>
          {t('screens.recognition.double_interaction.title')}
        </ExtendedText>
        {/* // TODO: change to animation */}
        <View
          style={[
            styles.square,
            isСhildPress && isAdultPress && styles.redBackground,
          ]}
        />
        <ExtendedText style={styles.subtitle}>
          {t('screens.recognition.double_interaction.description')}
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
