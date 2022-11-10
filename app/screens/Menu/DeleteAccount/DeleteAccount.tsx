import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNetInfo } from '@react-native-community/netinfo';
import { Image, Pressable, SafeAreaView, View } from 'react-native';
import { Formik } from 'formik';

import {
  ExtendedButton,
  ExtendedKeyboardAvoidingView,
  ExtendedText,
  ExtendedTextInput,
  ExtendedTextInputType,
  MainHeader,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IDeleteAccountScreenProps } from './DeleteAccount.types';
import { styles } from './DeleteAccount.styles';
import { useAppDispatch } from '../../../hooks';
import { userSlice } from '../../../redux/slices';
import { DeleteAccountValidationSchema } from './DeleteAccount.validation';
import { SVG } from '../../../assets/svg';
import { BACKGROUND_IMAGES } from '../../../assets';
import { COLORS } from '../../../themes/colors';
import { showInternetErrorAlert } from '../../../utils';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const DeleteAccountScreen: React.FC<IDeleteAccountScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const netInfo = useNetInfo();

  const isConnected = useMemo(() => netInfo.isConnected, [netInfo.isConnected]);

  const [isActive, setIsActive] = useState(false);

  const onSubmit = useCallback(
    password => {
      if (isConnected) {
        dispatch(userSlice.actions.deleteAccount(password));
        return;
      }
      showInternetErrorAlert(
        t('errors.network.title'),
        t('errors.network.description'),
      );
    },
    [dispatch, isConnected, t],
  );

  return (
    <View style={generalStyles.flex}>
      <Image
        source={BACKGROUND_IMAGES.MENU}
        style={generalStyles.backgroundImage}
      />
      <SafeAreaView style={generalStyles.flex}>
        <Formik
          initialValues={{
            password: '',
          }}
          validationSchema={DeleteAccountValidationSchema}
          onSubmit={onSubmit}>
          {({
            values,
            handleChange,
            handleBlur,
            isValid,
            dirty,
            touched,
            errors,
          }) => (
            <ExtendedKeyboardAvoidingView>
              <MainHeader
                leftIcon={<WhiteBackArrowIcon />}
                onLeftIconPress={navigation.goBack}
              />
              <View style={styles.container}>
                <ExtendedText style={styles.title} preset="large-title">
                  {t('screens.menu.delete_account.title')}
                </ExtendedText>
                <ExtendedText style={styles.subtitle} preset="secondary-text">
                  {t('screens.menu.delete_account.description')}
                </ExtendedText>

                <View style={styles.inputContainer}>
                  <ExtendedTextInput
                    maxLength={30}
                    type={ExtendedTextInputType.PasswordToggle}
                    style={styles.input}
                    placeholder={t('placeholders.enter_current_password')}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholderTextColor={COLORS.LIGHT_GREY}
                    setIsActive={setIsActive}
                    error={
                      errors.password && touched.password ? errors.password : ''
                    }
                  />
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <ExtendedButton
                  title={t('buttons.delete_account')}
                  onPress={() => onSubmit(values.password)}
                  disabled={dirty ? !isValid : true}
                  preset="destructive"
                />
              </View>
              <Pressable style={isActive && styles.displayNone}>
                <ExtendedText style={styles.forgotPassword} preset="body-bold">
                  {t('buttons.forgot_password')}
                </ExtendedText>
              </Pressable>
            </ExtendedKeyboardAvoidingView>
          )}
        </Formik>
      </SafeAreaView>
    </View>
  );
};
