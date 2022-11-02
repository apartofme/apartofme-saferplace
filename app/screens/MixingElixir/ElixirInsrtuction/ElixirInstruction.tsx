import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { BACKGROUND_IMAGES } from '../../../assets';
import { ElixirThreeIcon } from '../../../assets/svg/garden';
import { BottomButtonView, ExtendedText } from '../../../components';
import { useMount } from '../../../hooks';
import { generalStyles } from '../../../utils/styles';
import { MixingElixirPhaseType } from '../../../utils/types';
import { styles } from './ElixirInstruction.styles';
import { IElixirInstructionScreenProps } from './ElixirInstruction.types';

export const ElixirInstructionScreen: React.FC<IElixirInstructionScreenProps> =
  ({ navigation, route }) => {
    const { phase, selectedPlantArea, isFirstTimeGarden } = route.params;

    const [titleKey, setTitleKey] = useState('');
    const [buttonTitleKey, setButtonTitleKey] = useState('');

    const { t } = useTranslation();

    useMount(() => {
      switch (phase) {
        case MixingElixirPhaseType.Mix:
          setTitleKey('screens.mixing_exixir.elixir_instruction.mix');
          setButtonTitleKey('buttons.tap_to_mix');
          break;
        case MixingElixirPhaseType.Open:
          setTitleKey('screens.mixing_exixir.elixir_instruction.open');
          setButtonTitleKey('buttons.tap_to_open');
          break;
        default:
          setTitleKey('screens.mixing_exixir.elixir_instruction.pour');
          setButtonTitleKey('buttons.tap_to_pour');
          break;
      }
    });

    const onSubmit = useCallback(() => {
      navigation.push('ElixirAnimation', {
        phase,
        selectedPlantArea,
        isFirstTimeGarden,
      });
    }, [navigation, phase, selectedPlantArea, isFirstTimeGarden]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <BottomButtonView buttonTitle={t(buttonTitleKey)} onSubmit={onSubmit}>
            <View style={styles.container}>
              <ExtendedText
                preset="title"
                style={[generalStyles.brilliantWhiteCenter, styles.title]}>
                {t(titleKey)}
              </ExtendedText>
              <ElixirThreeIcon />
            </View>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
