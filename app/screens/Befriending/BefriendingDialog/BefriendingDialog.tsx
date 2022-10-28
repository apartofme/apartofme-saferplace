import React, { useCallback } from 'react';

import { DialogView } from '../../../components';
import { IBefriendingDialogScreenProps } from './BefriendingDialog.types';

export const BefriendingDialogScreen: React.FC<IBefriendingDialogScreenProps> =
  ({ navigation }) => {
    const onSubmit = useCallback(() => {
      navigation.push('BefriendingGarden');
    }, [navigation]);

    return (
      <DialogView
        dialog={[
          { textKey: 'screens.befriending.dialog', iconKey: 'HappyGuideIcon' },
        ]}
        onSubmit={onSubmit}
      />
    );
  };
