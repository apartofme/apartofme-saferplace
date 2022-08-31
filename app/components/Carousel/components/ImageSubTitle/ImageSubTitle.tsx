import React from 'react';
import { Image, View } from 'react-native';

import { ExtendedText } from '../../../ExtendedText';
import { IImageSubTitleProps } from './ImageSubTitle.props';

export const ImageSubTitle: React.FC<IImageSubTitleProps> = ({ data }) => {
  return (
    <View>
      <ExtendedText>{data.subTitle}</ExtendedText>
      {data.image && <Image source={data.image} />}
    </View>
  );
};
