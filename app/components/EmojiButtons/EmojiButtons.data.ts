import { EMOTIONS_SVG } from '../../assets/svg';
import { EmojiType, IEmojiButton } from './EmojiButtons.types';

export const EMOJI_BUTTONS_LIST: ReadonlyArray<IEmojiButton> = [
  {
    id: EmojiType.SuperRelaxed,
    icon: EMOTIONS_SVG.EmotionSuperRelaxedIcon,
  },
  {
    id: EmojiType.Relaxed,
    icon: EMOTIONS_SVG.EmotionRelaxedIcon,
  },
  {
    id: EmojiType.Ok,
    icon: EMOTIONS_SVG.EmotionOkIcon,
  },
  {
    id: EmojiType.Stressed,
    icon: EMOTIONS_SVG.EmotionStressedIcon,
  },
  {
    id: EmojiType.VeryStressed,
    icon: EMOTIONS_SVG.EmotionVeryStressedIcon,
  },
];
