import React, { useCallback } from 'react';

import { BACKGROUND_IMAGES } from '../../../assets';
import { DialogView } from '../../../components';
import { RECOGNITION_DIALOG_DATA } from './RecognitionDialog.data';
import { IRecognitionDialogScreenProps } from './RecognitionDialog.types';

export const RecognitionDialogScreen: React.FC<IRecognitionDialogScreenProps> =
  ({ navigation, route }) => {
    const speech = route.params?.data.speech ?? RECOGNITION_DIALOG_DATA;
    const nextRoute = route.params?.data.nextRoute ?? 'ChooseReason';

    const onSubmit = useCallback(() => {
      navigation.navigate(nextRoute);
    }, [navigation, nextRoute]);

    return (
      <DialogView
        backgroundImage={BACKGROUND_IMAGES.GARDEN}
        dialog={[...speech]}
        onSubmit={onSubmit}
      />
    );
  };
