import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, ScrollView, View } from 'react-native';

import { ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IConditionsScreenProps } from './Conditions.types';
import { styles } from './Conditions.styles';
import { SVG_ICONS } from '../../../assets/svg';
import { BACKGROUND_IMAGES } from '../../../assets';

export const ConditionsScreen: React.FC<IConditionsScreenProps> = ({
  navigation,
  route,
}) => {
  const { data } = route.params;

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
            {t(data.title)}
          </ExtendedText>
          <ScrollView
            style={generalStyles.flex}
            showsVerticalScrollIndicator={false}>
            <ExtendedText style={styles.subtitle} preset="secondary-text">
              {t(data.subtitle)}
            </ExtendedText>
          </ScrollView>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
