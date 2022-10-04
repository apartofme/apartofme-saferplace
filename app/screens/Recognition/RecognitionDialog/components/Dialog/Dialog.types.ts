import { ISpeech } from '../../../../../utils/types';

export interface IDialogProps {
  data: ReadonlyArray<ISpeech>;
  currentIndex: number;
  onNextPress: () => void;
}
