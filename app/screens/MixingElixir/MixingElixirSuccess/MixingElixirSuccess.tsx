import { useIsFocused } from '@react-navigation/native';
import moment from 'moment';
import React, { useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { BACKGROUND_IMAGES } from '../../../assets';
import { PLANTS_SVG } from '../../../assets/images/dummySVG';
import { BottomButtonView, ExtendedText } from '../../../components';
import { AUDIO } from '../../../constants/audio';
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
    const isFocused = useIsFocused();
    const appStatus = useAppState();

    const isSoundFXEnabled = useAppSelector(
      state => state.settings.settings.audioSettings?.isSoundFXEnabled,
    );
    const currentPlant = useAppSelector(
      state => state.plant.plantsStack?.[state.plant.plantsStack.length - 1],
    );

    const onSubmit = useCallback(() => {
      const nowSeconds = moment().format('X');

      dispatch(
        plantSlice.actions.updatePlantArea({
          plantArea: selectedPlantArea,
          image: currentPlant ?? PlantsType.Compassion,
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

    const titleKey = useMemo(() => {
      switch (currentPlant) {
        case PlantsType.Compassion:
          return 'screens.mixing_exixir.success.compassion.title';
        case PlantsType.Calm:
          return 'screens.mixing_exixir.success.calm.title';
        default:
          return 'screens.mixing_exixir.success.courage.title';
      }
    }, [currentPlant]);

    const descriptionKey = useMemo(() => {
      switch (currentPlant) {
        case PlantsType.Compassion:
          return 'screens.mixing_exixir.success.compassion.description';
        case PlantsType.Calm:
          return 'screens.mixing_exixir.success.calm.description';
        default:
          return 'screens.mixing_exixir.success.courage.description';
      }
    }, [currentPlant]);

    const PlantIcon = useMemo(() => {
      switch (currentPlant) {
        case PlantsType.Compassion:
          return PLANTS_SVG.compassionGrown;
        case PlantsType.Calm:
          return PLANTS_SVG.calmGrown;
        default:
          return PLANTS_SVG.courageGrown;
      }
    }, [currentPlant]);

    useEffect(() => {
      if (isFocused && appStatus === 'active' && isSoundFXEnabled) {
        AudioPlayerHelper.play(AUDIO.PLANT_PLANTING);
      } else {
        AudioPlayerHelper.stop();
      }
    }, [appStatus, isFocused, isSoundFXEnabled]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN_BACKGROUND}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <BottomButtonView
            buttonTitle={t('buttons.back_to_clearing')}
            onSubmit={onSubmit}>
            <View style={styles.container}>
              <PlantIcon height={200} width={200} />
              <ExtendedText
                preset="large-title"
                style={[generalStyles.brilliantWhiteCenter, styles.title]}>
                {t(titleKey)}
              </ExtendedText>
              <ExtendedText
                preset="secondary-text"
                style={generalStyles.brilliantWhiteCenter}>
                {t(descriptionKey)}
              </ExtendedText>
            </View>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
