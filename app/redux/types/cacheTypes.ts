import { ImageSourcePropType } from 'react-native';

export interface ISignUpData {
  email?: string;
  password?: string;
  nickname?: string;
  avatar?: ImageSourcePropType;
}

export type IShortSignUpData = Pick<ISignUpData, 'avatar' | 'nickname'>;

export interface ISignUpDataPayload {
  payload: Partial<ISignUpData>;
}

export interface IShortSignUpDataPayload {
  payload: Partial<IShortSignUpData>;
}
