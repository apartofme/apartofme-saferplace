import { ITrySomethingCarouselItem } from '../../../../../components';

export interface ITrySomethingModalProps {
  title: string;
  subtitle: string;
  data: ITrySomethingCarouselItem;
  setModalStatus: () => void;
}
