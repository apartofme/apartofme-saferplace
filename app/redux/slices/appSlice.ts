import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

import { cacheSlice, questSlice, userSlice } from '../slices';
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
    isSaveAllQuests: false,
    isSaveTranslations: false,
    isUpdateChild: false,
    isUpdateParent: false,
  },
  errors: {
    getUser: null,
    loginUser: null,
    registerUser: null,
    saveAllQuests: null,
    saveTranslations: null,
    updateChild: null,
    updateParent: null,
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
    builder.addCase(userSlice.actions.registerParent, state => {
      state.loading[LoadingType.isRegisterUser] = true;
      state.errors[ErrorType.registerUser] = null;
    });
    builder.addCase(userSlice.actions.registerParentSuccess, state => {
      state.loading[LoadingType.isRegisterUser] = false;
    });
    builder.addCase(userSlice.actions.registerParentError, (state, action) => {
      state.loading[LoadingType.isRegisterUser] = false;
      state.errors[ErrorType.registerUser] = action.payload;
    });

    // Save all quests
    builder.addCase(questSlice.actions.saveAllQuests, state => {
      state.loading[LoadingType.isSaveAllQuests] = true;
      state.errors[ErrorType.saveAllQuests] = null;
    });
    builder.addCase(questSlice.actions.saveAllQuestsSuccess, state => {
      state.loading[LoadingType.isSaveAllQuests] = false;
    });
    builder.addCase(questSlice.actions.saveAllQuestsError, (state, action) => {
      state.loading[LoadingType.isSaveAllQuests] = false;
      state.errors[ErrorType.saveAllQuests] = action.payload;
    });

    // Update child
    builder.addCase(userSlice.actions.updateChild, state => {
      state.loading[LoadingType.isUpdateChild] = true;
      state.errors[ErrorType.updateChild] = null;
    });
    builder.addCase(userSlice.actions.updateChildSuccess, state => {
      state.loading[LoadingType.isUpdateChild] = false;
    });
    builder.addCase(userSlice.actions.updateChildError, (state, action) => {
      state.loading[LoadingType.isUpdateChild] = false;
      state.errors[ErrorType.updateChild] = action.payload;
    });

    // Update parent
    builder.addCase(userSlice.actions.updateParent, state => {
      state.loading[LoadingType.isUpdateParent] = true;
      state.errors[ErrorType.updateParent] = null;
    });
    builder.addCase(userSlice.actions.updateParentSuccess, state => {
      state.loading[LoadingType.isUpdateParent] = false;
    });
    builder.addCase(userSlice.actions.updateParentError, (state, action) => {
      state.loading[LoadingType.isUpdateParent] = false;
      state.errors[ErrorType.updateParent] = action.payload;
    });

    // Save translations
    builder.addCase(cacheSlice.actions.saveTranslations, state => {
      state.loading[LoadingType.isSaveTranslations] = true;
      state.errors[ErrorType.saveTranslations] = null;
    });
    builder.addCase(cacheSlice.actions.saveTranslationsSuccess, state => {
      state.loading[LoadingType.isSaveTranslations] = false;
    });
    builder.addCase(
      cacheSlice.actions.saveTranslationsError,
      (state, action) => {
        state.loading[LoadingType.isSaveTranslations] = false;
        state.errors[ErrorType.saveTranslations] = action.payload;
      },
    );
  },
});
