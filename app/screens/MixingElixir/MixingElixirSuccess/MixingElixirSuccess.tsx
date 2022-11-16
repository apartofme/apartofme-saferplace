import { useIsFocused } from '@react-navigation/native';
import moment from 'moment';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import Lottie from 'lottie-react-native';

import { BACKGROUND_IMAGES } from '../../../assets';
import { BottomButtonView, ExtendedText } from '../../../components';
import { AUDIO } from '../../../constants/audio';
import {
  useAppDispatch,
  useAppSelector,
  useAppState,
  useInternetCheck,
  useMount,
} from '../../../hooks';
import { plantSlice } from '../../../redux/slices/plantSlice';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { generalStyles } from '../../../utils/styles';
import { PlantsType } from '../../../utils/types';
import { styles } from './MixingElixirSuccess.styles';
import { IMixingElixirSuccessScreenProps } from './MixingElixirSuccess.types';
import { ANIMATIONS } from '../../../assets/animations';
import { LottieAbsoluteStyles } from '../../../utils';
import { elixirSlice } from '../../../redux/slices';

export const MixingElixirSuccessScreen: React.FC<IMixingElixirSuccessScreenProps> =
  ({ navigation, route }) => {
    const { selectedPlantArea, isFirstTimeGarden } = route.params;
    const { fullnessElixir } = useAppSelector(state => state.elixir);

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isFocused = useIsFocused();
    const appStatus = useAppState();

    useInternetCheck(
      'errors.network_progress.title',
      'errors.network_progress.description',
    );

    const [titleKey, setTitleKey] = useState('');
    const [descriptionKey, setDescriptionKey] = useState('');

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
      if (fullnessElixir && fullnessElixir >= 3) {
        dispatch(elixirSlice.actions.updateFullnessElixir(fullnessElixir - 3));
      }

      navigation.replace('GardenStack', {
        screen: 'Garden',
        params: {
          isFirstTime: isFirstTimeGarden,
          isPlanting: false,
          isFirstTimeGarden,
        },
      });
    }, [
      dispatch,
      selectedPlantArea,
      currentPlant,
      fullnessElixir,
      navigation,
      isFirstTimeGarden,
    ]);

    useMount(() => {
      switch (currentPlant) {
        case PlantsType.Compassion:
          setTitleKey('screens.mixing_exixir.success.compassion.title');
          setDescriptionKey(
            'screens.mixing_exixir.success.compassion.description',
          );
          return;
        case PlantsType.Calm:
          setTitleKey('screens.mixing_exixir.success.calm.title');
          setDescriptionKey('screens.mixing_exixir.success.calm.description');
          return;
        default:
          setTitleKey('screens.mixing_exixir.success.courage.title');
          setDescriptionKey(
            'screens.mixing_exixir.success.courage.description',
          );
      }
    });

    useEffect(() => {
      if (isFocused && appStatus === 'active' && isSoundFXEnabled) {
        AudioPlayerHelper.play(AUDIO.PLANT_PLANTING);
      } else {
        AudioPlayerHelper.stop();
      }
    }, [appStatus, isFocused, isSoundFXEnabled]);

    const animation = useMemo(() => {
      switch (currentPlant) {
        case PlantsType.Compassion:
          return ANIMATIONS.GROWING_COMPASSION_PLANT;
        case PlantsType.Calm:
          return ANIMATIONS.GROWING_CALM_PLANT;
        default:
          return ANIMATIONS.GROWING_COURAGE_PLANT;
      }
    }, [currentPlant]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN}
        style={generalStyles.flex}>
        <Lottie
          source={animation}
          autoPlay
          loop={false}
          style={LottieAbsoluteStyles(-20)}
        />
        <SafeAreaView style={generalStyles.flex}>
          <BottomButtonView
            buttonTitle={t('buttons.back_to_clearing')}
            onSubmit={onSubmit}>
            <View style={styles.container}>
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
