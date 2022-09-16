import _ from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import {
  BottomButtonView,
  ExtendedKeyboardAvoidingView,
  ExtendedText,
  ExtendedTextInput,
  MainHeader,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IChangePasswordScreenProps } from './ChangePassword.types';
import { styles } from './ChangePassword.styles';

export const ChangePasswordScreen: React.FC<IChangePasswordScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={generalStyles.flex}>
      <ExtendedKeyboardAvoidingView>
        <BottomButtonView
          buttonTitle={t('buttons.reset_password')}
          onSubmit={_.noop}>
          <MainHeader
            leftIcon={IMAGES.WHITE_BACK_ARROW}
            onLeftIconPress={navigation.goBack}
          />
          <View style={styles.container}>
            <ExtendedText style={styles.title}>
              Change your password
            </ExtendedText>
            <ExtendedText>
              {t('screens.menu.change_password.description')}
            </ExtendedText>
            <View style={styles.inputContainer}>
              <ExtendedTextInput
                style={styles.input}
                placeholder={t('placeholders.enter_current_password')}
              />
              <ExtendedTextInput
                style={styles.input}
                placeholder={t('placeholders.enter_new_password')}
              />
              <ExtendedTextInput
                style={styles.input}
                placeholder={t('placeholders.confirm_new_password')}
              />
            </View>
          </View>
        </BottomButtonView>
      </ExtendedKeyboardAvoidingView>
    </SafeAreaView>
  );
};
