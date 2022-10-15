import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback } from 'react';
import { TextStyle } from 'react-native';
import _ from 'lodash';

import { IMAGES } from '../assets';
import { ExtendedText, ExtendedTextPresets, MainHeader } from '../components';
import { questSlice } from '../redux/slices';
import { containsFirstPlayer, containsSecondPlayer, Nullable } from '../utils';
import { generalStyles } from '../utils/styles';
import { useAppDispatch, useAppSelector } from './redux';
import {
  CHILD,
  FIRST_PLAYER,
  GROWN_UP,
  KINDNESS_INPUT,
  PLAYER_EMOTION,
  SECOND_PLAYER,
  TROUBLESOME_SPIRIT_QUESTION,
  TRY_SOMETHING_DESCRIPTION,
  TRY_SOMETHING_TITLE,
} from '../constants/quest';

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
  isChild,
  preset,
  style,
  variableStyle,
}: {
  text: string;
  textHasNickname: boolean;
  isChild?: boolean;
  preset?: ExtendedTextPresets;
  style?: TextStyle;
  variableStyle?: TextStyle;
}): React.FC => {
  const firstPlayer =
    useAppSelector(state => state.cache.nicknames?.firstPlayer) ?? '';
  const secondPlayer =
    useAppSelector(state => state.cache.nicknames?.secondPlayer) ?? '';
  const parentNickname =
    useAppSelector(state => state.user.parent?.nickname) ?? '';
  const childNickname =
    useAppSelector(state => state.user.child?.nickname) ?? '';
  const playerEmotion =
    useAppSelector(state => state.cache.emotions.selected) ?? '';
  const troublesomeSpiritQuestion =
    useAppSelector(state => state.cache.troublesomeSpiritQuestionsItem) ?? '';
  const childTrySomethingTitle =
    useAppSelector(state => state.cache.childTrySomethingItem?.title) ?? '';
  const childTrySomethingDescription =
    useAppSelector(state => state.cache.childTrySomethingItem?.description) ??
    '';
  const parentTrySomethingTitle =
    useAppSelector(state => state.cache.parentTrySomethingItem?.title) ?? '';
  const parentTrySomethingDescription =
    useAppSelector(state => state.cache.parentTrySomethingItem?.description) ??
    '';
  const childKindness = useAppSelector(state => state.cache.childKindnessItem);
  const parentKindness = useAppSelector(
    state => state.cache.parentKindnessItem,
  );
  const isChildMove = useIsChildMove(text);

  if (!textHasNickname) {
    return () => (
      <ExtendedText preset={preset} style={style}>
        {text}
      </ExtendedText>
    );
  }

  if (isChild === undefined) {
    isChild = isChildMove;
  }

  const parseBoldText = (boldText: string) => (
    <ExtendedText key={boldText} preset={preset} style={generalStyles.boldText}>
      {boldText.replace('*', '')}
    </ExtendedText>
  );

  const parseVariableText = (variableText: string) => (
    <ExtendedText key={variableText} preset={preset} style={variableStyle}>
      {variableText.replace('$', '')}
    </ExtendedText>
  );

  const parseTrySomethingTitle = () => {
    const correctTrySomethingTitle = isChild
      ? childTrySomethingTitle
      : parentTrySomethingTitle;

    return (
      <ExtendedText
        key={TRY_SOMETHING_TITLE}
        preset={preset}
        style={variableStyle}>
        {correctTrySomethingTitle}
      </ExtendedText>
    );
  };

  const parseTrySomethingDescription = (trySomethingDescription: string) => {
    const correctTrySomethingDescription = isChild
      ? childTrySomethingDescription
      : parentTrySomethingDescription;

    return (
      <ExtendedText
        key={TRY_SOMETHING_DESCRIPTION}
        preset={preset}
        style={trySomethingDescription.startsWith('$') ? variableStyle : null}>
        {correctTrySomethingDescription}
      </ExtendedText>
    );
  };

  const parseKindnessInput = () => {
    const correctKindnessInput = isChild ? childKindness : parentKindness;

    return (
      <ExtendedText key={KINDNESS_INPUT} preset={preset} style={variableStyle}>
        {correctKindnessInput}
      </ExtendedText>
    );
  };

  const textArray = _(text)
    .replace(FIRST_PLAYER, `$${firstPlayer}`)
    .replace(SECOND_PLAYER, `$${secondPlayer}`)
    .replace(GROWN_UP, `$${parentNickname}`)
    .replace(CHILD, `$${childNickname}`)
    .replace(TROUBLESOME_SPIRIT_QUESTION, `$${troublesomeSpiritQuestion}`)
    .replace(PLAYER_EMOTION, playerEmotion)
    .split('|')
    .map(value => {
      if (_.includes(value, TRY_SOMETHING_TITLE)) {
        return parseTrySomethingTitle();
      }
      if (_.includes(value, TRY_SOMETHING_DESCRIPTION)) {
        return parseTrySomethingDescription(value);
      }
      if (value === KINDNESS_INPUT) {
        return parseKindnessInput();
      }
      if (value.startsWith('$')) {
        return parseVariableText(value);
      }
      if (value.startsWith('*')) {
        return parseBoldText(value);
      }

      return value;
    });
  return () => (
    <ExtendedText preset={preset} style={style}>
      {textArray}
    </ExtendedText>
  );
};

export const useRenderQuestHeader = (data: {
  crossHeader: boolean;
  escapeMenuAlternativeNavigateTo?: Nullable<string>;
}): React.FC => {
  const goBack = useNavigatePrevQuest();

  const navigation = useNavigation();

  const onRightIconPress = useCallback(() => {
    navigation.navigate('EscapeMenu', {
      data: {
        escapeMenuAlternativeNavigateTo: data.escapeMenuAlternativeNavigateTo,
      },
    });
  }, [data.escapeMenuAlternativeNavigateTo, navigation]);

  if (data.crossHeader) {
    return () => (
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={goBack}
        // TODO: change to real image & function
        rightIcon={IMAGES.WHITE_BACK_ARROW}
        onRightIconPress={onRightIconPress}
      />
    );
  } else {
    return () => (
      <MainHeader leftIcon={IMAGES.WHITE_BACK_ARROW} onLeftIconPress={goBack} />
    );
  }
};

export const useIsChildMove = (text: string): boolean => {
  const childNickname = useAppSelector(state => state.user.child?.nickname);
  const firstPlayer = useAppSelector(
    state => state.cache.nicknames?.firstPlayer,
  );
  const secondPlayer = useAppSelector(
    state => state.cache.nicknames?.secondPlayer,
  );

  const isChild =
    (containsFirstPlayer(text) && firstPlayer === childNickname) ||
    (containsSecondPlayer(text) && secondPlayer === childNickname);

  return isChild;
};
