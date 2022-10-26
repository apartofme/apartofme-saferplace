import { CHARMS_BACKGROUNDS, IMAGES } from '../assets';
import {
  AVATARS_SVG,
  CHARMS_SVG,
  EMOTIONS_CAROUSEL_SVG,
  SVG,
} from '../assets/svg';
import { IPlantArea } from '../redux/types';
import { IInterruptedQuestLine } from '../redux/types/questTypes';
import { Nullable } from '../utils/index';

export interface ISpeech {
  textKey: string;
  iconKey?: SvgKeys;
  isBlur?: boolean;
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
  Calm = 'calm',
  Compassion = 'compassion',
  Courage = 'courage',
}

export enum AvatarsNameType {
  Bear = 'BearIcon',
  Fox = 'FoxIcon',
  Monkey = 'MonkeyIcon',
  Moth = 'MothIcon',
  Owl = 'OwlIcon',
  Rabbit = 'RabbitIcon',
}

export enum ElixirKeysType {
  ElixirZero = 'ElixirZeroIcon',
  ElixirZeroHalf = 'ElixirZeroHalfIcon',
  ElixirOne = 'ElixirOneIcon',
  ElixirOneHalf = 'ElixirOneHalfIcon',
  ElixirTwo = 'ElixirTwoIcon',
  ElixirTwoHalf = 'ElixirTwoHalfIcon',
  ElixirThree = 'ElixirThreeIcon',
}

export type AvatarsKeys = keyof typeof AVATARS_SVG;
export type ImagesKeys = keyof typeof IMAGES;
export type SvgKeys = keyof typeof SVG;
export type CharmsBackgroundsKeys = keyof typeof CHARMS_BACKGROUNDS;
export type CharmsSvgKeys = keyof typeof CHARMS_SVG;
export type EmotionsCarouselSvgKeys = keyof typeof EMOTIONS_CAROUSEL_SVG;
export type SvgComponentType = (props: ISvgProps) => JSX.Element;

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
