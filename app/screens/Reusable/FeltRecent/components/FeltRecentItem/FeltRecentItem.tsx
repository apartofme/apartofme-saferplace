import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

import { IFeltRecentItemProps } from './FeltRecentItem.types';
import { styles } from './FeltRecentItem.styles';
import { ExtendedText } from '../../../../../components';

export const FeltRecentItem: React.FC<IFeltRecentItemProps> = ({
  titleKey,
  isActive,
  onPress,
  image,
}) => {
  const { t } = useTranslation();

  return (
    <TouchableOpacity
      style={[styles.container, isActive && styles.active]}
      onPress={onPress}>
      {/* //TODO: uncomment when add image  */}
      {/* <Image source={image} /> */}
      <ExtendedText>{t(titleKey)}</ExtendedText>
    </TouchableOpacity>
  );
};
