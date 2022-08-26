import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAuthUserActionPayload } from '../types';
import { IUser } from '../../models/IUser';

interface IUserState {
  user: IUser;
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
    loginUserSuccess(state, { payload: user }: PayloadAction<IUser>) {
      state.user = user;
    },
    loginUserError(state, action: PayloadAction<string>) {},

    registerUser(state, action: IAuthUserActionPayload) {},
    registerUserSuccess(state, { payload: user }: PayloadAction<IUser>) {
      state.user = user;
    },
    registerUserError(state, action: PayloadAction<string>) {},

    logout(state) {
      return INITIAL_STATE;
    },
  },
});
