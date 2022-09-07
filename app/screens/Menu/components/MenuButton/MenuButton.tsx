import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, TouchableOpacity } from 'react-native';

import { ExtendedText } from '../../../../components';
import { IMenuButtonProps } from './MenuButton.props';
import { styles } from './MenuButton.styles';

export const MenuButton: React.FC<IMenuButtonProps> = ({
  title,
  icon,
  onPress,
}) => {
  const { t } = useTranslation();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={icon} />
      <ExtendedText style={styles.title}>{t(title)}</ExtendedText>
      {/* //TODO: uncoment when design will be done */}
      {/* <Image source={IMAGES.WHITE_RIGHT_ARROW}/> */}
    </TouchableOpacity>
  );
};
