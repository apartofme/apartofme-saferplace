import { PayloadAction } from '@reduxjs/toolkit';

export type ILanguageActionPayload = PayloadAction<{
  language: string;
}>;

export type INotificationAllowActionPayload = PayloadAction<{
  isNotificationAllow: boolean;
}>;
