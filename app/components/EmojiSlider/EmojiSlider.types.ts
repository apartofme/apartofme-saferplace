export enum EmojiType {
  VeryStressed = 'veryStressed',
  Neutral = 'neutral',
  Ok = 'ok',
  Relaxed = 'relaxed',
  SuperRelaxed = 'super-relaxed',
}

export interface IEmojiSlider {
  setEmoji: (value: EmojiType) => void;
}
