import React, { useCallback, useMemo } from 'react';
import { SafeAreaView } from 'react-native';

import { IElixirTitleButtonScreenProps } from './ElixirTitleButton.types';
import { useAppDispatch, useAppSelector, useMount } from '../../../hooks';
import { BottomButtonView, ExtendedText } from '../../../components';
import { getElixirAnimationByRange } from '../../../utils';
import { generalStyles } from '../../../utils/styles';
import { styles } from './ElixirTitleButton.styles';
import { questSlice } from '../../../redux/slices';

export const ElixirTitleButtonScreen: React.FC<IElixirTitleButtonScreenProps> =
  ({ navigation }) => {
    const dispatch = useAppDispatch();

    const fullnessElixir = useAppSelector(state => state.elixir.fullnessElixir);

    const elixirAnimation = useMount(() =>
      getElixirAnimationByRange(fullnessElixir ?? 0),
    );

    // TODO: add localization
    const buttonTitle = useMemo(() => {
      if (fullnessElixir && fullnessElixir >= 3) {
        return 'Plant a Plant';
      }
      return 'Back to the Clearing';
    }, [fullnessElixir]);

    const title = useMemo(() => {
      if (fullnessElixir && fullnessElixir >= 3) {
        return 'Excellent a full bottle of magic potion!';
      }
      return null;
    }, [fullnessElixir]);

    const onSabmit = useCallback(() => {
      dispatch(questSlice.actions.updateCurrentDayQuestsStack());
      if (fullnessElixir && fullnessElixir >= 3) {
        navigation.navigate('GardenStack', {
          screen: 'Garden',
          params: {
            isFirstTime: false,
            isPlanting: true,
            isFirstTimeGarden: false,
          },
        });
        return;
      }

      navigation.push('GardenStack', {
        screen: 'Garden',
        params: {
          isFirstTime: false,
          isPlanting: false,
          isFirstTimeGarden: false,
        },
      });
    }, [dispatch, fullnessElixir, navigation]);

    return (
      <SafeAreaView style={generalStyles.flex}>
        <BottomButtonView
          buttonTitle={buttonTitle}
          onSubmit={onSabmit}
          style={styles.container}>
          {title && (
            <ExtendedText preset="title" style={styles.title}>
              {title}
            </ExtendedText>
          )}
          {/* // TODO: change text to image */}
          <ExtendedText>{elixirAnimation}</ExtendedText>
        </BottomButtonView>
      </SafeAreaView>
    );
  };
