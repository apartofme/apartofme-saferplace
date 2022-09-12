import React from 'react';
import { Switch } from 'react-native';

import { IExtendedSwitchProps } from './ExtendedSwitch.types';

export const ExtendedSwitch: React.FC<IExtendedSwitchProps> = ({
  isEnabled,
  setIsEnabled,
  ...rest
}) => {
  return <Switch {...rest} value={isEnabled} onValueChange={setIsEnabled} />;
};
