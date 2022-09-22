export enum EmojiType {
  NO = 0,
  SuperRelaxed = 1,
  Relaxed = 2,
  Ok = 3,
  VeryStressed = 4,
}

export interface IEmojiSlider {
  setEmojiKey: (value: string) => void;
}
