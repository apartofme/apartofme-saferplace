import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomButtonView, ExtendedText } from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { IWelcomeChildScreenProps } from './WelcomeChild.types';
import { styles } from './WelcomeChild.styles';
import { ImageBackground, View } from 'react-native';
import { BACKGROUND_IMAGES } from '../../../../assets';
import { SVG } from '../../../../assets/svg';

const NadiyaTextIcon = SVG.NadiyaTextIcon;

export const WelcomeChildScreen: React.FC<IWelcomeChildScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const goToSidekickIntro = useCallback(() => {
    navigation.navigate('SidekickIntro');
  }, [navigation]);

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.SPLASH_SCREEN_PARENT_CHILD}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <BottomButtonView
          buttonTitle={t('buttons.signup')}
          onSubmit={goToSidekickIntro}
          style={styles.container}>
          <ExtendedText preset="tertiary-text-medium" style={styles.title}>
            {t('screens.onboarding.welcome.title')}
          </ExtendedText>

          <View style={styles.imageContainer}>
            <NadiyaTextIcon />
          </View>

          <ExtendedText
            preset="tertiary-text-medium"
            style={generalStyles.brilliantWhite}>
            {t('screens.onboarding.welcome.description')}
          </ExtendedText>
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
