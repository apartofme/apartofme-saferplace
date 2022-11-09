import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { IUserImageTitleProps } from './UserImageTitle.types';
import { styles } from './UserImageTitle.styles';
import { AVATARS_SVG, SVG } from '../../assets/svg';
import { ExtendedText } from '../ExtendedText';
import { COLORS } from '../../themes/colors';
import { FillPencilIcon } from '../../assets/svg/FillPencilLcon';
import { generalStyles } from '../../utils/styles';

const RoundPlussIcon = SVG.RoundPlussIcon;

export const UserImageTitle: React.FC<IUserImageTitleProps> = ({
  image,
  title,
  isEdit,
  onPress,
}) => {
  const AvatarIcon = image && AVATARS_SVG[image];

  const { t } = useTranslation();

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {AvatarIcon ? (
        <View style={[generalStyles.aiCenter, generalStyles.jcCenter]}>
          <View style={isEdit && [styles.opacity]}>
            <AvatarIcon width={175} height={175} />
          </View>

          {isEdit && (
            <View style={styles.absolute}>
              <FillPencilIcon
                color={COLORS.PRIMARY_ORANGE}
                width={48}
                height={48}
              />
            </View>
          )}
        </View>
      ) : (
        <RoundPlussIcon width={175} height={175} />
      )}
      <ExtendedText style={styles.userName} preset="heading">
        {title ?? t('screens.sign_in.select_user')}
      </ExtendedText>
    </TouchableOpacity>
  );
};
