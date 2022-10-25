import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { SVG } from '../../../assets/svg';
import { ExtendedButton, ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { styles } from './Alert.styles';
import { IAlertScreenProps } from './Alert.types';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;
const AlertGuideIcon = SVG.AlertGuideIcon;

export const AlertScreen: React.FC<IAlertScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.modalContainer}>
      <MainHeader
        leftIcon={<WhiteBackArrowIcon />}
        onLeftIconPress={navigation.goBack}
      />
      <View style={generalStyles.aiCenter}>
        <View style={styles.imageContainer}>
          <AlertGuideIcon />
        </View>
        <View style={styles.container}>
          <ExtendedText style={styles.title} preset="heading">
            {t('screens.alert.title')}
          </ExtendedText>
          <ExtendedText style={styles.subtitle} preset="secondary-text">
            {t('screens.alert.description')}
          </ExtendedText>
          <ExtendedButton
            title={t('buttons.ok').toUpperCase()}
            onPress={navigation.goBack}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
