import React, { useCallback } from 'react';

import { IMAGES } from '../../../assets';
import { DialogView } from '../../../components';
import { IBefriendingDialogScreenProps } from './BefriendingDialog.types';

export const BefriendingDialogScreen: React.FC<IBefriendingDialogScreenProps> =
  ({ navigation }) => {
    const onSubmit = useCallback(() => {
      navigation.push('BefriendingGarden');
    }, [navigation]);

    return (
      <DialogView
        backgroundImage={IMAGES.GARDEN_BACKGROUND}
        dialog={[{ textKey: 'screens.befriending.dialog' }]}
        onSubmit={onSubmit}
      />
    );
  };
