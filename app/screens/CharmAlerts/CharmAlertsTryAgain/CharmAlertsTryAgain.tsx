import React from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';

import { ICharmAlertsTryAgainScreenProps } from './CharmAlertsTryAgain.types';
import { styles } from './CharmAlertsTryAgain.styles';
import {
  BottomButtonView,
  ExtendedButton,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { IMAGES } from '../../../assets';
import { generalStyles } from '../../../utils/styles';

export const CharmAlertsTryAgainScreen: React.FC<ICharmAlertsTryAgainScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    return (
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <BottomButtonView
          buttonTitle={t('buttons.play_now')}
          onSubmit={_.noop}
          style={styles.container}>
          <View style={generalStyles.flex}>
            <Image source={IMAGES.LOGO} style={styles.image} />
            <View style={styles.titleContainer}>
              <ExtendedText preset="heading" style={styles.title}>
                {t('screens.charm_alerts.try_again')}
              </ExtendedText>
            </View>
          </View>
        </BottomButtonView>
        <ExtendedButton
          title={t('buttons.dismiss')}
          style={styles.buttonCompleted}
        />
      </SafeAreaView>
    );
  };
