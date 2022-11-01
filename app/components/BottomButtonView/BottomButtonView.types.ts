import { ViewProps } from 'react-native';

import { ExtendedButtonPresets } from '../ExtendedButton/ExtendedButton.presets';

export interface IBottomButtonViewProps extends ViewProps {
  buttonTitle: string;
  onSubmit: () => void;
  isDisabledButton?: boolean;
  isArrow?: boolean;
  preset?: ExtendedButtonPresets;
}
