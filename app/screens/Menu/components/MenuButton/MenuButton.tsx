import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';

import { ExtendedText } from '../../../../components';
import { IMenuButtonProps } from './MenuButton.types';
import { styles } from './MenuButton.styles';
import { generalStyles } from '../../../../utils/styles';
import { SVG_ICONS } from '../../../../assets/svg';

const WhiteRightArrow = SVG_ICONS.WhiteRightArrowIcon;

export const MenuButton: React.FC<IMenuButtonProps> = ({
  title,
  IconSvgComponent,
  onPress,
}) => {
  const { t } = useTranslation();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[generalStyles.row, generalStyles.aiCenter]}>
        {IconSvgComponent && (
          <View style={styles.imageContainer}>
            <IconSvgComponent />
          </View>
        )}
        <ExtendedText preset="secondary-text" style={styles.title}>
          {t(title)}
        </ExtendedText>
      </View>
      <WhiteRightArrow />
    </TouchableOpacity>
  );
};
