export interface ISignUpData {
  email?: string;
  password?: string;
  nickname?: string;
  // TODO: types
  avatar?: null;
}

export interface IShortSignUpData {
  nickname?: string;
  age?: string;
  // TODO: types
  avatar?: null;
}

export interface ISignUpDataPayload {
  payload: ISignUpData;
}

export interface IShortSignUpDataPayload {
  payload: IShortSignUpData;
}
