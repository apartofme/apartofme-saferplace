import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, View } from 'react-native';

import { ExtendedText } from '../../../ExtendedText';
import { styles } from './ImageSubtitle.styles';
import { IImageSubtitleProps } from './ImageSubtitle.types';

export const ImageSubtitle: React.FC<IImageSubtitleProps> = ({
  data,
  style,
}) => {
  const { t } = useTranslation();
  return (
    <View style={style}>
      {data.image && <Image source={data.image} style={styles.image} />}
      {data.subtitleKey && (
        <ExtendedText style={styles.subtitle}>
          {t(data.subtitleKey)}
        </ExtendedText>
      )}
    </View>
  );
};
