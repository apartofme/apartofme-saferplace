import { IPlant } from '../../models/IPlant';
import { PlantAreaType } from '../../screens/Garden/components';
import { Nullable } from '../../utils';

export interface ISignUpData {
  email?: string;
  password?: string;
  nickname?: string;
  avatar?: string;
  createdAt?: string;
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
  firstPlayer: string;
  secondPlayer: string;
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

export type IPlantArea = Record<PlantAreaType, Nullable<IPlant>>;
