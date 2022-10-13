import firestore from '@react-native-firebase/firestore';

import { IUser } from '../../models/IUser';
import { IShortSignUpData } from '../../redux/types';
import { getCurrentUser } from './auth';
import { getDeviceToken } from './notifications';
import { IFirebaseUpdateUserResponse } from './types';

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
