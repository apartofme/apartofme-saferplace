import _ from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import {
  BottomButtonView,
  ExtendedText,
  ExtendedTextInput,
  MainHeader,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IChangePasswordScreenProps } from './ChangePassword.props';
import { styles } from './ChangePassword.styles';

export const ChangePasswordScreen: React.FC<IChangePasswordScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <BottomButtonView
        buttonTitle={t('screens.menu.change_password.reset_password')}
        onSubmit={_.noop}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <View style={styles.container}>
          <ExtendedText style={styles.title}>Change your password</ExtendedText>
          <ExtendedText>
            {t('screens.menu.change_password.subtitle')}
          </ExtendedText>
          <View style={styles.inputContainer}>
            <ExtendedTextInput
              style={styles.input}
              placeholder={t(
                'screens.menu.change_password.input_placeholder.current_password',
              )}
            />
            <ExtendedTextInput
              style={styles.input}
              placeholder={t(
                'screens.menu.change_password.input_placeholder.new_password',
              )}
            />
            <ExtendedTextInput
              style={styles.input}
              placeholder={t(
                'screens.menu.change_password.input_placeholder.confirm_new_password',
              )}
            />
          </View>
        </View>
      </BottomButtonView>
    </SafeAreaView>
  );
};
