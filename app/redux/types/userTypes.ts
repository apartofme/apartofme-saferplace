import { PayloadAction } from '@reduxjs/toolkit';

import { AvatarsKeys } from '../../utils/types';

export type IAuthUserActionPayload = PayloadAction<{
  email: string;
  password: string;
}>;

export type IChangePasswordActionPayload = PayloadAction<{
  newPassword: string;
  currentPassword: string;
}>;

export interface IEditUser {
  nickname: string;
  avatar: AvatarsKeys;
}

export type IDeleteAccountActionPayload = PayloadAction<{
  password: string;
}>;

export interface IResetPasswordPayload {
  email: string;
}
export type IResetPasswordActionPayload = PayloadAction<IResetPasswordPayload>;
