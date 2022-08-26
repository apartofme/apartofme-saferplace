import { Platform } from 'react-native';

export const isAndroid = Platform.OS === 'android';

export const isIOS = Platform.OS === 'ios';

export type Nullable<T> = T | null;

/*
 Parse fairbase error for example: auth/email-already-exists
 and conversion to auth.email_already_exists for use in localization
*/
export const parseFairbaseError = (error: string) => {
  return error.split('/').join('.').split('-').join('_');
};
