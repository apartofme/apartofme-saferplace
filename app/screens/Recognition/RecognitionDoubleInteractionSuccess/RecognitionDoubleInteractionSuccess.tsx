import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';
import Lottie from 'lottie-react-native';

import { BACKGROUND_IMAGES } from '../../../assets';
import { ANIMATIONS, POTION_FILL_ANIMATIONS } from '../../../assets/animations';
import { BottomButtonView } from '../../../components';
import { LottieAbsoluteStyles } from '../../../utils';
import { generalStyles } from '../../../utils/styles';
import { GARDEN_TRANSSITION_DIALOG } from '../RecognitionDialog/RecognitionDialog.data';
import { IRecognitionDoubleInteractionSuccessScreenProps } from './RecognitionDoubleInteractionSuccess.types';
import { SaveRecognitionStackScreenName } from '../../../navigation/navigationAsyncStorage';

export const RecognitionDoubleInteractionSuccessScreen: React.FC<IRecognitionDoubleInteractionSuccessScreenProps> =
  ({ navigation, route }) => {
    const { t } = useTranslation();

    useEffect(() => {
      const saveStackScreenName = async () => {
        await SaveRecognitionStackScreenName(route.name);
      };
      saveStackScreenName();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmitPress = useCallback(() => {
      navigation.push('RecognitionDialog', {
        data: {
          speech: GARDEN_TRANSSITION_DIALOG,
          nextRoute: 'GardenStack',
        },
      });
    }, [navigation]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN}
        style={generalStyles.flex}>
        <Lottie
          source={ANIMATIONS.LEAF_CONFETTI}
          autoPlay
          loop={false}
          style={LottieAbsoluteStyles(-30)}
        />
        <Lottie
          source={POTION_FILL_ANIMATIONS.ElixirOneToElixirTwo}
          loop={false}
          progress={1}
          style={LottieAbsoluteStyles(-30)}
        />
        <SafeAreaView style={generalStyles.flex}>
          <BottomButtonView
            buttonTitle={t('buttons.next')}
            onSubmit={onSubmitPress}
            isArrow
          />
        </SafeAreaView>
      </ImageBackground>
    );
  };
