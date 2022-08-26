import auth from '@react-native-firebase/auth';
import _ from 'lodash';

import { parseFairbaseError } from '../../utils';
import { IFirebaseAuthError, IFirebaseAuthResponse } from './types';

export const firebaseRegisterUser = async (email: string, password: string) => {
  const registerUserResponse: IFirebaseAuthResponse = {
    user: null,
    error: null,
  };

  try {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    registerUserResponse.user = _.cloneDeep(response.user);
  } catch (error) {
    console.log(typeof error);
    registerUserResponse.error = parseFairbaseError(
      (error as IFirebaseAuthError).code,
    );
  }
  return registerUserResponse;
};

export const firebaseLoginUser = async (email: string, password: string) => {
  const loginUserResponse: IFirebaseAuthResponse = {
    user: null,
    error: null,
  };
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    loginUserResponse.user = _.cloneDeep(response.user);
  } catch (error) {
    loginUserResponse.error = parseFairbaseError(
      (error as IFirebaseAuthError).code,
    );
  }
  return loginUserResponse;
};

export const firebaseLogout = async () => {
  await auth().signOut();
};
