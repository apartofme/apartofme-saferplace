import React, { useCallback } from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Lottie from 'lottie-react-native';

import { BottomButtonView, ExtendedText } from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { ILoadingScreenProps } from './LoadingScreen.types';
import { styles } from './LoadingScreen.styles';
import { BACKGROUND_IMAGES } from '../../../../assets';
import { ANIMATIONS } from '../../../../assets/animations';
import { LottieAbsoluteStyles } from '../../../../utils';
import { JewelIcon } from '../../../../assets/svg/JewelIcon';
import { useAppDispatch, useMount } from '../../../../hooks';
import { cacheSlice } from '../../../../redux/slices';
import { AUDIO } from '../../../../constants/audio';

export const LoadingScreen: React.FC<ILoadingScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const onSubmit = useCallback(() => {
    navigation.navigate('WelcomeChild');
  }, [navigation]);

  useMount(() => {
    dispatch(cacheSlice.actions.setBackgroundAudio(AUDIO.FOREST_AMBIENCE_LOOP));
  });

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.SPLASH_SCREEN_PARENT_CHILD}
      style={generalStyles.flex}>
      <Lottie
        source={ANIMATIONS.LOADING_FOREST}
        autoPlay
        loop
        style={LottieAbsoluteStyles()}
      />
      <SafeAreaView style={generalStyles.flex}>
        <View style={styles.icon}>
          <JewelIcon />
        </View>
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
