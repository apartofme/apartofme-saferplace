import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, View } from 'react-native';

import { IMAGES } from '../../../../assets';
import { ImagesKeys } from '../../../../utils/types';
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
      {data.image && (
        <Image source={IMAGES[data.image as ImagesKeys]} style={styles.image} />
      )}
      {data.subtitleKey && (
        <ExtendedText style={styles.subtitle}>
          {t(data.subtitleKey)}
        </ExtendedText>
      )}
    </View>
  );
};
