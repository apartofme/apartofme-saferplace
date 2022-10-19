import _ from 'lodash';
import { Platform } from 'react-native';

import { IQuest, IQuestDatoCms } from '../models/IQuest';
import { IQuestLine, IQuestLineDatoCms } from '../models/IQuestLine';
import { QuestStackParams } from '../navigation/stacks/questStackNavigator';
import { ElixirKeysType, ITranslations } from './types';
import { IMAGES } from '../assets/images';
import { REGEXPS } from './regexps';

export const isAndroid = Platform.OS === 'android';

export const isIOS = Platform.OS === 'ios';

export type Nullable<T> = T | null;

/*
 Parse firebase error for example: auth/email-already-exists
 and conversion to auth.email_already_exists for use in localization
*/
export const parseFirebaseError = (error: string) => {
  return error.split('/').join('.').split('-').join('_');
};

export const getKeyFromLocalizationString = (localizationString: string) => {
  return localizationString.split('.').join('-');
};

/*
 Parse string for example: Hello |child|!
 and retern next srting array: [Hello, child, !]
*/
export const parseTextWithNickname = (text: string): string[] => {
  return _.filter(text.split('|'), Boolean);
};

/*
  Convert data with dots string to translation dictionary
*/
export const translationsToDictionary = (allTranslations: ITranslations[]) => {
  let result: Record<string, string> = {};

  _.map(allTranslations, item => {
    //*  Uncoment if-block for check localization
    // if (item.isfinaltranslation) {
    const key = item.label;
    const formattedKey = {};

    /*
    This function converts string "screens.onboarding.welcome.title" to object
    { screens: {onboarding: {welcome: {title: value}}}}
    */
    _.set(formattedKey, key, item.text);

    result = _.merge(result, formattedKey);
    // }
  });
  return result;
};

export const questsToDictionary = (
  locale: string,
  questLines: IQuestLineDatoCms[],
  quests: IQuestDatoCms[],
) => {
  const result: Record<string, Record<string, IQuestLine>> = { [locale]: {} };

  _.map(questLines, (questLine: IQuestLineDatoCms) => {
    const newQuestLine: IQuestLine = {
      title: questLine.title,
      quests: {},
    };

    result[locale][questLine.id] = newQuestLine;
  });

  _.map(quests, (quest: IQuestDatoCms) => {
    const questLineId = quest.questlineid.id;
    const tempQuest: IQuest = {
      id: quest.id,
      title: quest.title,
      description: quest.description,
      backgroundImage:
        (quest.backgroundimage?.path as keyof typeof IMAGES) ?? null,
      image: (quest.image?.path as keyof typeof IMAGES) ?? null,
      tellMoreTitle: quest.tellmoretitle ?? null,
      tellMoreDescription: quest.tellmoredescription ?? null,
      tellMoreBackground:
        (quest.tellmorebackground?.path as keyof typeof IMAGES) ?? null,
      questLineId: quest.questlineid.id,
      type: quest.typeid.slug as keyof QuestStackParams,
      sort: quest.sort,
      titleHasNickname: quest.titlehasnickname ?? null,
      crossHeader: quest.crossheader ?? null,
      duration: quest.duration ?? null,
      buttonTitle: quest.buttontitle ?? null,
      positiveNavigatesTo: quest.positivenavigatesto?.id ?? null,
      negativeNavigatesTo: quest.negativenavigatesto?.id ?? null,
      escapeMenuAlternativeNavigateTo:
        quest.escapemenualternativenavigateto?.id ?? null,
      elixirReward: quest.elixirreward,
    };

    //* ` ${quest.id}` - space is added to prevent automatic object sorting
    result[locale][questLineId].quests[` ${quest.id}`] = tempQuest;
  });

  return result;
};

// TODO: change string to animation
export const getElixirAnimationKeyByRange = (currentPosition: number) => {
  if (currentPosition === 0) {
    return ElixirKeysType.ElixirZero;
  }
  if (currentPosition <= 0.5) {
    return ElixirKeysType.ElixirZeroHalf;
  }
  if (currentPosition <= 1) {
    return ElixirKeysType.ElixirOne;
  }
  if (currentPosition <= 1.5) {
    return ElixirKeysType.ElixirOneHalf;
  }
  if (currentPosition <= 2) {
    return ElixirKeysType.ElixirTwo;
  }
  if (currentPosition <= 2.5) {
    return ElixirKeysType.ElixirTwoHalf;
  }

  return ElixirKeysType.ElixirThree;
};

export const containsFirstPlayer = (text: string) => {
  return REGEXPS.FIRST_PLAYER.test(text);
};

export const containsSecondPlayer = (text: string) => {
  return REGEXPS.SECOND_PLAYER.test(text);
};

export const hexTransparency = (color: string, transparency: number) => {
  const percent = Math.max(0, Math.min(100, transparency));
  const intValue = Math.round((percent / 100) * 255);
  const hexValue = intValue.toString(16);
  return `${color}${hexValue.padStart(2, '0').toUpperCase()}`;
};
