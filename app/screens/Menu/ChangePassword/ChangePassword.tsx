import React, { useCallback, useState } from 'react';
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
import { useAppDispatch } from '../../../hooks';
import { userSlice } from '../../../redux/slices';

export const ChangePasswordScreen: React.FC<IChangePasswordScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const [currentPassword, setCerrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const dispatch = useAppDispatch();

  const onSubmit = useCallback(() => {
    dispatch(
      userSlice.actions.changePassword({ newPassword, currentPassword }),
    );
  }, [currentPassword, dispatch, newPassword]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <ExtendedKeyboardAvoidingView>
        <BottomButtonView
          buttonTitle={t('buttons.reset_password')}
          onSubmit={onSubmit}>
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
                onChangeText={setCerrentPassword}
              />
              <ExtendedTextInput
                style={styles.input}
                placeholder={t('placeholders.enter_new_password')}
                onChangeText={setNewPassword}
              />
              <ExtendedTextInput
                style={styles.input}
                placeholder={t('placeholders.confirm_new_password')}
                onChangeText={setConfirmNewPassword}
              />
            </View>
          </View>
        </BottomButtonView>
      </ExtendedKeyboardAvoidingView>
    </SafeAreaView>
  );
};
