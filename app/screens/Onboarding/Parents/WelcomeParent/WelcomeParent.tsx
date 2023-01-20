import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import {
  BottomButtonView,
  ExtendedButton,
  ExtendedText,
} from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { IWelcomeParentScreenProps } from './WelcomeParent.types';
import { styles } from './WelcomeParent.styles';
import { BACKGROUND_IMAGES } from '../../../../assets';
import { SVG } from '../../../../assets/svg';
import { useAppDispatch, useMount } from '../../../../hooks';
import { AUDIO } from '../../../../constants/audio';
import { cacheSlice } from '../../../../redux/slices';

const LogoIcon = SVG.NadiyaTextIcon;

export const WelcomeParentScreen: React.FC<IWelcomeParentScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const onSignUpPress = useCallback(() => {
    navigation.navigate('LanguageSelection');
  }, [navigation]);

  const onLoginPress = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  useMount(() => {
    dispatch(cacheSlice.actions.setBackgroundAudio(AUDIO.FOREST_AMBIENCE_LOOP));
  });

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.SPLASHSCREEN_ADULT}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <BottomButtonView
          buttonTitle={t('buttons.start')}
          onSubmit={onSignUpPress}
          style={styles.container}>
          <ExtendedText
            preset="tertiary-text-medium"
            style={generalStyles.brilliantWhite}>
            {t('screens.onboarding.welcome.title')}
          </ExtendedText>

          <View style={styles.imageContainer}>
            <LogoIcon />
          </View>

          <ExtendedText
            preset="tertiary-text-medium"
            style={generalStyles.brilliantWhite}>
            {t('screens.onboarding.welcome.description')}
          </ExtendedText>
        </BottomButtonView>
        <ExtendedButton
          onPress={onLoginPress}
          title={t('buttons.log_in')}
          preset="border"
          style={styles.signUpButton}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};
