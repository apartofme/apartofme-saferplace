import React, { useCallback } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import Lottie from 'lottie-react-native';

import { BottomButtonView, ExtendedText } from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { ILoadingScreenProps } from './LoadingScreen.types';
import { styles } from './LoadingScreen.styles';
import { BACKGROUND_IMAGES } from '../../../../assets';
import { ANIMATIONS } from '../../../../assets/animations';
import { LottieStyles } from '../../../../utils';

export const LoadingScreen: React.FC<ILoadingScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const onSubmit = useCallback(() => {
    navigation.navigate('WelcomeChild');
  }, [navigation]);

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.SPLASH_SCREEN_PARENT_CHILD}
      style={generalStyles.flex}>
      <Lottie
        source={ANIMATIONS.LOADING_FOREST}
        autoPlay
        loop
        style={LottieStyles(230)}
      />
      <SafeAreaView style={generalStyles.flex}>
        <BottomButtonView
          style={styles.container}
          buttonTitle={t('buttons.we_ready')}
          onSubmit={onSubmit}>
          <ExtendedText style={styles.title} preset="large-title">
            {t('screens.onboarding.joint.loading.title')}
          </ExtendedText>
          <ExtendedText style={styles.subtitle} preset="secondary-text">
            {t('screens.onboarding.joint.loading.description')}
          </ExtendedText>
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
