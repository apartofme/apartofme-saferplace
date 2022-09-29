import { ISpeech } from '../../../../../utils/types';

export interface IDialogProps {
  data: ReadonlyArray<ISpeech>;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}
