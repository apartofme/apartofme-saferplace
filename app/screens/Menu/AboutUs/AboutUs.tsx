import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import { ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IAboutUsScreenProps } from './AboutUs.props';
import { styles } from './AboutUs.styles';

export const AboutUsScreen: React.FC<IAboutUsScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <View style={styles.container}>
        <ExtendedText style={styles.title}>
          {t('screens.menu.about_us_screen.title')}
        </ExtendedText>
        <ExtendedText style={styles.subtitle}>
          {t('screens.menu.about_us_screen.sutitle')}
        </ExtendedText>
      </View>
    </SafeAreaView>
  );
};
