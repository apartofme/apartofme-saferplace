import { Platform } from 'react-native';

export const isAndroid = Platform.OS === 'android';

export const isIOS = Platform.OS === 'ios';

export type Nullable<T> = T | null;

export const parseFairbaseError = (error: string) => {
  return error.split('/').join('.').split('-').join('_');
};
