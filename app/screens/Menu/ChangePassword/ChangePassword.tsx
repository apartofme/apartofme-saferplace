import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';
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
import { COLORS } from '../../../themes/colors';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const ChangePasswordScreen: React.FC<IChangePasswordScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const [isActive, setIsActive] = useState(false);

  const onSubmit = useCallback(
    (currentPassword, newPassword) => {
      dispatch(
        userSlice.actions.changePassword({ newPassword, currentPassword }),
      );
    },
    [dispatch],
  );

  return (
    <View style={generalStyles.backgroundImage}>
      <Image
        source={BACKGROUND_IMAGES.MENU}
        style={generalStyles.backgroundImage}
      />

      <SafeAreaView style={generalStyles.flex}>
        <Formik
          initialValues={{
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: '',
          }}
          validationSchema={ChangePasswordValidationSchema}
          onSubmit={onSubmit}>
          {({
            values,
            handleChange,
            handleBlur,
            isValid,
            dirty,
            errors,
            touched,
          }) => (
            <ExtendedKeyboardAvoidingView>
              <BottomButtonView
                buttonTitle={t('buttons.reset_password')}
                isDisabledButton={dirty ? !isValid : true}
                onSubmit={() =>
                  onSubmit(values.currentPassword, values.newPassword)
                }>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  scrollEnabled={isActive}>
                  <MainHeader
                    leftIcon={<WhiteBackArrowIcon />}
                    onLeftIconPress={navigation.goBack}
                  />
                  <View style={styles.container}>
                    <ExtendedText style={styles.title} preset="large-title">
                      {t('screens.menu.change_password.title')}
                    </ExtendedText>
                    <ExtendedText
                      style={styles.subtitle}
                      preset="secondary-text">
                      {t('screens.menu.change_password.description')}
                    </ExtendedText>

                    <View style={styles.mt4}>
                      <ExtendedTextInput
                        maxLength={30}
                        type={ExtendedTextInputType.Password}
                        style={styles.mt16}
                        placeholder={t('placeholders.enter_current_password')}
                        onChangeText={handleChange('currentPassword')}
                        onBlur={handleBlur('currentPassword')}
                        placeholderTextColor={COLORS.LIGHT_GREY}
                        setIsActive={setIsActive}
                        value={values.currentPassword}
                        error={
                          errors.currentPassword ?? touched.currentPassword
                            ? errors.currentPassword
                            : ''
                        }
                      />
                      <ExtendedTextInput
                        maxLength={30}
                        type={ExtendedTextInputType.Password}
                        style={styles.mt16}
                        placeholder={t('placeholders.enter_new_password')}
                        onChangeText={handleChange('newPassword')}
                        onBlur={handleBlur('newPassword')}
                        placeholderTextColor={COLORS.LIGHT_GREY}
                        setIsActive={setIsActive}
                        value={values.newPassword}
                        error={
                          errors.newPassword && touched.newPassword
                            ? errors.newPassword
                            : ''
                        }
                      />
                      <ExtendedTextInput
                        maxLength={30}
                        type={ExtendedTextInputType.Password}
                        style={styles.mt16}
                        placeholder={t('placeholders.confirm_new_password')}
                        onChangeText={handleChange('confirmNewPassword')}
                        onBlur={handleBlur('confirmNewPassword')}
                        placeholderTextColor={COLORS.LIGHT_GREY}
                        setIsActive={setIsActive}
                        value={values.confirmNewPassword}
                        error={
                          errors.confirmNewPassword &&
                          touched.confirmNewPassword
                            ? errors.confirmNewPassword
                            : ''
                        }
                      />
                    </View>
                  </View>
                </ScrollView>
              </BottomButtonView>
            </ExtendedKeyboardAvoidingView>
          )}
        </Formik>
      </SafeAreaView>
    </View>
  );
};
