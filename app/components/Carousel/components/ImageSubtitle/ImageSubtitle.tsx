import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { SvgComponentType } from '../../../../utils/types';
import { ExtendedText } from '../../../ExtendedText';
import { styles } from './ImageSubtitle.styles';
import { IImageSubtitleProps } from './ImageSubtitle.types';

export const ImageSubtitle: React.FC<IImageSubtitleProps> = ({
  data,
  style,
}) => {
  const { t } = useTranslation();
  const Icon = data.image as SvgComponentType;

  return (
    <View style={style}>
      {data.image && <Icon />}
      {data.subtitleKey && (
        <ExtendedText style={styles.subtitle}>
          {t(data.subtitleKey)}
        </ExtendedText>
      )}
    </View>
  );
};
