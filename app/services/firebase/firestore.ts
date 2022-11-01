import firestore from '@react-native-firebase/firestore';
import moment from 'moment';

import {
  INITIAL_ELIXIR,
  INITIAL_PLANTS_STACK,
  INITIAL_PLANT_AREA,
  INITIAL_QUESTS,
} from '../../constants/progress';
import {
  IElixirProgress,
  IPlantProgress,
  IQuestProgress,
} from '../../utils/types';
import { getCurrentUser } from './auth';
import { FirestoreCollections } from './types';
import { IFirestoreErrorResponse } from './types';
import { IChild } from '../../models/IChild';
import { IParent } from '../../models/IParent';
import { getDeviceToken } from './notifications';

export const firestoreSaveDeviceToken = async () => {
  const userId = getCurrentUser();
  const token = await getDeviceToken();

  await firestore()
    .collection(FirestoreCollections.Parents)
    .doc(userId)
    .update({
      tokens: firestore.FieldValue.arrayUnion(token),
    });
};

export const firestoreCreateParent = async (parent: IParent) => {
  const token = await getDeviceToken();

  await firestore()
    .collection(FirestoreCollections.Parents)
    .doc(parent.uid)
    .set({ ...parent, tokens: firestore.FieldValue.arrayUnion(token) });
};

export const firestoreCreateChild = async (child: IChild) => {
  const FirestoreCreateChildResponse: IFirestoreErrorResponse = {
    error: null,
  };
  try {
    await firestore()
      .collection(FirestoreCollections.Children)
      .doc(child.uid)
      .set(child);
  } catch {
    FirestoreCreateChildResponse.error = 'Create child error';
  }
  return FirestoreCreateChildResponse;
};

export const firestoreCreateChildProgress = async (childId: string) => {
  const FirestoreCreateUserProgressResponse: IFirestoreErrorResponse = {
    error: null,
  };

  const nowSeconds = moment().format('X');
  try {
    await firestore()
      .collection(FirestoreCollections.NewProgress)
      .doc(childId)
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

export const firestoreUpdateChildProgress = async (
  childId: string,
  directory: string,
  values: IElixirProgress | IQuestProgress | IPlantProgress,
) => {
  const FirestoreUpdateChildProgressResponse: IFirestoreErrorResponse = {
    error: null,
  };

  const childDocument = await firestore()
    .collection(FirestoreCollections.NewProgress)
    .doc(childId);

  try {
    childDocument.update({ [directory]: values });
  } catch {
    FirestoreUpdateChildProgressResponse.error = 'firestoreUpdateUserProgress';
  }
  return FirestoreUpdateChildProgressResponse;
};

export const firestoreGetChildProgress = async (childId: string) => {
  const FirestoreGetChildProgressResponse: IFirestoreErrorResponse = {
    error: null,
  };
  try {
    await firestore()
      .collection(FirestoreCollections.NewProgress)
      .doc(childId)
      .get();
  } catch {
    FirestoreGetChildProgressResponse.error = 'firestoreGetChildProgress';
  }
  return FirestoreGetChildProgressResponse;
};

export const firestoreUpdateUser = async (
  collection: FirestoreCollections.Children | FirestoreCollections.Parents,
  data: IParent | IChild,
) => {
  const updateUserResponse: IFirestoreErrorResponse = {
    error: null,
  };

  await firestore()
    .collection(collection)
    .doc(data.uid)
    .update(data)
    .catch(error => (updateUserResponse.error = error));

  return updateUserResponse;
};

export const firestoreGetParent = async () => {
  const parentId = getCurrentUser();
  return await firestore()
    .collection(FirestoreCollections.Parents)
    .doc(parentId)
    .get();
};

export const firestoreGetParentChildren = async () => {
  const parentId = getCurrentUser();
  return await firestore()
    .collection(FirestoreCollections.Children)
    .where('parentId', '==', parentId)
    .get();
};

export const firestoreGetChildByUid = async (childId: string) => {
  return await firestore()
    .collection(FirestoreCollections.Children)
    .doc(childId)
    .get();
};
