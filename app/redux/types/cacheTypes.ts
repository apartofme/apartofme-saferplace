import { ImageSourcePropType } from 'react-native';

export interface ISignUpData {
  email?: string;
  password?: string;
  nickname?: string;
  avatar?: ImageSourcePropType;
}

export interface ISignUpDataPayload {
  payload: Partial<ISignUpData>;
}
