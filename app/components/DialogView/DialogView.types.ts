import { ImageSourcePropType } from 'react-native';

import { ISpeech } from '../../utils/types';

export interface IDialogViewProps {
  backgroundImage: ImageSourcePropType;
  dialog: ISpeech[];
  onSubmit: () => void;
  initialIdx?: number;
  navigateBetween?: {
    onPress: () => void;
    index: number;
  } | null;
}
