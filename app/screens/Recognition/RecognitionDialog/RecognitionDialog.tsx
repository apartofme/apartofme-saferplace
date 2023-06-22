import React, { useCallback, useEffect } from 'react';

import { DialogView } from '../../../components';
import { RECOGNITION_DIALOG_DATA } from './RecognitionDialog.data';
import { IRecognitionDialogScreenProps } from './RecognitionDialog.types';
import { SaveRecognitionStackScreenName } from '../../../navigation/navigationAsyncStorage';

export const RecognitionDialogScreen: React.FC<IRecognitionDialogScreenProps> =
  ({ navigation, route }) => {
    const speech = route.params?.data.speech ?? RECOGNITION_DIALOG_DATA;
    const nextRoute = route.params?.data.nextRoute ?? 'ChooseReason';

    useEffect(() => {
      const saveStackScreenName = async () => {
        await SaveRecognitionStackScreenName(route.name);
      };
      saveStackScreenName();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmit = useCallback(() => {
      navigation.navigate(nextRoute);
    }, [navigation, nextRoute]);

    return <DialogView dialog={[...speech]} onSubmit={onSubmit} />;
  };
