import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';

import { ExtendedText } from '../../../components';
import { useAppDispatch } from '../../../hooks';
import { elixirSlice } from '../../../redux/slices';
import { styles } from './RecognitionDoubleInteraction.styles';
import { IRecognitionDoubleInteractionScreenProps } from './RecognitionDoubleInteraction.types';

export const RecognitionDoubleInteractionScreen: React.FC<IRecognitionDoubleInteractionScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

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
        dispatch(elixirSlice.actions.updateFullnessElixir(1));
        navigation.navigate('RecognitionDoubleInteractionSuccess');
      }
    }, [dispatch, isAdultPress, isСhildPress, navigation]);

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
        <GestureHandlerRootView style={styles.buttonsContainer}>
          <PanGestureHandler onBegan={setСhildPress} onEnded={setСhildPress}>
            <View style={styles.button} />
          </PanGestureHandler>
          <PanGestureHandler onBegan={setAdultPress} onEnded={setAdultPress}>
            <View style={styles.button} />
          </PanGestureHandler>
        </GestureHandlerRootView>
      </SafeAreaView>
    );
  };
