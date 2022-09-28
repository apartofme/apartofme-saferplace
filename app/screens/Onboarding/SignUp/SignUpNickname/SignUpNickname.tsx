import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';
import { Formik } from 'formik';

import {
  BottomButtonView,
  ExtendedKeyboardAvoidingView,
  ExtendedText,
  ExtendedTextInput,
  MainHeader,
} from '../../../../components';
import { IMAGES } from '../../../../assets';
import { useAppDispatch } from '../../../../hooks';
import { cacheSlice } from '../../../../redux/slices';
import { generalStyles } from '../../../../utils/styles';
import { ISignUpNicknameScreenProps } from './SignUpNickname.types';
import { styles } from './SignUpNickname.styles';
import { SignUpNicknameValidationSchema } from './SignUpNickname.validation';

export const SignUpNicknameScreen: React.FC<ISignUpNicknameScreenProps> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isChild = route.params?.isChild;

  const onSubmit = useCallback(
    nickname => {
      if (isChild) {
        dispatch(cacheSlice.actions.saveSignUpDataChild({ nickname }));
        navigation.navigate('SignUpAge');
      } else {
        dispatch(cacheSlice.actions.saveSignUpDataParent({ nickname }));
        navigation.navigate('SignUpAvatar');
      }
    },
    [dispatch, isChild, navigation],
  );

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <ExtendedKeyboardAvoidingView>
        <Formik
          initialValues={{ nickname: '' }}
          validationSchema={SignUpNicknameValidationSchema}
          onSubmit={onSubmit}>
          {({ values, dirty, isValid, handleChange }) => (
            <BottomButtonView
              buttonTitle={t('buttons.next')}
              onSubmit={() => onSubmit(values.nickname)}
              isDisabledButton={dirty ? !isValid : true}
              style={styles.container}>
              <ExtendedText preset="large-title">
                {t('screens.onboarding.sign_up_nickname.title')}
              </ExtendedText>
              <ExtendedText preset="secondary-text" style={styles.subtitle}>
                {t('screens.onboarding.sign_up_nickname.description')}
              </ExtendedText>
              <ExtendedTextInput
                value={values.nickname}
                onChangeText={handleChange('nickname')}
                placeholder={t('placeholders.enter_nickname')}
              />
            </BottomButtonView>
          )}
        </Formik>
      </ExtendedKeyboardAvoidingView>
    </SafeAreaView>
  );
};
