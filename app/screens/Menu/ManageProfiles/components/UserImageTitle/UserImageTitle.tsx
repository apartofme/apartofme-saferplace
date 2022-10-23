import React from 'react';
import { TouchableOpacity } from 'react-native';

import { IUserImageTitleProps } from './UserImageTitle.types';
import { styles } from './UserImageTitle.styles';
import { ExtendedText } from '../../../../../components';
import { AVATARS_SVG } from '../../../../../assets/svg';

export const UserImageTitle: React.FC<IUserImageTitleProps> = ({
  image,
  title,
  onPress,
}) => {
  const AvatarIcon = AVATARS_SVG[image];
  return (
    <TouchableOpacity onPress={onPress}>
      <AvatarIcon width={140} height={140} />
      <ExtendedText style={styles.userName}>{title}</ExtendedText>
    </TouchableOpacity>
  );
};
