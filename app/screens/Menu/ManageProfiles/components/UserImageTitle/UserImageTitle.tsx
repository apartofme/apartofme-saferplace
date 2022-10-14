import React from 'react';

import { IUserImageTitleProps } from './UserImageTitle.types';
import { styles } from './UserImageTitle.styles';
import { Image, TouchableOpacity } from 'react-native';
import { IMAGES } from '../../../../../assets';
import { ExtendedText } from '../../../../../components';

export const UserImageTitle: React.FC<IUserImageTitleProps> = ({
  image,
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        // TODO: change to the real image
        source={IMAGES[image]}
        style={styles.image}
      />
      <ExtendedText style={styles.userName}>{title}</ExtendedText>
    </TouchableOpacity>
  );
};
