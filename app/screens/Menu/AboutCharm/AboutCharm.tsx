import _ from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { IMAGES } from '../../../assets';

import { ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { ABOUT_CHARMS_SCREEN_DATA } from './AboutCharm.data';
import { IAboutCharmScreenProps } from './AboutCharm.props';
import { styles } from './AboutCharm.styles';

export const AboutCharmScreen: React.FC<IAboutCharmScreenProps> = ({
  route,
}) => {
  const { type } = route.params;

  const { t } = useTranslation();

  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <MainHeader
        // TODO: add right icon
        leftIcon={IMAGES.WHITE_BACK_ARROW}
      />

      {_.map(ABOUT_CHARMS_SCREEN_DATA, item => {
        return (
          <View key={`main-menu-${item.type}`}>
            <ExtendedText style={styles.title}>{t(item.title)}</ExtendedText>
            <ScrollView>
              <ExtendedText style={styles.subtitle}>
                {t(item.subtitle)}
              </ExtendedText>
            </ScrollView>
          </View>
        );
      })}
    </SafeAreaView>
  );
};
