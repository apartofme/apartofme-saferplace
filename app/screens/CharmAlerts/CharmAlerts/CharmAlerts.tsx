import React from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';

import { ICharmAlertsScreenProps } from './CharmAlerts.types';
import { styles } from './CharmAlerts.styles';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { IMAGES } from '../../../assets';
import { generalStyles } from '../../../utils/styles';

export const CharmAlertsScreen: React.FC<ICharmAlertsScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <BottomButtonView
        buttonTitle={t('buttons.completed_charms')}
        onSubmit={_.noop}
        style={styles.container}>
        <View style={generalStyles.flex}>
          <Image source={IMAGES.LOGO} style={styles.image} />
          <View style={styles.titleContainer}>
            <ExtendedText preset="heading" style={styles.title}>
              {t('screens.charm_alerts.completed')}
            </ExtendedText>
          </View>
        </View>
      </BottomButtonView>
    </SafeAreaView>
  );
};
