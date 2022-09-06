import { PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../../models/IUser';
import { Nullable } from '../../utils';

export type IAuthUserActionPayload = PayloadAction<{
  email: string;
  password: string;
}>;

export type IAuthUserSuccessActionPayload = PayloadAction<Nullable<IUser>>;

export interface IResetPasswordPayload {
  email: string;
}
export type IResetPasswordActionPayload = PayloadAction<IResetPasswordPayload>;
