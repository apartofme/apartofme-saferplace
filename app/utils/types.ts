import { IMAGES } from '../assets';
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

export type ImagesType = keyof typeof IMAGES;
