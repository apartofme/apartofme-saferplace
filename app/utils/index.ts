import _ from 'lodash';
import { Platform } from 'react-native';

import {
  NICKNAME_INSERT_SYMBOL_END,
  NICKNAME_INSERT_SYMBOL_START,
} from '../constants/translations';
import {
  IParseTextWithNicknameResult,
  ITranslations,
  NicknameType,
} from './types';

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
 Parse string for example: Hello [child]!
 and retern next srting array: [Hello, child, !]
*/
export const parseTextWithNickname = (
  text: string,
): IParseTextWithNicknameResult => {
  const result = [];

  const startNicknameTypeIndex = _.indexOf(text, NICKNAME_INSERT_SYMBOL_START);
  const endNicknameTypeIndex = _.indexOf(text, NICKNAME_INSERT_SYMBOL_END);
  const nicknameType: NicknameType =
    text
      .substring(startNicknameTypeIndex + 1, endNicknameTypeIndex)
      .toLocaleLowerCase() === NicknameType.Child
      ? NicknameType.Child
      : NicknameType.Parent;

  if (startNicknameTypeIndex) {
    result.push(text.substring(0, startNicknameTypeIndex));
  }
  result.push(nicknameType);
  if (endNicknameTypeIndex !== text.length - 1) {
    result.push(text.substring(endNicknameTypeIndex + 1));
  }
  return {
    nicknameType: nicknameType,
    textArray: result,
  };
};

/*
  Convert data with dots string to translation dictionary
*/
export const translationsToDictionary = (data: {
  data: { allTranslations: ITranslations[] };
}) => {
  let result: Record<string, string> = {};

  _.map(data.data.allTranslations, item => {
    const key = item.label;
    const formattedKey = {};

    /*
    This function converts string "screens.onboarding.welcome.title" to object
    { screens: {onboarding: {welcome: {title: value}}}}
    */
    _.set(formattedKey, key, item.text);

    result = _.merge(result, formattedKey);
  });

  return result;
};
