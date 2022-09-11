import React from 'react';
import { SafeAreaView } from 'react-native';

import { DialogView } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IDialogScreenProps } from './Dialog.types';

export const DialogScreen: React.FC<IDialogScreenProps> = ({ route }) => {
  const { speechs, backgroundImage, onSubmit } = route.params.data;

  return (
    <SafeAreaView style={generalStyles.flex}>
      <DialogView
        dialog={speechs}
        onSubmit={onSubmit}
        backgroundImage={backgroundImage}
      />
    </SafeAreaView>
  );
};
