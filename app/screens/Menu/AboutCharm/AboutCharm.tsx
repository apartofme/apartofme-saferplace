import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, ScrollView } from 'react-native';
import { IMAGES } from '../../../assets';

import { ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IAboutCharmScreenProps } from './AboutCharm.props';
import { styles } from './AboutCharm.styles';

export const AboutCharmScreen: React.FC<IAboutCharmScreenProps> = ({
  route,
}) => {
  const { titleKey, subtitleKey } = route.params;

  const { t } = useTranslation();

  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <MainHeader
        // TODO: add right icon
        leftIcon={IMAGES.WHITE_BACK_ARROW}
      />
      <ExtendedText style={styles.title}>{t(titleKey)}</ExtendedText>
      <ScrollView>
        <ExtendedText style={styles.subtitle}>{t(subtitleKey)}</ExtendedText>
      </ScrollView>
    </SafeAreaView>
  );
};
