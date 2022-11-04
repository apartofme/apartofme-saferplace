import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

import {
  IAuthUserActionPayload,
  IChangePasswordActionPayload,
  IEdiParent,
  IEditUser,
  IResetPasswordActionPayload,
} from '../types';
import { Nullable } from '../../utils';
import { IParent } from '../../models/IParent';
import { IChild } from '../../models/IChild';

interface IUserState {
  parent: Nullable<IParent>;
  child: Nullable<IChild>;
  children: IChild[];
}

export const INITIAL_STATE: IUserState = {
  parent: null,
  child: null,
  children: [],
};

/* eslint-disable @typescript-eslint/no-unused-vars */
export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    loginUser(state, action: IAuthUserActionPayload) {},
    loginUserSuccess(
      state,
      {
        payload: { parent, children },
      }: PayloadAction<{ parent: IParent; children: IChild[] }>,
    ) {
      state.parent = parent;
      state.children = children;
    },
    loginUserError(state, action: PayloadAction<string>) {},

    registerParent() {},
    registerParentSuccess(state, { payload }: PayloadAction<IParent>) {
      state.parent = payload;
    },
    registerParentError(state, action: PayloadAction<string>) {},

    setChild(state, { payload }: PayloadAction<IChild>) {},
    setChildSuccess(state, { payload }: PayloadAction<IChild>) {
      state.child = payload;
    },
    setChildError(state, action: PayloadAction<string>) {},

    createChild(state, action: PayloadAction<IChild>) {},
    createChildSuccess(state, { payload }: PayloadAction<IChild>) {
      state.child = payload;
      state.children.push(payload);
    },
    createChildError(state, action: PayloadAction<string>) {},

    changePassword(state, action: IChangePasswordActionPayload) {},
    changePasswordSuccess() {},
    changePasswordError(state, action: PayloadAction<string>) {},

    editParent(state, action: PayloadAction<IEdiParent>) {},
    editParentSuccess(state, { payload }: PayloadAction<IParent>) {
      state.parent = payload;
    },
    editParentError(state, action: PayloadAction<string>) {},

    editChild(state, action: PayloadAction<IEditUser>) {},
    editChildSuccess(state, { payload }: PayloadAction<IChild>) {
      if (state.child?.uid === payload.uid) {
        state.child = payload;
      } else {
        const editedChildIdx = _.findIndex(
          state.children,
          (item: IChild) => item.uid === payload.uid,
        );
        if (editedChildIdx !== -1) {
          state.children[editedChildIdx] = payload;
        }
      }
    },

    editChildError(state, action: PayloadAction<string>) {},

    resetPassword(state, action: IResetPasswordActionPayload) {},
    resetPasswordSuccess() {},
    resetPasswordError(state, action: PayloadAction<string>) {},

    deleteAccount(state, action: PayloadAction<string>) {},
    deleteAccountSuccess() {
      return INITIAL_STATE;
    },
    deleteAccountError(state, action: PayloadAction<string>) {},

    logout(state) {
      return INITIAL_STATE;
    },
  },
});
