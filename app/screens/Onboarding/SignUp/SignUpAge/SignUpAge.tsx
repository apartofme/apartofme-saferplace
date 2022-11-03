import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, SafeAreaView, View } from 'react-native';
import _ from 'lodash';

import {
  BottomButtonView,
  ExtendedKeyboardAvoidingView,
  ExtendedText,
  ExtendedTextInput,
  ExtendedTextInputType,
  MainHeader,
} from '../../../../components';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { cacheSlice } from '../../../../redux/slices';
import { generalStyles } from '../../../../utils/styles';
import { ISignUpAgeScreenProps } from './SignUpAge.types';
import { styles } from './SignUpAge.styles';
import { SVG } from '../../../../assets/svg';
import { BACKGROUND_IMAGES } from '../../../../assets';
import { COLORS } from '../../../../themes/colors';
import { DatoCMSTextVariables } from '../../../../constants/quest';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const SignUpAgeScreen: React.FC<ISignUpAgeScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const nickname =
    useAppSelector(state => state.cache.auth.child?.nickname) ?? '';
  const [age, setAge] = useState<string>('');

  const onSubmit = useCallback(() => {
    dispatch(cacheSlice.actions.saveSignUpDataChild({ age: +age }));
    navigation.navigate('SignUpAvatar');
  }, [age, dispatch, navigation]);

  const title = t('screens.onboarding.sign_up_age.title');

  const titleArray = _(title)
    .replace(DatoCMSTextVariables.Child, `$${nickname}`)
    .split('|')
    .map(value => {
      if (value.startsWith('$')) {
        return (
          <ExtendedText
            key={value}
            preset="large-title"
            style={generalStyles.primaryOrange}>
            {value.replace('$', '')}
          </ExtendedText>
        );
      }
      return value;
    });

  return (
    <View style={generalStyles.flex}>
      <Image
        source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN}
        style={generalStyles.backgroundImage}
      />
      <SafeAreaView style={generalStyles.flex}>
        <ExtendedKeyboardAvoidingView>
          <MainHeader
            leftIcon={<WhiteBackArrowIcon />}
            onLeftIconPress={navigation.goBack}
          />
          <BottomButtonView
            buttonTitle={t('buttons.next')}
            isArrow={true}
            onSubmit={onSubmit}
            isDisabledButton={!age}
            style={styles.container}>
            <ExtendedText
              preset="large-title"
              style={generalStyles.brilliantWhite}>
              {titleArray}
            </ExtendedText>
            <ExtendedText preset="secondary-text" style={styles.subtitle}>
              {t('screens.onboarding.sign_up_age.description')}
            </ExtendedText>
            <ExtendedTextInput
              value={age}
              onChangeText={setAge}
              type={ExtendedTextInputType.Numeric}
              placeholderTextColor={COLORS.LIGHT_GREY}
              placeholder={t('placeholders.enter_age')}
            />
          </BottomButtonView>
        </ExtendedKeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};
