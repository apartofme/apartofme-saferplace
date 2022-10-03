import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import _ from 'lodash';
import { useCallback } from 'react';

import { questSlice } from '../redux/slices';
import { Nullable } from '../utils';
import { useAppDispatch, useAppSelector } from './redux';

export const useNavigateNextQuestById = (questId: Nullable<string>) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const currentQuestIdx = useAppSelector(state => state.quest.currentQuestIdx);
  const currentQuestLine = useAppSelector(
    state => state.quest.currentQuestLine,
  );

  const navigateNextQuest = useCallback(() => {
    if (currentQuestLine) {
      const nextQuestIdx = _.findIndex(
        currentQuestLine.quests,
        value => value.id === questId,
      );
      const nextQuest = currentQuestLine?.quests[nextQuestIdx];

      if (nextQuest) {
        dispatch(questSlice.actions.saveCurrentQuestIdx(nextQuestIdx));
        dispatch(questSlice.actions.pushToCurrentQuestStack(currentQuestIdx));

        navigation.push(nextQuest.type, {
          data: { ...nextQuest },
        });
      } else {
        // TODO: uncommen when ElixirStack will be done
        // navigation.navigate('ElixirStack')
      }
    }
  }, [currentQuestIdx, currentQuestLine, dispatch, navigation, questId]);

  return navigateNextQuest;
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
      dispatch(questSlice.actions.pushToCurrentQuestStack(currentQuestIdx));

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

export const usePositiveNavigateTo = (questId: Nullable<string>) => {
  const navigateToNextQuest = useNavigateNextQuest();
  const navigateToNextQuestById = useNavigateNextQuestById(questId);

  if (questId) {
    return navigateToNextQuestById;
  }
  return navigateToNextQuest;
};

export const useNegativeNavigateTo = (
  questId: Nullable<string>,
  isValid: Nullable<boolean>,
) => {
  const navigateToNextQuest = useNavigateNextQuest();
  const navigateToNextQuestById = useNavigateNextQuestById(questId);

  if (questId && isValid) {
    return navigateToNextQuestById;
  }
  return navigateToNextQuest;
};

export const useNavigatePrevQuest = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const currentQuestIdx = useAppSelector(state => state.quest.currentQuestIdx);

  const previousQuestIdx = useAppSelector(state => {
    const questStack = state.quest.currentQuestStack;
    return questStack[questStack.length - 1] ?? 0;
  });

  const navigatePrevQuest = useCallback(() => {
    navigation.goBack();

    if (currentQuestIdx) {
      dispatch(questSlice.actions.saveCurrentQuestIdx(previousQuestIdx));
    }

    if (previousQuestIdx) {
      dispatch(questSlice.actions.popFromCurrentQuestStack());
    }
  }, [currentQuestIdx, dispatch, navigation, previousQuestIdx]);

  return navigatePrevQuest;
};

export const useParseTextWithNickname = (text: string): string => {
  const currentNickname = useAppSelector(
    state => state.cache.nicknames?.current,
  ) as string;
  const parentNickname = useAppSelector(
    state => state.cache.nicknames?.parent,
  ) as string;
  const childNickname = useAppSelector(
    state => state.cache.nicknames?.child,
  ) as string;
  return _.replace(
    _.replace(
      _.replace(text, '|child|', childNickname),
      '|parent|',
      parentNickname,
    ),
    '|nickname|',
    currentNickname,
  );
};
