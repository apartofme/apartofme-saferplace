import {
  IRadioButtonListItem,
  RadioButtonListType,
} from './RadioButtonList.data';

export interface IRadioButtonListProps {
  data: IRadioButtonListItem[];
  type: RadioButtonListType;
}