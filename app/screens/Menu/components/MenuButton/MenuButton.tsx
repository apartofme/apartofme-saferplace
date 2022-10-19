import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, TouchableOpacity, View } from 'react-native';

import { ExtendedText } from '../../../../components';
import { IMenuButtonProps } from './MenuButton.types';
import { styles } from './MenuButton.styles';
import { IMAGES } from '../../../../assets';
import { generalStyles } from '../../../../utils/styles';

export const MenuButton: React.FC<IMenuButtonProps> = ({
  title,
  icon,
  onPress,
}) => {
  const { t } = useTranslation();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[generalStyles.row, generalStyles.aiCenter]}>
        {icon && <Image source={icon} style={styles.image} />}
        <ExtendedText preset="secondary-text" style={styles.title}>
          {t(title)}
        </ExtendedText>
      </View>
      <Image source={IMAGES.WHITE_RIGHT_ARROW} />
    </TouchableOpacity>
  );
};
