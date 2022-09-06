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
      {data.titleKey && <ExtendedText>{t(data.titleKey)}</ExtendedText>}
      {data.subtitleKey && <ExtendedText>{t(data.subtitleKey)}</ExtendedText>}
    </View>
  );
};
