import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import { Formik } from 'formik';

import {
  BottomButtonView,
  ExtendedKeyboardAvoidingView,
  ExtendedText,
  ExtendedTextInput,
  ExtendedTextInputType,
  MainHeader,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IChangePasswordScreenProps } from './ChangePassword.types';
import { styles } from './ChangePassword.styles';
import { useAppDispatch } from '../../../hooks';
import { userSlice } from '../../../redux/slices';
import { ChangePasswordValidationSchema } from './ChangePassword.validation';
import { SVG } from '../../../assets/svg';
import { BACKGROUND_IMAGES } from '../../../assets';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const ChangePasswordScreen: React.FC<IChangePasswordScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    (currentPassword, newPassword) => {
      dispatch(
        userSlice.actions.changePassword({ newPassword, currentPassword }),
      );
    },
    [dispatch],
  );

  return (
    <ImageBackground source={BACKGROUND_IMAGES.MENU} style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <Formik
          initialValues={{
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: '',
          }}
          validationSchema={ChangePasswordValidationSchema}
          onSubmit={onSubmit}>
          {({ values, handleChange, isValid, dirty, errors }) => (
            <ExtendedKeyboardAvoidingView>
              <BottomButtonView
                buttonTitle={t('buttons.reset_password')}
                isDisabledButton={dirty ? !isValid : true}
                onSubmit={() =>
                  onSubmit(values.currentPassword, values.newPassword)
                }>
                <MainHeader
                  leftIcon={<WhiteBackArrowIcon />}
                  onLeftIconPress={navigation.goBack}
                />
                <View style={styles.container}>
                  <ExtendedText style={styles.title} preset="large-title">
                    {t('screens.menu.change_password.title')}
                  </ExtendedText>
                  <ExtendedText style={styles.subtitle} preset="secondary-text">
                    {t('screens.menu.change_password.description')}
                  </ExtendedText>

                  <View style={styles.inputContainer}>
                    <ExtendedTextInput
                      error={errors.currentPassword}
                      type={ExtendedTextInputType.Password}
                      style={styles.input}
                      placeholder={t('placeholders.enter_current_password')}
                      onChangeText={handleChange('currentPassword')}
                      value={values.currentPassword}
                    />
                    <ExtendedTextInput
                      error={errors.newPassword}
                      type={ExtendedTextInputType.Password}
                      style={styles.input}
                      placeholder={t('placeholders.enter_new_password')}
                      onChangeText={handleChange('newPassword')}
                      value={values.newPassword}
                    />
                    <ExtendedTextInput
                      error={errors.confirmNewPassword}
                      type={ExtendedTextInputType.Password}
                      style={styles.input}
                      placeholder={t('placeholders.confirm_new_password')}
                      onChangeText={handleChange('confirmNewPassword')}
                      value={values.confirmNewPassword}
                    />
                  </View>
                </View>
              </BottomButtonView>
            </ExtendedKeyboardAvoidingView>
          )}
        </Formik>
      </SafeAreaView>
    </ImageBackground>
  );
};
