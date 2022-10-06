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
import { IChangePasswordSuccessScreenProps } from './ChangePasswordSuccess.types';
import { styles } from './ChangePasswordSuccess.styles';

export const ChangePasswordSuccessScreen: React.FC<IChangePasswordSuccessScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    return (
      <SafeAreaView style={generalStyles.whFlex}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        {/* // TODO: change for correct function */}
        <BottomButtonView
          buttonTitle={t('buttons.back')}
          onSubmit={navigation.goBack}>
          <View style={styles.container}>
            <ExtendedText style={styles.title}>
              {t('screens.menu.change_password.success.title')}
            </ExtendedText>
            <ExtendedText style={styles.subtitle}>
              {t('screens.menu.change_password.success.description')}
            </ExtendedText>
          </View>
        </BottomButtonView>
      </SafeAreaView>
    );
  };
