import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

import { IMAGES } from '../../../assets';
import { ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IAboutCharmScreenProps } from './AboutCharm.types';
import { styles } from './AboutCharm.styles';

export const AboutCharmScreen: React.FC<IAboutCharmScreenProps> = ({
  navigation,
  route,
}) => {
  const { data } = route.params;

  const { t } = useTranslation();

  return (
    <ImageBackground source={IMAGES.MENU_BACKGROUND} style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
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
            <Image source={data.image} style={styles.image} />
          </ScrollView>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
