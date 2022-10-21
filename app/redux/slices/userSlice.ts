import _ from 'lodash';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  IAuthUserActionPayload,
  IChangePasswordActionPayload,
  ILoginUserSuccessActionPayload,
  IResetPasswordActionPayload,
  IShortSignUpData,
} from '../types';
import { Nullable } from '../../utils';
import { IUser } from '../../models/IUser';

interface IUserState {
  parent: Nullable<IUser>;
  child: Nullable<IShortSignUpData>;
}

export const INITIAL_STATE: IUserState = {
  parent: null,
  child: null,
};

/* eslint-disable @typescript-eslint/no-unused-vars */
export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    loginUser(state, action: IAuthUserActionPayload) {},
    loginUserSuccess(state, { payload: user }: ILoginUserSuccessActionPayload) {
      state.parent = user.parent;
      state.child = user.child;
    },
    loginUserError(state, action: PayloadAction<string>) {},

    registerParent() {},
    registerParentSuccess(state, { payload: user }: PayloadAction<IUser>) {
      state.parent = user;
    },
    registerParentError(state, action: PayloadAction<string>) {},

    saveChild() {},
    saveChildSuccess(
      state,
      { payload: user }: PayloadAction<IShortSignUpData>,
    ) {
      state.child = user;
    },
    saveChildError(state, action: PayloadAction<string>) {},

    changePassword(state, action: IChangePasswordActionPayload) {},
    changePasswordSuccess() {},
    changePasswordError(state, action: PayloadAction<string>) {},

    updateParent() {},
    updateParentSuccess(state, { payload: user }: PayloadAction<IUser>) {
      state.parent = _.merge(state.parent, user);
    },
    updateParentError(state, action: PayloadAction<string>) {},

    updateChild() {},
    updateChildSuccess(state, { payload: user }: PayloadAction<IUser>) {
      state.child = _.merge(state.child, user);
    },
    updateChildError(state, action: PayloadAction<string>) {},

    resetPassword(state, action: IResetPasswordActionPayload) {},
    resetPasswordSuccess() {},
    resetPasswordError(state, action: PayloadAction<string>) {},

    deleteAccount(state, action: PayloadAction<string>) {},
    deleteAccountSuccess() {},
    deleteAccountError(state, action: PayloadAction<string>) {},

    logout(state) {
      return INITIAL_STATE;
    },
  },
});
