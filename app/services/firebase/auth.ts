import auth from '@react-native-firebase/auth';

import { parseFirebaseError } from '../../utils';
import { firestoreCreateUser } from './firestore';
import { IFirebaseAuthError, IFirebaseAuthResponse } from './types';

export const getCurrentUser = () => auth().currentUser?.uid;

export const firebaseRegisterUser = async (email: string, password: string) => {
  const registerUserResponse: IFirebaseAuthResponse = {
    user: null,
    error: null,
  };
  try {
    registerUserResponse.user = (
      await auth().createUserWithEmailAndPassword(email, password)
    ).user;
  } catch (error) {
    registerUserResponse.error = parseFirebaseError(
      (error as IFirebaseAuthError).code,
    );
  }
  await firestoreCreateUser();
  return registerUserResponse;
};

export const firebasePasswordReset = async (email: string) => {
  try {
    await auth().sendPasswordResetEmail(email);
    return null;
  } catch (error) {
    return parseFirebaseError((error as IFirebaseAuthError).code);
  }
};

export const firebaseLoginUser = async (email: string, password: string) => {
  const loginUserResponse: IFirebaseAuthResponse = {
    user: null,
    error: null,
  };
  try {
    loginUserResponse.user = (
      await auth().signInWithEmailAndPassword(email, password)
    ).user;
  } catch (error) {
    loginUserResponse.error = parseFirebaseError(
      (error as IFirebaseAuthError).code,
    );
  }
  return loginUserResponse;
};

export const firebaseLogout = async () => {
  await auth().signOut();
};
