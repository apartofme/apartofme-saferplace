import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, View } from 'react-native';

import { ExtendedText } from '../../../ExtendedText';
import { IImageTitleSubtitleProps } from './ImageTitleSubtitle.types';
import { styles } from './ImageTitleSubtitle.styles';
import { generalStyles } from '../../../../utils/styles';

export const ImageTitleSubtitle: React.FC<IImageTitleSubtitleProps> = ({
  data,
  style,
}) => {
  const { t } = useTranslation();
  return (
    <View style={[styles.container, style]}>
      {data.image && <Image source={data.image} style={styles.image} />}
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
