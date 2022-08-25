import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

import { userSlice } from '.';
import { ErrorType, LoadingType } from '../types';

export interface IAppState {
  loading: Record<LoadingType, boolean>;
  errors: Record<ErrorType, string | null>;
}

const INITIAL_STATE: IAppState = {
  loading: {
    isGetUser: false,
    isLoginUser: false,
    isRegisterUser: false,
  },
  errors: {
    getUser: null,
    loginUser: null,
    registerUser: null,
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState: INITIAL_STATE,
  reducers: {
    setError(
      state,
      {
        payload: { error, errorType },
      }: PayloadAction<{ errorType: ErrorType; error: string }>,
    ) {
      state.errors[errorType] = error;
    },
    resetErrors(state) {
      state.errors = _.cloneDeep(INITIAL_STATE.errors);
    },
  },
  extraReducers: builder => {
    // Login actions
    builder.addCase(userSlice.actions.loginUser, state => {
      state.loading[LoadingType.isLoginUser] = true;
      state.errors[ErrorType.loginUser] = null;
    });
    builder.addCase(userSlice.actions.loginUserSuccess, state => {
      state.loading[LoadingType.isLoginUser] = false;
    });
    builder.addCase(userSlice.actions.loginUserError, (state, action) => {
      state.loading[LoadingType.isLoginUser] = false;
      state.errors[ErrorType.loginUser] = action.payload;
    });

    // Register actions
    builder.addCase(userSlice.actions.registerUser, state => {
      state.loading[LoadingType.isRegisterUser] = true;
      state.errors[ErrorType.registerUser] = null;
    });
    builder.addCase(userSlice.actions.registerUserSuccess, state => {
      state.loading[LoadingType.isRegisterUser] = false;
    });
    builder.addCase(userSlice.actions.registerUserError, (state, action) => {
      state.loading[LoadingType.isRegisterUser] = false;
      state.errors[ErrorType.registerUser] = action.payload;
    });
  },
});
