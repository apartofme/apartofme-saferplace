import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, View } from 'react-native';

import { ExtendedText } from '../../../ExtendedText';
import { ISubtitleImageProps } from './SubtitleImage.types';

export const SubtitleImage: React.FC<ISubtitleImageProps> = ({
  data,
  style,
}) => {
  const { t } = useTranslation();
  return (
    <View style={style}>
      {data.subtitleKey && <ExtendedText>{t(data.subtitleKey)}</ExtendedText>}
      {data.image && <Image source={data.image} />}
    </View>
  );
};
