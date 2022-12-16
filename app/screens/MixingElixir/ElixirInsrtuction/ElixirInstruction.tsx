import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import Lottie from 'lottie-react-native';

import { BACKGROUND_IMAGES } from '../../../assets';
import { ANIMATIONS } from '../../../assets/animations';
import { BottomButtonView, ExtendedText } from '../../../components';
import { LottieAbsoluteStyles } from '../../../utils';
import { generalStyles } from '../../../utils/styles';
import { MixingElixirPhaseType } from '../../../utils/types';
import { styles } from './ElixirInstruction.styles';
import { IElixirInstructionScreenProps } from './ElixirInstruction.types';

export const ElixirInstructionScreen: React.FC<IElixirInstructionScreenProps> =
  ({ navigation, route }) => {
    const { phase, selectedPlantArea, isFirstTimeGarden } = route.params;

    const { t } = useTranslation();

    const titleKey = useMemo(() => {
      switch (phase) {
        case MixingElixirPhaseType.Mix:
          return 'screens.mixing_exixir.elixir_instruction.mix';
        case MixingElixirPhaseType.Open:
          return 'screens.mixing_exixir.elixir_instruction.open';
        default:
          return 'screens.mixing_exixir.elixir_instruction.pour';
          break;
      }
    }, [phase]);

    const buttonTitleKey = useMemo(() => {
      switch (phase) {
        case MixingElixirPhaseType.Mix:
          return 'buttons.tap_to_mix';
        case MixingElixirPhaseType.Open:
          return 'buttons.tap_to_open';
        default:
          return 'buttons.tap_to_pour';
          break;
      }
    }, [phase]);

    const onSubmit = useCallback(() => {
      navigation.push('ElixirAnimation', {
        phase,
        selectedPlantArea,
        isFirstTimeGarden,
      });
    }, [navigation, phase, selectedPlantArea, isFirstTimeGarden]);

    const animation = useMemo(() => {
      switch (phase) {
        case MixingElixirPhaseType.Mix:
          return (
            <Lottie
              source={ANIMATIONS.POTION_MIX}
              progress={0}
              loop={false}
              style={LottieAbsoluteStyles()}
            />
          );
        case MixingElixirPhaseType.Open:
          return (
            <Lottie
              source={ANIMATIONS.POTION_OPEN_BOTTLE}
              progress={0}
              loop={false}
              style={LottieAbsoluteStyles()}
            />
          );
        default:
          return (
            <Lottie
              source={ANIMATIONS.POTION_OPEN_BOTTLE}
              progress={1}
              loop={false}
              style={LottieAbsoluteStyles()}
            />
          );
      }
    }, [phase]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          {animation}
          <BottomButtonView buttonTitle={t(buttonTitleKey)} onSubmit={onSubmit}>
            <View style={styles.container}>
              <ExtendedText
                preset="title"
                style={[generalStyles.brilliantWhiteCenter, styles.title]}>
                {t(titleKey)}
              </ExtendedText>
            </View>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
