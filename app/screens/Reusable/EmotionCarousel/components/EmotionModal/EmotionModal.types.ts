import { Nullable } from '../../../../../utils';

export interface IEmotionModalProps {
  title: string;
  backgroundImage: Nullable<string>;
  setModalStatus: () => void;
}
