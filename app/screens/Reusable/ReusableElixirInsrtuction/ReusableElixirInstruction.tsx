import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import Lottie from 'lottie-react-native';

import { BACKGROUND_IMAGES } from '../../../assets';
import { BottomButtonView, ExtendedText } from '../../../components';
import { useNavigateNextQuest } from '../../../hooks';
import { generalStyles } from '../../../utils/styles';
import { styles } from './ReusableElixirInstruction.styles';
import { IReusableElixirInstructionScreenProps } from './ReusableElixirInstruction.types';
import { ELIXIR_ANIMATION_TYPE } from '../../../constants/elixir';
import { ANIMATIONS } from '../../../assets/animations';
import { LottieAbsoluteStyles } from '../../../utils';

export const ReusableElixirInstructionScreen: React.FC<IReusableElixirInstructionScreenProps> =
  ({ route }) => {
    const { title, description, buttonTitle } = route.params.data;
    const { t } = useTranslation();
    const navigateToNextQuest = useNavigateNextQuest();

    const animation = useMemo(() => {
      switch (description) {
        case ELIXIR_ANIMATION_TYPE.Mix:
          return (
            <Lottie
              source={ANIMATIONS.POTION_MIX}
              progress={0}
              loop={false}
              style={LottieAbsoluteStyles()}
            />
          );
        case ELIXIR_ANIMATION_TYPE.Open:
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
    }, [description]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          {animation}
          <BottomButtonView
            buttonTitle={buttonTitle ?? t('buttons.next')}
            onSubmit={navigateToNextQuest}>
            <View style={styles.container}>
              <ExtendedText
                preset="title"
                style={[generalStyles.brilliantWhiteCenter, styles.title]}>
                {title}
              </ExtendedText>
            </View>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
