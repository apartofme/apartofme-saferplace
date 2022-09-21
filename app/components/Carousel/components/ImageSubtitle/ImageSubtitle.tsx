import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, View } from 'react-native';

import { ExtendedText } from '../../../ExtendedText';
import { IImageSubtitleProps } from './ImageSubtitle.types';

export const ImageSubtitle: React.FC<IImageSubtitleProps> = ({
  data,
  style,
}) => {
  const { t } = useTranslation();
  return (
    <View style={style}>
      {data.image && <Image source={data.image} />}
      {data.subtitleKey && <ExtendedText>{t(data.subtitleKey)}</ExtendedText>}
    </View>
  );
};
