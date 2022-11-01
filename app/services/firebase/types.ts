import { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { IChild } from '../../models/IChild';
import { IParent } from '../../models/IParent';

import { Nullable } from '../../utils';
import {
  IElixirProgress,
  IPlantProgress,
  IQuestProgress,
} from '../../utils/types';

export enum FirestoreCollections {
  Children = 'children',
  Parents = 'parents',
  Progress = 'progress',
  // TODO: remove
  NewProgress = 'new_progress',
}
export interface IFirestoreErrorResponse {
  error: Nullable<string>;
}

export interface IFirebaseAuthResponse {
  user: Nullable<FirebaseAuthTypes.User>;
  error: Nullable<string>;
}

export interface IFirebaseAuthError {
  code: string;
}

export enum FirebaseAnalyticsEventsType {
  ButtonPress = 'buttonPress',
}
export interface IFirestoreParent {
  _data: IParent;
}

export interface IFirestoreChild {
  _data: IChild;
}

export interface IFirestoreChildren {
  _data: IChild[];
}

export interface IFirestoreUserProgress {
  _data: {
    quests: IQuestProgress;
    plants: IPlantProgress;
    elixir: IElixirProgress;
  };
}
