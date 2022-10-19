import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, ScrollView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import { ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IConditionsScreenProps } from './Conditions.types';
import { styles } from './Conditions.styles';

export const ConditionsScreen: React.FC<IConditionsScreenProps> = ({
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
