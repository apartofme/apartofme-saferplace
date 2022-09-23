import React, { useCallback, useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import { ExtendedText } from '../../../components';
import { styles } from './ElixirDoubleInteraction.styles';
import { IElixirDoubleInteractionScreenProps } from './ElixirDoubleInteraction.types';

export const ElixirDoubleInteractionScreen: React.FC<IElixirDoubleInteractionScreenProps> =
  ({ route }) => {
    const { title, description } = route.params.data;

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
        <ExtendedText style={styles.title}>{title}</ExtendedText>
        {/* // TODO: change to animation */}
        <View
          style={[
            styles.square,
            isСhildPress && isAdultPress && styles.redBackground,
          ]}
        />
        <ExtendedText style={styles.subtitle}>{description}</ExtendedText>
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
