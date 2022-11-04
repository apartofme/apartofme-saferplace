import { IRadioButtonListItem, RadioButtonOption } from '../../../components';

export const GROUNDING_RADIO_BUTTON_ITEMS: ReadonlyArray<IRadioButtonListItem> =
  [
    {
      id: RadioButtonOption.Positive,
      title: 'labels.yes',
    },
    {
      id: RadioButtonOption.Negative,
      title: 'labels.no',
    },
  ];
