import firestore from '@react-native-firebase/firestore';

import { IUser } from '../../models/IUser';
import { IShortSignUpData } from '../../redux/types';
import { getCurrentUser } from './auth';
import { getDeviceToken } from './notifications';

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
  const userId = getCurrentUser();
  const userDocument = firestore().collection('users').doc(userId);

  if (data.child) {
    userDocument.update({ child: data.child });
  }

  if (data.parent) {
    userDocument.update({ parent: data.parent });
  }
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
