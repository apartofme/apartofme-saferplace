export enum EmojiButtonType {
  veryStressed = 'veryStressed',
  neutral = 'neutral',
  ok = 'ok',
  stressed = 'stressed',
  worried = 'worreid',
  veryOk = 'veryOk',
}

export interface IEmojiButton {
  title: string;
  type: EmojiButtonType;
}
