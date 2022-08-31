import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, View } from 'react-native';

import { ExtendedText } from '../../../ExtendedText';
import { IImageTitleSubTitleProps } from './ImageTitleSubTitle.props';

export const ImageTitleSubTitle: React.FC<IImageTitleSubTitleProps> = ({
  data,
}) => {
  const { t } = useTranslation();
  return (
    <View>
      {data.image && <Image source={data.image} />}
      {data.title && <ExtendedText>{t(data.title)}</ExtendedText>}
      {data.subTitle && <ExtendedText>{t(data.subTitle)}</ExtendedText>}
    </View>
  );
};
