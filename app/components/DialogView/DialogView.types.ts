import { ImageSourcePropType } from 'react-native';

import { ISpeech, SvgComponentType } from '../../utils/types';

export interface IDialogViewProps {
  backgroundImage: ImageSourcePropType;
  dialog: ISpeech[];
  onSubmit: () => void;
  Icon?: SvgComponentType;
  initialIdx?: number;
  navigateBetween?: {
    onPress: () => void;
    index: number;
  } | null;
}
