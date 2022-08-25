import { ApiResponse } from 'apisauce';

import { IApiUser } from './api.types';

export interface IApiLoginSuccessResponse {
  token: string;
  user: IApiUser;
}

export type IErrorResponse = {
  error: string;
};

export type LoginUserResponse = ApiResponse<
  IApiLoginSuccessResponse,
  IErrorResponse
>;

export interface IApiRegisterSuccessResponse {
  token: string;
  user: IApiUser;
}

export type RegisterUserResponse = ApiResponse<
  IApiRegisterSuccessResponse,
  IErrorResponse
>;
