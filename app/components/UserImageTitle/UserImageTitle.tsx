import React from 'react';
import { TouchableOpacity } from 'react-native';

import { IUserImageTitleProps } from './UserImageTitle.types';
import { styles } from './UserImageTitle.styles';
import { AVATARS_SVG, SVG } from '../../assets/svg';
import { ExtendedText } from '../ExtendedText';
import { useTranslation } from 'react-i18next';

const RoundPlussIcon = SVG.RoundPlussIcon;

export const UserImageTitle: React.FC<IUserImageTitleProps> = ({
  image,
  title,
  onPress,
}) => {
  const AvatarIcon = image && AVATARS_SVG[image];

  const { t } = useTranslation();

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {AvatarIcon ? (
        <AvatarIcon width={120} height={120} />
      ) : (
        <RoundPlussIcon />
      )}
      <ExtendedText style={styles.userName} preset="heading">
        {title ? title : t('screens.sign_in.select_user')}
      </ExtendedText>
    </TouchableOpacity>
  );
};
