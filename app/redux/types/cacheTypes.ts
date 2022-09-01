import { ImageOrVideo } from 'react-native-image-crop-picker';

import { Nullable } from '../../utils';

export interface ISignUpData {
  email?: string;
  password?: string;
  nickname?: string;
  avatar?: Nullable<ImageOrVideo>;
}

export interface ISignUpDataPayload {
  payload: Partial<ISignUpData>;
}
