import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

import { IMAGES } from '../../../../assets';
import {
  BottomButtonView,
  ExtendedKeyboardAvoidingView,
  ExtendedText,
  ExtendedTextInput,
  ExtendedTextInputType,
  MainHeader,
} from '../../../../components';
import { useAppDispatch } from '../../../../hooks';
import { cacheSlice } from '../../../../redux/slices';
import { generalStyles } from '../../../../utils/styles';
import { ISignUpAgeScreenProps } from './SignUpAge.types';
import { styles } from './SignUpAge.styles';

export const SignUpAgeScreen: React.FC<ISignUpAgeScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [age, setAge] = useState<string>('');

  const onSubmit = useCallback(() => {
    dispatch(cacheSlice.actions.saveSignUpDataChild({ age }));
    navigation.navigate('SignUpAvatar');
  }, [age, dispatch, navigation]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <ExtendedKeyboardAvoidingView>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <BottomButtonView
          buttonTitle={t('buttons.next')}
          onSubmit={onSubmit}
          isDisabledButton={!age}
          style={styles.container}>
          <ExtendedText preset="large-title">
            {t('screens.onboarding.sign_up_age.title')}
          </ExtendedText>
          <ExtendedText preset="secondary-text" style={styles.subtitle}>
            {t('screens.onboarding.sign_up_age.description')}
          </ExtendedText>
          <ExtendedTextInput
            value={age}
            onChangeText={setAge}
            type={ExtendedTextInputType.Numeric}
            placeholder={t('placeholders.enter_age')}
          />
        </BottomButtonView>
      </ExtendedKeyboardAvoidingView>
    </SafeAreaView>
  );
};
