import { Nullable } from '../utils/index';

export interface ISpeech {
  textKey: string;
}

export enum NicknameType {
  Child = 'child',
  Parent = 'parent',
}

export interface ITranslations {
  text: string;
  label: string;
  isfinaltranslation: Nullable<boolean>;
}

export enum MixingElixirPhaseType {
  Mix = 1,
  Open = 2,
  Pour = 3,
}

export enum PlantsType {
  SpourCompassion = 'SPOUR_COMPASSION',
}
