import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const fullnessElixir = useAppSelector(state => state.elixir.fullnessElixir);
    const interruptedQuestLine = useAppSelector(
      state => state.quest.interruptedQuestLine,
    );
    const currentQuestLine = useAppSelector(
      state => state.quest.currentQuestLine,
    );

    const elixirAnimation = useMount(() =>
      getElixirAnimationByRange(fullnessElixir ?? 0),
    );

    const buttonTitle = useMemo(() => {
      if (fullnessElixir && fullnessElixir >= 3) {
        return t('buttons.plant_a_plant');
      }
      return t('buttons.back_to_clearing');
    }, [fullnessElixir, t]);

    const title = useMemo(() => {
      if (fullnessElixir && fullnessElixir >= 3) {
        return t('screens.elixir_title_button.title');
      }
      return null;
    }, [fullnessElixir, t]);

    const onSabmit = useCallback(() => {
      if (interruptedQuestLine?.id === currentQuestLine?.id) {
        dispatch(questSlice.actions.updateInterruptedQuestLine(null));
      }
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
    }, [
      currentQuestLine?.id,
      dispatch,
      fullnessElixir,
      interruptedQuestLine?.id,
      navigation,
    ]);

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
