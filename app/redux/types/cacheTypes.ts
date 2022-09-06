export interface ISignUpData {
  email?: string;
  password?: string;
  nickname?: string;
  // TODO: types
  avatar?: null;
}

export type IShortSignUpData = Partial<
  Pick<ISignUpData, 'avatar' | 'nickname'> | { age?: string }
>;

export interface ISignUpDataPayload {
  payload: Partial<ISignUpData>;
}

export interface IShortSignUpDataPayload {
  payload: Partial<IShortSignUpData>;
}
