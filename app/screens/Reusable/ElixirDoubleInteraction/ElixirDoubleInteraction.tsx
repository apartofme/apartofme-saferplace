import { values } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import { ExtendedText } from '../../../components';
import {
  DAY_14_CLOSING_DIALOGUE_ID,
  THE_CHARM_OF_BEFRIENDING_ID,
  THE_CHARM_OF_WEAVING_ID,
} from '../../../constants/quest';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { elixirSlice, questSlice } from '../../../redux/slices';
import { styles } from './ElixirDoubleInteraction.styles';
import { IElixirDoubleInteractionScreenProps } from './ElixirDoubleInteraction.types';

export const ElixirDoubleInteractionScreen: React.FC<IElixirDoubleInteractionScreenProps> =
  ({ route, navigation }) => {
    const { title, description, elixirReward } = route.params.data;
    const dispatch = useAppDispatch();

    const currentQuestLine = useAppSelector(
      state => state.quest.currentQuestLine,
    );
    const fullnessElixir = useAppSelector(state => state.elixir.fullnessElixir);
    const isCurrentQuestCompleted = useAppSelector(
      state => state.quest.isCurrentQuestCompleted,
    );
    const currentLanguage = useAppSelector(
      state => state.settings.settings.language ?? 'en',
    );
    const allQuests = useAppSelector(
      state => state.quest.allQuests?.[currentLanguage],
    );

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
        // *** Flow for complited charms ***
        if (isCurrentQuestCompleted) {
          dispatch(questSlice.actions.setIsCurrentQuestCompleted(false));
          navigation.push('GardenStack', {
            screen: 'CompletedCharmEnd',
          });
          return;
        }

        dispatch(
          elixirSlice.actions.updateFullnessElixir(
            fullnessElixir + (elixirReward ?? 1),
          ),
        );

        // *** Flow for static navigation charm og befriending ***
        if (
          currentQuestLine &&
          currentQuestLine.id === THE_CHARM_OF_BEFRIENDING_ID
        ) {
          navigation.push('BefriendingStack');
          return;
        }

        // *** Flow for static navigation day 14 closing dialog ***
        if (
          currentQuestLine &&
          currentQuestLine.id === THE_CHARM_OF_WEAVING_ID
        ) {
          const newQuestLineId = DAY_14_CLOSING_DIALOGUE_ID;
          const newQuests = values(allQuests?.[newQuestLineId].quests);

          dispatch(
            questSlice.actions.saveCurrentQuestLine({
              id: newQuests[0].questLineId,
              quests: newQuests,
            }),
          );

          dispatch(questSlice.actions.saveCurrentQuestIdx(0));

          navigation.push('QuestStack', {
            screen: newQuests[0].type,
            params: {
              data: { ...newQuests[0] },
            },
          });
          return;
        }
        navigation.navigate('ElixirTitleButton');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isChildPress, isAdultPress]);

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
