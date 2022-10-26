import { CharmBookMenuType } from '../../CharmBookMenu';

export interface IBookProps {
  isDisabled: boolean;
  setType?: (type: CharmBookMenuType) => void;
  setModalStatus?: () => void;
}
