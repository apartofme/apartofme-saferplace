import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback } from 'react';
import { TextStyle } from 'react-native';
import _ from 'lodash';

import { IMAGES } from '../assets';
import { ExtendedText, ExtendedTextPresets, MainHeader } from '../components';
import { questSlice } from '../redux/slices';
import { Nullable } from '../utils';
import { useAppDispatch, useAppSelector } from './redux';

export const useNavigateNextQuestById = (questId: Nullable<string>) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const currentQuestIdx = useAppSelector(state => state.quest.currentQuestIdx);
  const interruptedQuestLine = useAppSelector(
    state => state.quest.interruptedQuestLine,
  );
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
        if (interruptedQuestLine?.id === currentQuestLine.id) {
          dispatch(questSlice.actions.updateInterruptedQuestLine(null));
        }
        dispatch(
          questSlice.actions.saveCompletedQuestsId(+currentQuestLine.id),
        );
        dispatch(questSlice.actions.updateCurrentDayQuestsStack());

        if (!currentQuestLine?.quests[nextQuestIdx - 1].elixirReward) {
          navigation.push('GardenStack', {
            screen: 'Garden',
            params: {
              isPlanting: false,
              isFirstTime: false,
              isFirstTimeGarden: false,
            },
          });
        }
      }
    }
  }, [
    currentQuestIdx,
    currentQuestLine,
    dispatch,
    interruptedQuestLine?.id,
    navigation,
    questId,
  ]);

  return navigateNextQuest;
};

export const useNavigateNextQuest = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const currentQuestIdx = useAppSelector(state => state.quest.currentQuestIdx);
  const currentQuestLine = useAppSelector(
    state => state.quest.currentQuestLine,
  );
  const interruptedQuestLine = useAppSelector(
    state => state.quest.interruptedQuestLine,
  );

  const navigateNextQuest = useCallback(() => {
    if (currentQuestLine) {
      const nextQuestIdx = currentQuestIdx + 1;
      const nextQuest = currentQuestLine?.quests[nextQuestIdx];

      if (nextQuest) {
        dispatch(questSlice.actions.saveCurrentQuestIdx(nextQuestIdx));
        dispatch(questSlice.actions.pushToCurrentQuestStack(currentQuestIdx));

        navigation.push(nextQuest.type, {
          data: { ...nextQuest },
        });
      } else {
        if (interruptedQuestLine?.id === currentQuestLine.id) {
          dispatch(questSlice.actions.updateInterruptedQuestLine(null));
        }
        dispatch(
          questSlice.actions.saveCompletedQuestsId(+currentQuestLine.id),
        );
        dispatch(questSlice.actions.updateCurrentDayQuestsStack());

        if (!currentQuestLine?.quests[nextQuestIdx - 1].elixirReward) {
          navigation.push('GardenStack', {
            screen: 'Garden',
            params: {
              isPlanting: false,
              isFirstTime: false,
              isFirstTimeGarden: false,
            },
          });
        }
      }
    }
  }, [
    currentQuestIdx,
    currentQuestLine,
    dispatch,
    interruptedQuestLine?.id,
    navigation,
  ]);

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
    } else {
      dispatch(questSlice.actions.clearQuestStack());
    }
  }, [currentQuestIdx, dispatch, navigation, previousQuestIdx]);

  return navigatePrevQuest;
};

export const useParsedJSXTextNickname = ({
  text,
  textHasNickname,
  preset,
  style,
  nicknameStyle,
}: {
  text: string;
  textHasNickname: boolean;
  preset?: ExtendedTextPresets;
  style?: TextStyle;
  nicknameStyle?: TextStyle;
}): React.FC => {
  const firstPlayer = useAppSelector(
    state => state.cache.nicknames?.firstPlayer,
  ) as string;
  const secondPlayer = useAppSelector(
    state => state.cache.nicknames?.secondPlayer,
  ) as string;
  const parentNickname = useAppSelector(
    state => state.user.parent?.nickname,
  ) as string;
  const childNickname = useAppSelector(
    state => state.user.child?.nickname,
  ) as string;

  if (!textHasNickname) {
    return () => (
      <ExtendedText preset={preset} style={style}>
        {text}
      </ExtendedText>
    );
  }

  const textArray = _(text)
    .replace('firstPlayer', firstPlayer)
    .replace('secondPlayer', secondPlayer)
    .replace('grown_up', parentNickname)
    .replace('child', childNickname)
    .split('|')
    .map(value => {
      if (firstPlayer === value || secondPlayer === value) {
        return (
          <ExtendedText key={value} preset={preset} style={nicknameStyle}>
            {value}
          </ExtendedText>
        );
      } else {
        return value;
      }
    });
  return () => (
    <ExtendedText preset={preset} style={style}>
      {textArray}
    </ExtendedText>
  );
};

export const useRenderQuestHeader = (crossHeader: boolean): React.FC => {
  const goBack = useNavigatePrevQuest();

  if (crossHeader) {
    return () => (
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={goBack}
        // TODO: change to real image & function
        rightIcon={IMAGES.WHITE_BACK_ARROW}
        onRightIconPress={goBack}
      />
    );
  } else {
    return () => (
      <MainHeader leftIcon={IMAGES.WHITE_BACK_ARROW} onLeftIconPress={goBack} />
    );
  }
};
