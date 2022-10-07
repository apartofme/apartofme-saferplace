import { PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../../models/IUser';
import { IShortSignUpData } from './cacheTypes';

export type IAuthUserActionPayload = PayloadAction<{
  email: string;
  password: string;
}>;

export type ILoginUserSuccessActionPayload = PayloadAction<{
  parent: IUser;
  child: IShortSignUpData;
}>;

export type IChangePasswordActionPayload = PayloadAction<{
  newPassword: string;
  currentPassword: string;
}>;

export interface IResetPasswordPayload {
  email: string;
}
export type IResetPasswordActionPayload = PayloadAction<IResetPasswordPayload>;
