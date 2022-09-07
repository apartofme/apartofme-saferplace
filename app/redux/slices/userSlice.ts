import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  IAuthUserActionPayload,
  IAuthUserSuccessActionPayload,
  IResetPasswordActionPayload,
} from '../types';
import { Nullable } from '../../utils';
import { IUser } from '../../models/IUser';

interface IUserState {
  user: Nullable<IUser>;
}

export const INITIAL_STATE: IUserState = {
  user: null,
};

/* eslint-disable @typescript-eslint/no-unused-vars */
export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    loginUser(state, action: IAuthUserActionPayload) {},
    loginUserSuccess(state, { payload: user }: IAuthUserSuccessActionPayload) {
      state.user = user;
    },
    loginUserError(state, action: PayloadAction<string>) {},

    registerUser() {},
    registerUserSuccess(
      state,
      { payload: user }: IAuthUserSuccessActionPayload,
    ) {
      state.user = user;
    },
    registerUserError(state, action: PayloadAction<string>) {},

    resetPassword(state, action: IResetPasswordActionPayload) {},
    resetPasswordSuccess() {},
    resetPasswordError(state, action: PayloadAction<string>) {},

    logout(state) {
      return INITIAL_STATE;
    },
  },
});
