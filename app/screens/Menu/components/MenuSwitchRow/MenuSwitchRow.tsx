import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { ExtendedSwitch, ExtendedText } from '../../../../components';
import { IMenuSwitchRowProps } from './MenuSwitchRow.types';
import { styles } from './MenuSwitchRow.styles';

export const MenuSwitchRow: React.FC<IMenuSwitchRowProps> = ({
  title,
  isEnabled = false,
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
