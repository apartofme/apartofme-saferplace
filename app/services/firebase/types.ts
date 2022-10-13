import { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { IUser } from '../../models/IUser';
import { IShortSignUpData } from '../../redux/types';
import { Nullable } from '../../utils';

export interface IFirebaseAuthResponse {
  user: Nullable<FirebaseAuthTypes.User>;
  error: Nullable<string>;
}

export interface IFirebaseChangePasswordResponse {
  error: Nullable<string>;
}

export type IFirebaseUpdateUserResponse = {
  error: Nullable<string>;
};

export type IFirebaseSaveChildResponse = {
  error: Nullable<string>;
};

export interface IFirebaseAuthError {
  code: string;
}

export enum FirebaseAnalyticsEventsType {
  ButtonPress = 'buttonPress',
}
export interface IFirestoreUser {
  _data: {
    tokens: string[];
    parent: IUser;
    child: IShortSignUpData;
  };
}
