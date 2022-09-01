import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';

import { ExtendedText } from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { IMenuButtonProps } from './MenuButton.props';

export const MenuButton: React.FC<IMenuButtonProps> = ({ title, onPress }) => {
  const { t } = useTranslation();

  return (
    <TouchableOpacity
      style={[generalStyles.row, generalStyles.jcSpaceBtw]}
      onPress={onPress}>
      <ExtendedText>{t(title)}</ExtendedText>
      {/* //TODO: uncoment when design will be done */}
      {/* <Image source={IMAGES.BLACK_RIGHT_ARROW}/> */}
    </TouchableOpacity>
  );
};
