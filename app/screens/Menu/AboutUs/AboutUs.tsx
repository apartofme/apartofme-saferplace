import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { SVG_ICONS } from '../../../assets/svg';
import { ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IAboutUsScreenProps } from './AboutUs.types';
import { styles } from './AboutUs.styles';
import { BACKGROUND_IMAGES } from '../../../assets';

export const AboutUsScreen: React.FC<IAboutUsScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const WhiteBackArrowIcon = SVG_ICONS.whiteBackArrowIcon;

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.MENU_BACKGROUND}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={navigation.goBack}
        />
        <View style={styles.container}>
          <ExtendedText style={styles.title} preset="large-title">
            {t('screens.menu.about_us.title')}
          </ExtendedText>
          <ExtendedText style={styles.subtitle} preset="secondary-text">
            {t('screens.menu.about_us.description')}
          </ExtendedText>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
