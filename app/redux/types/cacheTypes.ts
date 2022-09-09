import { ImageSourcePropType } from 'react-native';

export interface ISignUpData {
  email?: string;
  password?: string;
  nickname?: string;
  avatar?: ImageSourcePropType;
}

export interface IShortSignUpData {
  nickname?: string;
  age?: string;
  avatar?: ImageSourcePropType;
}

export interface ISignUpDataPayload {
  payload: ISignUpData;
}

export interface IShortSignUpDataPayload {
  payload: IShortSignUpData;
}
