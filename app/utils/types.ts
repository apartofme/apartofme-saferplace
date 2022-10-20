import { IMAGES } from '../assets';
import { AVATARS_SVG } from '../assets/svg';
import { IPlantArea } from '../redux/types';
import { IInterruptedQuestLine } from '../redux/types/questTypes';
import { Nullable } from '../utils/index';

export interface ISpeech {
  textKey: string;
}

export enum UserType {
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

export enum AvatarsNameType {
  Bear = 'bear',
  Fox = 'fox',
  Monkey = 'monkey',
  Moth = 'moth',
  Owl = 'owl',
  Rabbit = 'rabbit',
}

export enum ElixirKeysType {
  ElixirZero = 'ElixirZeroIcon',
  ElixirZeroHalf = 'ElixirZeroHalfIcon',
  ElixirOne = 'ElixirOneIcon',
  ElixirOneHalf = 'ElixirOneHalfIcon',
  ElixirTwo = 'ElixirTwoIcon',
  ElixirTwoHalf = 'ElixirTwoHalfIcon',
  ElixirThree = 'ElixirThreeICon',
}

export type AvatarsKeys = keyof typeof AVATARS_SVG;

export type ImagesKeys = keyof typeof IMAGES;

export interface IElixirProgress {
  fullnessElixir: number;
}
export interface IPlantProgress {
  plantsStack: PlantsType[];
  plantArea: IPlantArea;
}

export interface IQuestProgress {
  currentDay: number;
  lastDayUpdate: number;
  currentDayQuestsStack: number[];
  interruptedQuestLine: Nullable<IInterruptedQuestLine>;
  completedQuestsId: number[];
}

export interface ISvgProps {
  height?: number;
  width?: number;
}
