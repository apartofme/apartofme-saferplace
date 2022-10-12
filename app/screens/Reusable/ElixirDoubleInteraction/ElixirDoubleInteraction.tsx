import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import { ExtendedText } from '../../../components';
import { useAppDispatch } from '../../../hooks';
import { elixirSlice } from '../../../redux/slices';
import { styles } from './ElixirDoubleInteraction.styles';
import { IElixirDoubleInteractionScreenProps } from './ElixirDoubleInteraction.types';

export const ElixirDoubleInteractionScreen: React.FC<IElixirDoubleInteractionScreenProps> =
  ({ route, navigation }) => {
    const { title, description, elixirReward } = route.params.data;
    const dispatch = useAppDispatch();

    const [isChildPress, setIsChildPress] = useState(false);
    const [isAdultPress, setIsAdultPress] = useState(false);

    const setChildPress = useCallback(() => {
      setIsChildPress(!isChildPress);
    }, [isChildPress]);

    const setAdultPress = useCallback(() => {
      setIsAdultPress(!isAdultPress);
    }, [isAdultPress]);

    useEffect(() => {
      if (isChildPress && isAdultPress) {
        dispatch(elixirSlice.actions.updateFullnessElixir(elixirReward ?? 1));
        navigation.navigate('ElixirTitleButton');
      }
    }, [isChildPress, isAdultPress, dispatch, elixirReward, navigation]);

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

        <View style={styles.buttonsContainer}>
          <View
            style={[styles.button, isChildPress && styles.border]}
            onTouchStart={setChildPress}
            onTouchEnd={setChildPress}
          />
          <View
            style={[styles.button, isAdultPress && styles.border]}
            onTouchStart={setAdultPress}
            onTouchEnd={setAdultPress}
          />
        </View>
      </SafeAreaView>
    );
  };
