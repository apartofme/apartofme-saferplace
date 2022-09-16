import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { styles } from './Alert.styles';
import { IAlertScreenProps } from './Alert.types';

export const AlertScreen: React.FC<IAlertScreenProps> = ({
  navigation,
  route,
}) => {
  const { titleKey, onSubmit } = route.params.data;

  const { t } = useTranslation();

  return (
    <SafeAreaView style={generalStyles.flex}>
      <BottomButtonView buttonTitle={t('buttons.ok')} onSubmit={onSubmit}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <View style={styles.container}>
          <ExtendedText style={styles.title}>{t(titleKey)}</ExtendedText>
        </View>
      </BottomButtonView>
    </SafeAreaView>
  );
};
