import { EmojiButtonType, IEmojiButton } from './EmojiButtons.data';

export interface IEmojiButtonsProps {
  data: IEmojiButton[];
  setSelected: (item: EmojiButtonType) => void;
}
