import {
  IRadioButtonListItem,
  RadioButtonListType,
} from './RadioButtonList.data';

export interface IRadioButtonListProps {
  data: ReadonlyArray<IRadioButtonListItem>;
  type: RadioButtonListType;
  setSelected: (items: string[]) => void;
}
