import React, { useCallback, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';

import { ExtendedText } from '../../../components';
import { styles } from './ElixirDoubleInteraction.styles';
import { IElixirDoubleInteractionScreenProps } from './ElixirDoubleInteraction.types';

export const ElixirDoubleInteractionScreen: React.FC<IElixirDoubleInteractionScreenProps> =
  ({ route }) => {
    const { title, description } = route.params.data;

    const [isChildPress, setIsChildPress] = useState(false);
    const [isAdultPress, setIsAdultPress] = useState(false);

    const setChildPress = useCallback(() => {
      setIsChildPress(!isChildPress);
    }, [isChildPress]);

    const setAdultPress = useCallback(() => {
      setIsAdultPress(!isAdultPress);
    }, [isAdultPress]);

    return (
      <SafeAreaView style={styles.container}>
        <ExtendedText style={styles.title}>{title}</ExtendedText>
        {/* // TODO: change to animation */}
        <View
          style={[
            styles.square,
            isChildPress && isAdultPress && styles.redBackground,
          ]}
        />
        <ExtendedText style={styles.subtitle}>{description}</ExtendedText>

        <GestureHandlerRootView style={styles.buttonsContainer}>
          <PanGestureHandler onBegan={setChildPress} onEnded={setChildPress}>
            <View style={[styles.button, isChildPress && styles.border]} />
          </PanGestureHandler>

          <PanGestureHandler onBegan={setAdultPress} onEnded={setAdultPress}>
            <View style={[styles.button, isAdultPress && styles.border]} />
          </PanGestureHandler>
        </GestureHandlerRootView>
      </SafeAreaView>
    );
  };
