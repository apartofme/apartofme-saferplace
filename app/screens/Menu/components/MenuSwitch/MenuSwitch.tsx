import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { ExtendedSwitch, ExtendedText } from '../../../../components';
import { IMenuSwitchProps } from './MenuSwitch.props';
import { styles } from './MenuSwitch.styles';

export const MenuSwitch: React.FC<IMenuSwitchProps> = ({
  title,
  isEnabled,
  setIsEnabled,
}) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ExtendedText>{t(title)}</ExtendedText>
      <ExtendedSwitch isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
    </View>
  );
};
