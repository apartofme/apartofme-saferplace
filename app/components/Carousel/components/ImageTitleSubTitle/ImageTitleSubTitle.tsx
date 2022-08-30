import React from 'react';
import { Image, View } from 'react-native';

import { ExtendedText } from '../../../ExtendedText';
import { IImageTitleSubTitleProps } from './ImageTitleSubTitle.props';

export const ImageTitleSubTitle: React.FC<IImageTitleSubTitleProps> = ({
  data,
}) => {
  return (
    <View>
      <Image source={data.image} />
      <ExtendedText>{data.title}</ExtendedText>
      <ExtendedText>{data.subTitle}</ExtendedText>
    </View>
  );
};
