export interface ISignUpData {
  email?: string;
  password?: string;
  nickname?: string;
  // TODO: types
  avatar?: null;
}

export interface ISignUpDataPayload {
  payload: Partial<ISignUpData>;
}
