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
    isRegisterParent: false,
    isSaveAllQuests: false,
    isSaveTranslations: false,
    isEditChild: false,
    isEditParent: false,
    isDeleteAccount: false,
    isChangePassword: false,
    isCreateChild: false,
    isResetPassword: false,
  },
  errors: {
    getUser: null,
    loginUser: null,
    registerParent: null,
    saveAllQuests: null,
    saveTranslations: null,
    editChild: null,
    editParent: null,
    deleteAccount: null,
    changePassword: null,
    createChild: null,
    resetPassword: null,
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
      state.loading[LoadingType.isRegisterParent] = true;
      state.errors[ErrorType.registerParent] = null;
    });
    builder.addCase(userSlice.actions.registerParentSuccess, state => {
      state.loading[LoadingType.isRegisterParent] = false;
    });
    builder.addCase(userSlice.actions.registerParentError, (state, action) => {
      state.loading[LoadingType.isRegisterParent] = false;
      state.errors[ErrorType.registerParent] = action.payload;
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

    // Reset password
    builder.addCase(userSlice.actions.resetPassword, state => {
      state.loading[LoadingType.isResetPassword] = true;
      state.errors[ErrorType.resetPassword] = null;
    });
    builder.addCase(userSlice.actions.resetPasswordSuccess, state => {
      state.loading[LoadingType.isResetPassword] = false;
    });
    builder.addCase(userSlice.actions.resetPasswordError, (state, action) => {
      state.loading[LoadingType.isResetPassword] = false;
      state.errors[ErrorType.resetPassword] = action.payload;
    });

    // Edit child
    builder.addCase(userSlice.actions.editChild, state => {
      state.loading[LoadingType.isEditChild] = true;
      state.errors[ErrorType.editChild] = null;
    });
    builder.addCase(userSlice.actions.editChildSuccess, state => {
      state.loading[LoadingType.isEditChild] = false;
    });
    builder.addCase(userSlice.actions.editChildError, (state, action) => {
      state.loading[LoadingType.isEditChild] = false;
      state.errors[ErrorType.editChild] = action.payload;
    });

    // Edit parent
    builder.addCase(userSlice.actions.editParent, state => {
      state.loading[LoadingType.isEditParent] = true;
      state.errors[ErrorType.editParent] = null;
    });
    builder.addCase(userSlice.actions.editParentSuccess, state => {
      state.loading[LoadingType.isEditParent] = false;
    });
    builder.addCase(userSlice.actions.editParentError, (state, action) => {
      state.loading[LoadingType.isEditParent] = false;
      state.errors[ErrorType.editParent] = action.payload;
    });

    // Create child
    builder.addCase(userSlice.actions.createChild, state => {
      state.loading[LoadingType.isCreateChild] = true;
      state.errors[ErrorType.createChild] = null;
    });
    builder.addCase(userSlice.actions.createChildSuccess, state => {
      state.loading[LoadingType.isCreateChild] = false;
    });
    builder.addCase(userSlice.actions.createChildError, (state, action) => {
      state.loading[LoadingType.isCreateChild] = false;
      state.errors[ErrorType.createChild] = action.payload;
    });

    // Delete account
    builder.addCase(userSlice.actions.deleteAccount, state => {
      state.loading[LoadingType.isDeleteAccount] = true;
      state.errors[ErrorType.deleteAccount] = null;
    });
    builder.addCase(userSlice.actions.deleteAccountSuccess, state => {
      state.loading[LoadingType.isDeleteAccount] = false;
    });
    builder.addCase(userSlice.actions.deleteAccountError, (state, action) => {
      state.loading[LoadingType.isDeleteAccount] = false;
      state.errors[ErrorType.deleteAccount] = action.payload;
    });

    // Update password
    builder.addCase(userSlice.actions.changePassword, state => {
      state.loading[LoadingType.isChangePassword] = true;
      state.errors[ErrorType.changePassword] = null;
    });
    builder.addCase(userSlice.actions.changePasswordSuccess, state => {
      state.loading[LoadingType.isChangePassword] = false;
    });
    builder.addCase(userSlice.actions.changePasswordError, (state, action) => {
      state.loading[LoadingType.isChangePassword] = false;
      state.errors[ErrorType.changePassword] = action.payload;
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
