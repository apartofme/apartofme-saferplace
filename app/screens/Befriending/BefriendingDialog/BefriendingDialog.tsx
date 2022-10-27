import React, { useCallback } from 'react';

import { CHARMS_SVG } from '../../../assets/svg';
import { DialogView } from '../../../components';
import { IBefriendingDialogScreenProps } from './BefriendingDialog.types';

export const BefriendingDialogScreen: React.FC<IBefriendingDialogScreenProps> =
  ({ navigation }) => {
    const onSubmit = useCallback(() => {
      navigation.push('BefriendingGarden');
    }, [navigation]);

    return (
      <DialogView
        Icon={CHARMS_SVG.HappySidekickGuideIcon}
        dialog={[{ textKey: 'screens.befriending.dialog' }]}
        onSubmit={onSubmit}
      />
    );
  };
