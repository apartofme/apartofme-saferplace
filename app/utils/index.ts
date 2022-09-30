import _ from 'lodash';
import { Platform } from 'react-native';

import { IQuestDatoCms } from '../models/IQuest';
import { IQuestLine, IQuestLineDatoCms } from '../models/IQuestLine';
import { QuestStackParams } from '../navigation/stacks/questStackNavigator';
import { ITranslations } from './types';
import { IMAGES } from '../assets/images';

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
    const images = _.map(quest.images, image => {
      return image.path;
    });

    const tempQuest = {
      id: quest.id,
      title: quest.title,
      description: quest.description,
      backgroundImage:
        (quest.backgroundimage?.path as keyof typeof IMAGES) ?? null,
      images: images as (keyof typeof IMAGES)[],
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
      navigatesto: quest.navigatesto?.map(item => item.id) ?? null,
    };

    result[locale][questLineId].quests[quest.id] = tempQuest;
  });

  return result;
};
