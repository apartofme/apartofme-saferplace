import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, ScrollView, View } from 'react-native';

import { ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IAboutCharmScreenProps } from './AboutCharm.types';
import { styles } from './AboutCharm.styles';
import { SVG, SVG_CHARM_ILLUSTRATIONS } from '../../../assets/svg';
import { BACKGROUND_IMAGES } from '../../../assets';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const AboutCharmScreen: React.FC<IAboutCharmScreenProps> = ({
  navigation,
  route,
}) => {
  const { data } = route.params;

  const { t } = useTranslation();

  const Icon = SVG_CHARM_ILLUSTRATIONS[data.iconKey];

  return (
    <ImageBackground source={BACKGROUND_IMAGES.MENU} style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={navigation.goBack}
        />
        <View style={styles.container}>
          <ScrollView
            style={generalStyles.flex}
            showsVerticalScrollIndicator={false}>
            <ExtendedText style={styles.title}>{t(data.title)}</ExtendedText>
            <ExtendedText style={styles.subtitle}>
              {t(data.subtitle)}
            </ExtendedText>
            <View style={styles.imageContainer}>
              <Icon />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
