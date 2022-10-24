import { SvgComponentType } from '../../utils/types';

export enum EmojiType {
  NO = 'no_selected',
  SuperRelaxed = 'super_relaxed',
  Relaxed = 'relaxed',
  Ok = 'ok',
  Stressed = 'stressed',
  VeryStressed = 'very_stressed',
}

export interface IEmojiButtons {
  buttonTitle: string;
  onSubmit: () => void;
  setEmojiKey: (value: string) => void;
}

export interface IEmojiButton {
  id: EmojiType;
  icon: SvgComponentType;
}
