import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import _ from 'lodash';
import { useCallback } from 'react';

import { questSlice } from '../redux/slices';
import { RadioButtonTypes } from '../screens/Reusable/RadioButton/RadioButton.data';
import { Nullable } from '../utils';
import { useAppDispatch, useAppSelector } from './redux';

export const useHandleSubmit = (answer?: string) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const currentQuestLine = useAppSelector(
    state => state.quest.currentQuestLine,
  );
  const currentQuestIdx = useAppSelector(state => state.quest.currentQuestIdx);
  const currentQuest = currentQuestLine?.quests[currentQuestIdx];

  const navigateNextQuest = useCallback(() => {
    const nextQuestIdx = currentQuestIdx + 1;
    const nextQuest = currentQuestLine?.quests[nextQuestIdx];

    if (nextQuest) {
      dispatch(questSlice.actions.saveCurrentQuestIdx(nextQuestIdx));

      navigation.push(nextQuest.type, {
        data: { ...nextQuest },
      });
    } else {
      // TODO: uncommen when ElixirStack will be done
      // navigation.navigate('ElixirStack')
    }
  }, [currentQuestIdx, currentQuestLine?.quests, dispatch, navigation]);

  const navigateNextQuestById = useCallback(() => {
    const questId: Nullable<string> = (() => {
      if (!currentQuest?.navigatesto?.length) {
        return null;
      }
      switch (answer) {
        case RadioButtonTypes.yes:
          return currentQuest.navigatesto[0];
        case RadioButtonTypes.no:
          return currentQuest.navigatesto[1];
        default:
          return currentQuest.navigatesto[0];
      }
    })();

    if (questId && currentQuestLine) {
      const nextQuestIdx = _.findIndex(
        currentQuestLine.quests,
        value => value.id === questId,
      );

      const nextQuest = currentQuestLine?.quests[nextQuestIdx];

      if (nextQuest) {
        dispatch(questSlice.actions.saveCurrentQuestIdx(nextQuestIdx));

        navigation.push(nextQuest.type, {
          data: { ...nextQuest },
        });
      } else {
        // TODO: uncommen when ElixirStack will be done
        // navigation.navigate('ElixirStack')
      }
    }
  }, [
    answer,
    currentQuest?.navigatesto,
    currentQuestLine,
    dispatch,
    navigation,
  ]);

  return currentQuest?.navigatesto?.length
    ? navigateNextQuestById
    : navigateNextQuest;
};

export const useNavigateNextQuest = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const currentQuestIdx = useAppSelector(state => state.quest.currentQuestIdx);
  const currentQuestLine = useAppSelector(
    state => state.quest.currentQuestLine,
  );

  const navigateNextQuest = useCallback(() => {
    const nextQuestIdx = currentQuestIdx + 1;
    const nextQuest = currentQuestLine?.quests[nextQuestIdx];

    if (nextQuest) {
      dispatch(questSlice.actions.saveCurrentQuestIdx(nextQuestIdx));

      navigation.push(nextQuest.type, {
        data: { ...nextQuest },
      });
    } else {
      // TODO: uncommen when ElixirStack will be done
      // navigation.navigate('ElixirStack')
    }
  }, [currentQuestIdx, currentQuestLine?.quests, dispatch, navigation]);

  return navigateNextQuest;
};

export const useNavigatePrevQuest = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const currentQuestIdx = useAppSelector(state => state.quest.currentQuestIdx);

  const navigatePrevQuest = useCallback(() => {
    navigation.goBack();

    if (currentQuestIdx) {
      dispatch(questSlice.actions.saveCurrentQuestIdx(currentQuestIdx - 1));
    }
  }, [currentQuestIdx, dispatch, navigation]);

  return navigatePrevQuest;
};
