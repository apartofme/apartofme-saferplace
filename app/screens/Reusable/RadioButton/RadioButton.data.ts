import { IRadioButtonListItem } from '../../../components';

export enum RadioButtonType {
  Yes = 'yes',
  No = 'no',
}

export const RADIO_BUTTON_LIST: ReadonlyArray<IRadioButtonListItem> = [
  {
    id: RadioButtonType.Yes,
    title: 'labels.yes',
  },
  {
    id: RadioButtonType.No,
    title: 'labels.no',
  },
];
