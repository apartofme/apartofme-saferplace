import apisauce, { ApisauceInstance } from 'apisauce';

import CONFIG from '../../config/env';
import { IApiUser } from './api.types';
import {
  IApiRegisterUserPayload,
  IApiLoginUserPayload,
} from './apiPayload.types';

class Api {
  private client: ApisauceInstance;

  constructor(baseURL = CONFIG.API_URL) {
    this.client = apisauce.create({
      baseURL,
      timeout: 10000,
      headers: { 'Cache-Control': 'no-cache' },
    });
  }

  setAuthHeader = (token: string) => {
    this.client.setHeader('Authorization', `Bearer ${token}`);
  };

  loginUser = (params: IApiLoginUserPayload) =>
    this.client.post<IApiUser>('/api/v1/auth/login', params);

  registerUser = (params: IApiRegisterUserPayload) =>
    this.client.post<IApiUser>('/api/v1/auth/register', params);
}

export const apiInstance = new Api();

export default Api;
