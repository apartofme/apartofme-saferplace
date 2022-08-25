export interface IApiLoginUserPayload {
  email: string;
  password: string;
}

export interface IApiRegisterUserPayload {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  phone: string;
}
