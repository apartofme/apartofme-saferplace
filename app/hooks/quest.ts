import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import _ from 'lodash';
import React, { useCallback } from 'react';
import { TextStyle } from 'react-native';

import { IMAGES } from '../assets';
import { ExtendedText, MainHeader } from '../components';
import { ExtendedTextPresets } from '../components/ExtendedText/ExtendedText.presets';
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
    } else {
      dispatch(questSlice.actions.clearQuestStack());
    }
  }, [currentQuestIdx, dispatch, navigation, previousQuestIdx]);

  return navigatePrevQuest;
};

export const useParseTextWithNickname = ({
  text,
  textHasNickname,
  preset,
  style,
  nicknamePreset,
  nicknameStyle,
}: {
  text: string;
  textHasNickname: boolean;
  preset?: ExtendedTextPresets;
  style?: TextStyle;
  nicknamePreset?: ExtendedTextPresets;
  nicknameStyle?: TextStyle;
}) => {
  const firstPlayer = useAppSelector(
    state => state.cache.nicknames?.firstPlayer,
  ) as string;
  const secondPlayer = useAppSelector(
    state => state.cache.nicknames?.secondPlayer,
  ) as string;

  if (!textHasNickname) {
    return React.createElement(
      ExtendedText,
      {
        preset,
        style,
      },
      text,
    );
  }

  const textArray = _(text)
    .replace('firstPlayer', firstPlayer)
    .replace('secondPlayer', secondPlayer)
    .split('|')
    .map(value => {
      if (firstPlayer === value || secondPlayer === value) {
        return React.createElement(
          ExtendedText,
          {
            key: value,
            preset: nicknamePreset ?? preset,
            style: nicknameStyle,
          },
          value,
        );
      } else {
        return value;
      }
    });
  return React.createElement(
    ExtendedText,
    {
      preset,
      style,
    },
    textArray,
  );
};

export const useRenderQuestHeader = (crossHeader: boolean) => {
  const goBack = useNavigatePrevQuest();

  if (crossHeader) {
    return React.createElement(MainHeader, {
      leftIcon: IMAGES.WHITE_BACK_ARROW,
      onLeftIconPress: goBack,
      // TODO: change to real image & function
      rightIcon: IMAGES.WHITE_BACK_ARROW,
      onRightIconPress: goBack,
    });
  } else {
    return React.createElement(MainHeader, {
      leftIcon: IMAGES.WHITE_BACK_ARROW,
      onLeftIconPress: goBack,
    });
  }
};
