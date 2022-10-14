import firestore from '@react-native-firebase/firestore';
import moment from 'moment';

import {
  INITIAL_ELIXIR,
  INITIAL_PLANTS_STACK,
  INITIAL_PLANT_AREA,
  INITIAL_QUESTS,
} from '../../constants/progress';
import { IUser } from '../../models/IUser';
import { IShortSignUpData } from '../../redux/types';
import {
  IElixirProgress,
  IPlantProgress,
  IQuestProgress,
} from '../../utils/types';

import { getCurrentUser } from './auth';
import { getDeviceToken } from './notifications';
import { IFirebaseUpdateUserResponse } from './types';
import { IFirestoreErrorResponse } from './types';

export const firestoreCreateUser = async () => {
  const userId = getCurrentUser();
  const token = await getDeviceToken();

  await firestore()
    .collection('users')
    .doc(userId)
    .set({
      tokens: firestore.FieldValue.arrayUnion(token),
    });
};

export const firestoreCreateUserProgress = async () => {
  const FirestoreCreateUserProgressResponse: IFirestoreErrorResponse = {
    error: null,
  };
  const userId = getCurrentUser();
  const nowSeconds = moment().format('X');
  try {
    await firestore()
      .collection('progress')
      .doc(userId)
      .set({
        quests: { ...INITIAL_QUESTS, lastDayUpdate: nowSeconds },
        plants: {
          plantArea: INITIAL_PLANT_AREA,
          plantsStack: INITIAL_PLANTS_STACK,
        },
        elixir: INITIAL_ELIXIR,
      });
  } catch {
    FirestoreCreateUserProgressResponse.error =
      'firestoreCreateUserProgressError';
  }
  return FirestoreCreateUserProgressResponse;
};

export const firestoreUpdateUserProgress = async (
  directory: string,
  values: IElixirProgress | IQuestProgress | IPlantProgress,
) => {
  const FirestoreUpdateUserProgressResponse: IFirestoreErrorResponse = {
    error: null,
  };
  const userId = getCurrentUser();
  const userDocument = firestore().collection('progress').doc(userId);

  try {
    userDocument.update({ [directory]: values });
  } catch (e) {
    FirestoreUpdateUserProgressResponse.error = 'firestoreUpdateUserProgress';
  }
  return FirestoreUpdateUserProgressResponse;
};

export const firestoreGetUserProgress = async () => {
  const userId = getCurrentUser();
  return await firestore().collection('progress').doc(userId).get();
};

export const firestoreUpdateUser = async (data: {
  parent?: Partial<IUser>;
  child?: Partial<IShortSignUpData>;
}) => {
  const updateUserResponse: IFirebaseUpdateUserResponse = {
    error: null,
  };
  const userId = getCurrentUser();
  const userDocument = firestore().collection('users').doc(userId);

  if (data.child) {
    userDocument
      .update({ child: data.child })
      .catch(error => (updateUserResponse.error = error));
  }

  if (data.parent) {
    userDocument
      .update({ parent: data.parent })
      .catch(error => (updateUserResponse.error = error));
  }
  return updateUserResponse;
};

export const firestoreGetUser = async () => {
  const userId = getCurrentUser();
  return await firestore().collection('users').doc(userId).get();
};

export const firestoreSaveDeviceToken = async () => {
  const userId = getCurrentUser();
  const token = await getDeviceToken();

  await firestore()
    .collection('users')
    .doc(userId)
    .update({
      tokens: firestore.FieldValue.arrayUnion(token),
    });
};
