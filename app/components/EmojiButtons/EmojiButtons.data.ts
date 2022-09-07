export enum EmojiButtonType {
  VeryStressed = 'veryStressed',
  Neutral = 'neutral',
  Ok = 'ok',
  Stressed = 'stressed',
  Worried = 'worried',
  VeryOk = 'veryOk',
}

export interface IEmojiButton {
  title: string;
  type: EmojiButtonType;
}
