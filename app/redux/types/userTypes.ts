import { PayloadAction } from '@reduxjs/toolkit';

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
  userId: string;
}

export type IEdiParent = Omit<IEditUser, 'userId'>;

export type IDeleteAccountActionPayload = PayloadAction<{
  password: string;
}>;

export interface IResetPasswordPayload {
  email: string;
}
export type IResetPasswordActionPayload = PayloadAction<IResetPasswordPayload>;
