import auth from '@react-native-firebase/auth';
import _ from 'lodash';

import { parseFairbaseError } from '../../utils';
import { IFirebaseAuthResponse } from './types';

export const registerUser = async (email: string, password: string) => {
  const registerUserResponse: IFirebaseAuthResponse = {
    user: null,
    error: null,
  };
  await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(result => {
      registerUserResponse.user = _.cloneDeep(result.user);
    })
    .catch(error => {
      registerUserResponse.error = parseFairbaseError(error.code);
    });
  return registerUserResponse;
};

export const loginUser = async (email: string, password: string) => {
  const loginUserResponse: IFirebaseAuthResponse = {
    user: null,
    error: null,
  };
  await auth()
    .signInWithEmailAndPassword(email, password)
    .then(result => {
      loginUserResponse.user = _.cloneDeep(result.user);
    })
    .catch(error => {
      loginUserResponse.error = parseFairbaseError(error.code);
    });
  return loginUserResponse;
};

export const logout = async () => {
  await auth().signOut();
};
