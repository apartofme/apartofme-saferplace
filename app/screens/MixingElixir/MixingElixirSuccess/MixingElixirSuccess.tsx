import { useIsFocused } from '@react-navigation/native';
import moment from 'moment';
import React, { useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground, SafeAreaView } from 'react-native';

import { PLANTS_IMAGES } from '../../../assets';
import { BottomButtonView, ExtendedText } from '../../../components';
import { useAppDispatch, useAppSelector, useAppState } from '../../../hooks';
import { plantSlice } from '../../../redux/slices/plantSlice';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { generalStyles } from '../../../utils/styles';
import { PlantsType } from '../../../utils/types';
import { styles } from './MixingElixirSuccess.styles';
import { IMixingElixirSuccessScreenProps } from './MixingElixirSuccess.types';

export const MixingElixirSuccessScreen: React.FC<IMixingElixirSuccessScreenProps> =
  ({ navigation, route }) => {
    const { selectedPlantArea, isFirstTimeGarden } = route.params;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const currentPlant = useAppSelector(
      state => state.plant.plantsStack?.[state.plant.plantsStack.length - 1],
    );

    const onSubmit = useCallback(() => {
      const nowSeconds = moment().format('X');

      dispatch(
        plantSlice.actions.updatePlantArea({
          plantArea: selectedPlantArea,
          image: currentPlant ?? PlantsType.SpourCompassion,
          plantedAt: nowSeconds,
        }),
      );

      navigation.push('GardenStack', {
        screen: 'Garden',
        params: {
          isFirstTime: isFirstTimeGarden,
          isPlanting: false,
          isFirstTimeGarden,
        },
      });
    }, [
      dispatch,
      isFirstTimeGarden,
      navigation,
      currentPlant,
      selectedPlantArea,
    ]);

    const background = useMemo(() => {
      switch (currentPlant) {
        case PlantsType.SpourCompassion:
          return {
            uri: 'https://images.unsplash.com/photo-1547483238-2cbf881a559f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80',
          };
      }
    }, [currentPlant]);

    const isFocused = useIsFocused();
    const appStatus = useAppState();

    useEffect(() => {
      if (isFocused && appStatus === 'active') {
        AudioPlayerHelper.play('plant_planting_1_005.wav');
      } else {
        AudioPlayerHelper.stop();
      }
    }, [appStatus, isFocused]);

    return (
      <ImageBackground source={background} style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <BottomButtonView
            buttonTitle={t('buttons.back_to_clearing')}
            onSubmit={onSubmit}>
            <Image
              source={
                currentPlant
                  ? PLANTS_IMAGES[`${currentPlant}_START`]
                  : PLANTS_IMAGES.SPOUR_COMPASSION_START
              }
              style={styles.image}
            />
            <ExtendedText>
              {t('screens.mixing_exixir.success.title')}
            </ExtendedText>
            <ExtendedText>
              {t('screens.mixing_exixir.success.description')}
            </ExtendedText>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
