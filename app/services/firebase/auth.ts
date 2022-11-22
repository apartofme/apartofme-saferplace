import auth, { firebase } from '@react-native-firebase/auth';

import { store } from '../../redux';
import { parseFirebaseError } from '../../utils';
import { AvatarsKeys } from '../../utils/types';
import { firestoreCreateParent } from './firestore';
import {
  IFirebaseAuthError,
  IFirebaseAuthResponse,
  IFirestoreErrorResponse,
} from './types';

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
    await auth().currentUser?.sendEmailVerification();
  } catch (error) {
    registerUserResponse.error = parseFirebaseError(
      (error as IFirebaseAuthError).code,
    );
  }
  const cacheParent = store.getState().cache.auth.parent;
  if (!registerUserResponse.error) {
    await firestoreCreateParent({
      email: email,
      uid: registerUserResponse.user?.uid as string,
      nickname: cacheParent?.nickname as string,
      avatar: cacheParent?.avatar as AvatarsKeys,
      emailVerified: !!registerUserResponse.user?.emailVerified,
    });
  }

  return registerUserResponse;
};

export const firebasePasswordReset = async (email: string) => {
  const PasswordResetResponse: IFirestoreErrorResponse = {
    error: null,
  };
  try {
    await auth().sendPasswordResetEmail(email);
  } catch (error) {
    PasswordResetResponse.error = parseFirebaseError(
      (error as IFirebaseAuthError).code,
    );
  }
  return PasswordResetResponse;
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

export const firebaseChangePassword = async (
  currentPassword: string,
  newPassword: string,
) => {
  const ChangePasswordResponse: IFirestoreErrorResponse = {
    error: null,
  };

  const emailCred = firebase.auth.EmailAuthProvider.credential(
    auth().currentUser?.email as string,
    currentPassword,
  );

  await auth()
    .currentUser?.reauthenticateWithCredential(emailCred)
    .then(() => {
      return auth()
        .currentUser?.updatePassword(newPassword)
        .catch(error => {
          ChangePasswordResponse.error = parseFirebaseError(error.code);
        });
    })
    .catch(error => {
      ChangePasswordResponse.error = parseFirebaseError(error.code);
    });
  return ChangePasswordResponse;
};

export const firebaseDeleteAccount = async (password: string) => {
  const changePasswordResponse: IFirestoreErrorResponse = {
    error: null,
  };
  const user = auth().currentUser;

  const emailCred = firebase.auth.EmailAuthProvider.credential(
    user?.email as string,
    password,
  );

  await user
    ?.reauthenticateWithCredential(emailCred)
    .then(() =>
      user?.delete().catch(error => (changePasswordResponse.error = error)),
    )
    .catch(() => {
      changePasswordResponse.error = 'wrong password';
    });

  return changePasswordResponse;
};

export const firebaseLogout = async () => {
  await auth().signOut();
};
