import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, Pressable, SafeAreaView, View } from 'react-native';
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

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const DeleteAccountScreen: React.FC<IDeleteAccountScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const [isActive, setIsActive] = useState(false);

  const onSubmit = useCallback(
    password => {
      dispatch(userSlice.actions.deleteAccount(password));
    },
    [dispatch],
  );

  return (
    <ImageBackground source={BACKGROUND_IMAGES.MENU} style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <Formik
          initialValues={{
            password: '',
          }}
          validationSchema={DeleteAccountValidationSchema}
          onSubmit={onSubmit}>
          {({ values, handleChange, isValid, dirty, errors }) => (
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
                    error={errors.password}
                    type={ExtendedTextInputType.Password}
                    style={styles.input}
                    placeholder={t('placeholders.enter_current_password')}
                    onChangeText={handleChange('password')}
                    value={values.password}
                    placeholderTextColor={COLORS.LIGHT_GREY}
                    setIsActive={setIsActive}
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
    </ImageBackground>
  );
};
