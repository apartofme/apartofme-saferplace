import { PayloadAction } from '@reduxjs/toolkit';

export type ISettingsActionPayload = PayloadAction<{
  language: string;
}>;
