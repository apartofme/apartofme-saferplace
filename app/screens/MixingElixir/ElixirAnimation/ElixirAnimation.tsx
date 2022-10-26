import React, { useEffect, useMemo } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';

import { IElixirAnimationScreenProps } from './ElixirAnimation.types';
import { styles } from './ElixirAnimation.styles';
import { ExtendedText } from '../../../components';
import { BACKGROUND_IMAGES } from '../../../assets';
import { MixingElixirPhaseType } from '../../../utils/types';
import { ElixirThreeIcon } from '../../../assets/images/dummySVG';
import { generalStyles } from '../../../utils/styles';

export const ElixirAnimationScreen: React.FC<IElixirAnimationScreenProps> = ({
  navigation,
  route,
}) => {
  const { phase, selectedPlantArea, isFirstTimeGarden } = route.params;
  const { t } = useTranslation();

  const title = useMemo(() => {
    switch (phase) {
      case MixingElixirPhaseType.Mix:
        return 'screens.mixing_exixir.elixir_animaion.mix';
      case MixingElixirPhaseType.Open:
        return 'screens.mixing_exixir.elixir_animaion.open';
      default:
        return 'screens.mixing_exixir.elixir_animaion.pour';
    }
  }, [phase]);

  const animation = useMemo(() => {
    switch (phase) {
      case MixingElixirPhaseType.Mix:
        return <ElixirThreeIcon />;
      case MixingElixirPhaseType.Open:
        return <ElixirThreeIcon />;
      default:
        return <ElixirThreeIcon />;
    }
  }, [phase]);

  useEffect(() => {
    setTimeout(() => {
      if (phase < MixingElixirPhaseType.Pour) {
        navigation.push('ElixirInstruction', {
          phase: phase + 1,
          selectedPlantArea,
          isFirstTimeGarden,
        });
        return;
      }

      navigation.push('MixingElixirSuccess', {
        selectedPlantArea,
        isFirstTimeGarden,
      });
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN_BACKGROUND}
      style={generalStyles.flex}>
      <SafeAreaView style={styles.container}>
        {animation}
        <ExtendedText
          preset="title"
          style={[generalStyles.brilliantWhiteCenter, styles.title]}>
          {t(title)}
        </ExtendedText>
      </SafeAreaView>
    </ImageBackground>
  );
};
