import { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { IUser } from '../../models/IUser';
import { IShortSignUpData } from '../../redux/types';
import { Nullable } from '../../utils';
import {
  IElixirProgress,
  IPlantProgress,
  IQuestProgress,
} from '../../utils/types';

export interface IFirebaseAuthResponse {
  user: Nullable<FirebaseAuthTypes.User>;
  error: Nullable<string>;
}

export interface IFirebaseChangePasswordResponse {
  error: Nullable<string>;
}

export interface IFirebaseDeleteAccountResponse {
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
  ButtonPress = 'button_press',
  CharmStarted = 'charm_started',
  CharmEnded = 'charm_ended',
  PreCharmDailyCheckIn = 'pre_charm_daily_check_in',
  PostCharmDailyCheckIn = 'post_charm_check_in',
  Feedback = 'feedback',
}

export interface IFirestoreUser {
  _data: {
    tokens: string[];
    parent: IUser;
    child: IShortSignUpData;
  };
}

export interface IFirestoreUserProgress {
  _data: {
    quests: IQuestProgress;
    plants: IPlantProgress;
    elixir: IElixirProgress;
  };
}

export interface IFirestoreErrorResponse {
  error: Nullable<string>;
}
