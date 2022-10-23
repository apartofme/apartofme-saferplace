import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { BACKGROUND_IMAGES } from '../../../assets';
import { ExtendedText } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { elixirSlice } from '../../../redux/slices';
import { generalStyles } from '../../../utils/styles';
import { styles } from './RecognitionDoubleInteraction.styles';
import { IRecognitionDoubleInteractionScreenProps } from './RecognitionDoubleInteraction.types';

export const RecognitionDoubleInteractionScreen: React.FC<IRecognitionDoubleInteractionScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const fullnessElixir = useAppSelector(state => state.elixir.fullnessElixir);

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
        dispatch(elixirSlice.actions.updateFullnessElixir(fullnessElixir + 1));
        navigation.navigate('RecognitionDoubleInteractionSuccess');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAdultPress, isСhildPress]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN_BACKGROUND}
        style={generalStyles.flex}>
        <SafeAreaView style={styles.container}>
          <ExtendedText style={styles.title} preset="title">
            {t('screens.recognition.double_interaction.title')}
          </ExtendedText>
          {/* // TODO: change to animation */}
          <View
            style={[
              styles.square,
              isСhildPress && isAdultPress && styles.redBackground,
            ]}
          />
          <ExtendedText style={styles.subtitle} preset="secondary-text">
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
      </ImageBackground>
    );
  };
