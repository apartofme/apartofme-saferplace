import { IMAGES } from '../assets';
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
  Logo = 'LOGO',
  WhitePencil = 'WHITE_PENCIL',
  WhiteBackArrow = 'WHITE_BACK_ARROW',
  Tree = 'TREE',
}

export type ImagesType = keyof typeof IMAGES;

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
