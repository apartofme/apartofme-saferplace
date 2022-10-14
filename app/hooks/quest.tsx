import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import _ from 'lodash';
import React, { useCallback } from 'react';
import { TextStyle } from 'react-native';

import { IMAGES } from '../assets';
import { ExtendedText, ExtendedTextPresets, MainHeader } from '../components';
import { questSlice } from '../redux/slices';
import { Nullable } from '../utils';
import { generalStyles } from '../utils/styles';
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

  if (!textHasNickname) {
    return () => (
      <ExtendedText preset={preset} style={style}>
        {text}
      </ExtendedText>
    );
  }

  const parseBoldText = (boldText: string) => {
    return (
      <ExtendedText
        key={boldText}
        preset={preset}
        style={generalStyles.boldText}>
        {boldText.replace('*', '')}
      </ExtendedText>
    );
  };

  const textArray = _(text)
    .replace('firstPlayer', firstPlayer)
    .replace('secondPlayer', secondPlayer)
    .replace('grown_up', parentNickname)
    .replace('child', childNickname)
    .replace('playerEmotion', playerEmotion)
    .split('|')
    .map(value => {
      if (firstPlayer === value || secondPlayer === value) {
        return (
          <ExtendedText key={value} preset={preset} style={nicknameStyle}>
            {value}
          </ExtendedText>
        );
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
