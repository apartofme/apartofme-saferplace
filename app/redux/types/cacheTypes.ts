export interface ISignUpData {
  email?: string;
  password?: string;
  nickname?: string;
  avatar?: string;
}

export interface IShortSignUpData {
  nickname?: string;
  age?: string;
  avatar?: string;
}

export interface ITrySomethingItem {
  title: string;
  subtitle: string;
}

export interface INicknames {
  parent?: string;
  child?: string;
  current?: string;
}

export interface ISignUpDataPayload {
  payload: ISignUpData;
}

export interface IShortSignUpDataPayload {
  payload: IShortSignUpData;
}

export interface ISaveTranslationsPayload {
  payload: ITranslations;
}

export type ITranslations = Record<
  string,
  {
    translations: Record<string, string>;
  }
>;

export interface ITrySomethingItemPayload {
  payload: ITrySomethingItem;
}

export interface INicknamesPayload {
  payload: INicknames;
}
