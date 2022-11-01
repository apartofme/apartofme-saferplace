import React from 'react';
import { TouchableOpacity } from 'react-native';

import { IUserImageTitleProps } from './UserImageTitle.types';
import { styles } from './UserImageTitle.styles';
import { AVATARS_SVG, SVG } from '../../assets/svg';
import { ExtendedText } from '../ExtendedText';

export const UserImageTitle: React.FC<IUserImageTitleProps> = ({
  image,
  title,
  onPress,
}) => {
  const AvatarIcon = image && AVATARS_SVG[image];
  const RoundPlussIcon = SVG.RoundPlussIcon;
  return (
    <TouchableOpacity onPress={onPress}>
      {AvatarIcon ? (
        <AvatarIcon width={140} height={140} />
      ) : (
        <RoundPlussIcon width={140} height={140} />
      )}
      <ExtendedText style={styles.userName}>{title}</ExtendedText>
    </TouchableOpacity>
  );
};
