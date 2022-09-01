import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, View } from 'react-native';

import { ExtendedText } from '../../../ExtendedText';
import { IImageSubTitleProps } from './ImageSubTitle.props';

export const ImageSubTitle: React.FC<IImageSubTitleProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <View>
      {data.subTitleID && <ExtendedText>{t(data.subTitleID)}</ExtendedText>}
      {data.image && <Image source={data.image} />}
    </View>
  );
};
