import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, SafeAreaView, View } from 'react-native';
import { Formik } from 'formik';

import {
  BottomButtonView,
  ExtendedKeyboardAvoidingView,
  ExtendedText,
  ExtendedTextInput,
  MainHeader,
} from '../../../../components';
import { BACKGROUND_IMAGES } from '../../../../assets';
import { useAppDispatch } from '../../../../hooks';
import { cacheSlice } from '../../../../redux/slices';
import { generalStyles } from '../../../../utils/styles';
import { ISignUpNicknameScreenProps } from './SignUpNickname.types';
import { styles } from './SignUpNickname.styles';
import { SignUpNicknameValidationSchema } from './SignUpNickname.validation';
import { COLORS } from '../../../../themes/colors';
import { SVG } from '../../../../assets/svg';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

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

  const translationKeyPath = useMemo(
    () => `screens.onboarding.sign_up_nickname.${isChild ? 'child' : 'parent'}`,
    [isChild],
  );

  const background = useMemo(() => {
    if (isChild) {
      return BACKGROUND_IMAGES.ALTERNATIVE_GARDEN;
    }
    return BACKGROUND_IMAGES.GENERIC_ONBOARDING;
  }, [isChild]);

  return (
    <View style={generalStyles.flex}>
      <Image source={background} style={generalStyles.backgroundImage} />
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
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
                isArrow={true}
                style={styles.container}>
                <ExtendedText preset="large-title" style={styles.whiteColor}>
                  {t(`${translationKeyPath}.title`)}
                </ExtendedText>
                <ExtendedText preset="secondary-text" style={styles.subtitle}>
                  {t(`${translationKeyPath}.description`)}
                </ExtendedText>
                <ExtendedTextInput
                  value={values.nickname}
                  onChangeText={handleChange('nickname')}
                  placeholder={t('placeholders.enter_nickname')}
                  placeholderTextColor={COLORS.BRILLIANT_WHITE}
                  maxLength={12}
                />
              </BottomButtonView>
            )}
          </Formik>
        </ExtendedKeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};
