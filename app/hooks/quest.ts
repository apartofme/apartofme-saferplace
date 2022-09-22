import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useCallback } from 'react';

import { questSlice } from '../redux/slices';
import { useAppDispatch, useAppSelector } from './redux';

export const useNavigateNextQuest = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const currentQuestIdx = useAppSelector(state => state.quest.currentQuestIdx);
  const currentQuestLine = useAppSelector(
    stete => stete.quest.currentQuestLine,
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
