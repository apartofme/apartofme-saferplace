import React, { useEffect, useMemo } from 'react';
import { Image, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';

import { IElixirAnimationScreenProps } from './ElixirAnimation.types';
import { styles } from './ElixirAnimation.styles';
import { ExtendedText } from '../../../components';
import { IMAGES } from '../../../assets';
import { MixingElixirPhaseType } from '../../../utils/types';

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
    <SafeAreaView style={styles.container}>
      <Image source={IMAGES.LOGO} style={styles.image} />
      <ExtendedText preset="title">{t(title)}</ExtendedText>
    </SafeAreaView>
  );
};
