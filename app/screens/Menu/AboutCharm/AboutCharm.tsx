import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, ScrollView, View } from 'react-native';

import { ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IAboutCharmScreenProps } from './AboutCharm.types';
import { styles } from './AboutCharm.styles';
import { SVG_ICONS } from '../../../assets/svg';
import { BACKGROUND_IMAGES } from '../../../assets';

const WhiteBackArrowIcon = SVG_ICONS.WhiteBackArrowIcon;

export const AboutCharmScreen: React.FC<IAboutCharmScreenProps> = ({
  navigation,
  route,
}) => {
  const { data } = route.params;

  const { t } = useTranslation();

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
          <ExtendedText style={styles.title}>{t(data.title)}</ExtendedText>
          <ScrollView
            style={generalStyles.flex}
            showsVerticalScrollIndicator={false}>
            <ExtendedText style={styles.subtitle}>
              {t(data.subtitle)}
            </ExtendedText>
            <View style={styles.imageContainer}>
              <data.IconSvgComponent />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
