import React, { useCallback } from 'react';

import { DialogView } from '../../../components';
import { GARDEN_TUTORIAL_DIALOG } from './GardenTutorialDialog.data';
import { IGardenTutorialDialogScreenProps } from './GardenTutorialDialog.types';

export const GardenTutorialDialogScreen: React.FC<IGardenTutorialDialogScreenProps> =
  ({ navigation, route }) => {
    const { isStart } = route.params;

    const onSabmit = useCallback(() => {
      navigation.navigate('Garden', {
        isFirstTime: false,
        isPlanting: false,
        isFirstTimeGarden: false,
      });
    }, [navigation]);

    const goToGarden = useCallback(() => {
      navigation.navigate('Garden', {
        isFirstTime: false,
        isPlanting: true,
        isFirstTimeGarden: true,
      });
    }, [navigation]);

    return (
      <DialogView
        backgroundImage={{
          uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
        }}
        dialog={GARDEN_TUTORIAL_DIALOG}
        onSubmit={onSabmit}
        navigateBetween={
          isStart
            ? {
                index: 6,
                onPress: goToGarden,
              }
            : null
        }
        initialIdx={isStart ? 0 : 7}
      />
    );
  };
