import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback } from 'react';
import { TextStyle } from 'react-native';
import _ from 'lodash';

import { ExtendedText, ExtendedTextPresets, MainHeader } from '../components';
import { questSlice } from '../redux/slices';
import { containsFirstPlayer, containsSecondPlayer, Nullable } from '../utils';
import { generalStyles } from '../utils/styles';
import { useAppDispatch, useAppSelector } from './redux';
import { DatoCMSTextVariables } from '../constants/quest';
import { SVG } from '../assets/svg';

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
  const isCurrentQuestCompleted = useAppSelector(
    state => state.quest.isCurrentQuestCompleted,
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
        if (isCurrentQuestCompleted) {
          dispatch(questSlice.actions.setIsCurrentQuestCompleted(false));
          navigation.push('GardenStack', {
            screen: 'CompletedCharmEnd',
          });
        }

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
    isCurrentQuestCompleted,
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
  const isCurrentQuestCompleted = useAppSelector(
    state => state.quest.isCurrentQuestCompleted,
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
        if (isCurrentQuestCompleted) {
          dispatch(questSlice.actions.setIsCurrentQuestCompleted(false));
          navigation.push('GardenStack', {
            screen: 'CompletedCharmEnd',
          });
        }
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
    isCurrentQuestCompleted,
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
  preset = 'secondary-text',
  style,
  variableStyle = generalStyles.primaryOrange,
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
  const childTrySomethingFirstItem = useAppSelector(
    state => state.cache.childTrySomethingFirstItem,
  );
  const parentTrySomethingFirstItem = useAppSelector(
    state => state.cache.parentTrySomethingFirstItem,
  );
  const childTrySomethingSecondItem = useAppSelector(
    state => state.cache.childTrySomethingSecondItem,
  );
  const parentTrySomethingSecondItem = useAppSelector(
    state => state.cache.parentTrySomethingSecondItem,
  );
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

  if (_.isUndefined(isChild)) {
    isChild = isChildMove;
  }

  const renderBoldText = (boldText: string) => (
    <ExtendedText key={boldText} preset={preset} style={generalStyles.boldText}>
      {boldText.replace('*', '')}
    </ExtendedText>
  );

  const renderVariableText = (variableText: string) => (
    <ExtendedText key={variableText} preset={preset} style={variableStyle}>
      {variableText.replace('$', '')}
    </ExtendedText>
  );

  const renderTrySomethingFirstTitle = () => {
    const correctTrySomethingTitle = isChild
      ? childTrySomethingFirstItem?.title
      : parentTrySomethingFirstItem?.title;

    return (
      <ExtendedText
        key={DatoCMSTextVariables.TrySomethingFirstTitle}
        preset={preset}
        style={variableStyle}>
        {correctTrySomethingTitle}
      </ExtendedText>
    );
  };

  const renderTrySomethingFirstDescription = (
    trySomethingDescription: string,
  ) => {
    const correctTrySomethingDescription = isChild
      ? childTrySomethingFirstItem?.description
      : parentTrySomethingFirstItem?.description;

    return (
      <ExtendedText
        key={DatoCMSTextVariables.TrySomethingFirstDescription}
        preset={preset}
        style={trySomethingDescription.startsWith('$') ? variableStyle : null}>
        {correctTrySomethingDescription}
      </ExtendedText>
    );
  };

  const renderTrySomethingSecondTitle = () => {
    const correctTrySomethingTitle = isChild
      ? childTrySomethingSecondItem?.title
      : parentTrySomethingSecondItem?.title;

    return (
      <ExtendedText
        key={DatoCMSTextVariables.TrySomethingSecondTitle}
        preset={preset}
        style={variableStyle}>
        {correctTrySomethingTitle}
      </ExtendedText>
    );
  };

  const renderTrySomethingSecondDescription = (
    trySomethingDescription: string,
  ) => {
    const correctTrySomethingDescription = isChild
      ? childTrySomethingSecondItem?.description
      : parentTrySomethingSecondItem?.description;

    return (
      <ExtendedText
        key={DatoCMSTextVariables.TrySomethingSecondDescription}
        preset={preset}
        style={trySomethingDescription.startsWith('$') ? variableStyle : null}>
        {correctTrySomethingDescription}
      </ExtendedText>
    );
  };

  const renderKindnessInput = () => {
    const correctKindnessInput = isChild ? childKindness : parentKindness;

    return (
      <ExtendedText
        key={DatoCMSTextVariables.KindnessInput}
        preset={preset}
        style={variableStyle}>
        {correctKindnessInput}
      </ExtendedText>
    );
  };

  const textArray = _(text)
    .replace(DatoCMSTextVariables.FirstPlayer, `$${firstPlayer}`)
    .replace(DatoCMSTextVariables.SecondPlayer, `$${secondPlayer}`)
    .replace(DatoCMSTextVariables.GrownUp, `$${parentNickname}`)
    .replace(DatoCMSTextVariables.Child, `$${childNickname}`)
    .replace(
      DatoCMSTextVariables.TroublesomeSpiritQuestion,
      `$${troublesomeSpiritQuestion}`,
    )
    .replace(DatoCMSTextVariables.PlayerEmotion, playerEmotion)
    .split('|')
    .map(value => {
      if (_.includes(value, DatoCMSTextVariables.TrySomethingFirstTitle)) {
        return renderTrySomethingFirstTitle();
      }
      if (
        _.includes(value, DatoCMSTextVariables.TrySomethingFirstDescription)
      ) {
        return renderTrySomethingFirstDescription(value);
      }
      if (_.includes(value, DatoCMSTextVariables.TrySomethingSecondTitle)) {
        return renderTrySomethingSecondTitle();
      }
      if (
        _.includes(value, DatoCMSTextVariables.TrySomethingSecondDescription)
      ) {
        return renderTrySomethingSecondDescription(value);
      }
      if (value === DatoCMSTextVariables.KindnessInput) {
        return renderKindnessInput();
      }
      if (value.startsWith('$')) {
        return renderVariableText(value);
      }
      if (value.startsWith('*')) {
        return renderBoldText(value);
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

  const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;
  const WhiteCrossIcon = SVG.WhiteCrossIcon;

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
        leftIcon={<WhiteBackArrowIcon />}
        onLeftIconPress={goBack}
        rightIcon={<WhiteCrossIcon />}
        onRightIconPress={onRightIconPress}
      />
    );
  } else {
    return () => (
      <MainHeader leftIcon={<WhiteBackArrowIcon />} onLeftIconPress={goBack} />
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
