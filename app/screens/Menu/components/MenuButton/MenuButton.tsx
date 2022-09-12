import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, TouchableOpacity } from 'react-native';

import { ExtendedText } from '../../../../components';
import { IMenuButtonProps } from './MenuButton.types';
import { styles } from './MenuButton.styles';

export const MenuButton: React.FC<IMenuButtonProps> = ({
  title,
  icon,
  onPress,
}) => {
  const { t } = useTranslation();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon && <Image source={icon} style={styles.image} />}
      <ExtendedText>{t(title)}</ExtendedText>
      {/* //TODO: uncoment when design will be done */}
      {/* <Image source={IMAGES.WHITE_RIGHT_ARROW}/> */}
    </TouchableOpacity>
  );
};
