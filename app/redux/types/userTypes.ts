import { PayloadAction } from '@reduxjs/toolkit';

export type IAuthUserActionPayload = PayloadAction<{
  email: string;
  password: string;
}>;
