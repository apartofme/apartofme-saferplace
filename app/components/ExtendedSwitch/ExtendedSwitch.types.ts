import { SwitchProps } from 'react-native';

export interface IExtendedSwitchProps extends SwitchProps {
  isEnabled: boolean;
  setIsEnabled: (value: boolean) => void;
}
