import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { ExtendedText } from '../../../ExtendedText';
import { IImageTitleSubtitleProps } from './ImageTitleSubtitle.types';
import { styles } from './ImageTitleSubtitle.styles';
import { generalStyles } from '../../../../utils/styles';
import { SvgComponentType } from '../../../../utils/types';

export const ImageTitleSubtitle: React.FC<IImageTitleSubtitleProps> = ({
  data,
  style,
}) => {
  const { t } = useTranslation();
  const Icon = data.image as SvgComponentType;

  return (
    <View style={[styles.container, style]}>
      {data.image && <Icon />}
      <View style={generalStyles.flex} />

      {data.titleKey && (
        <ExtendedText preset="large-title" style={styles.title}>
          {t(data.titleKey)}
        </ExtendedText>
      )}
      {data.subtitleKey && (
        <ExtendedText preset="secondary-text" style={styles.subtitle}>
          {t(data.subtitleKey)}
        </ExtendedText>
      )}
    </View>
  );
};
