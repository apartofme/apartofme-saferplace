import React, { useCallback, useState } from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { IJournelSupportScreenProps } from './JournelSupport.types';
import { styles } from './JournelSupport.styles';
import {
  BottomButtonView,
  ExtendedKeyboardAvoidingView,
  ExtendedText,
  MultilineTextInput,
} from '../../../components';
import { CHARMS_BACKGROUNDS } from '../../../assets';
import { generalStyles } from '../../../utils/styles';
import {
  useParsedJSXTextNickname,
  usePositiveNavigateTo,
  useRenderQuestHeader,
} from '../../../hooks';
import { SVG } from '../../../assets/svg';
import { COLORS } from '../../../themes/colors';

const CircleExclamationMarkIcon = SVG.CircleExclamationMarkIcon;

export const JournelSupportScreen: React.FC<IJournelSupportScreenProps> = ({
  route,
}) => {
  const {
    title,
    description,
    buttonTitle,
    backgroundImage,
    crossHeader,
    titleHasNickname,
    positiveNavigatesTo,
    escapeMenuAlternativeNavigateTo,
  } = route.params.data;

  const [inputText, setInputText] = useState<string>('');
  const [isFocus, setIsFocus] = useState(false);
  const { t } = useTranslation();
  const onSubmit = usePositiveNavigateTo(positiveNavigatesTo);

  const Title = useParsedJSXTextNickname({
    text: title,
    textHasNickname: titleHasNickname ?? true,
    preset: 'title',
    style: generalStyles.brilliantWhite,
  });

  const Header = useRenderQuestHeader({
    crossHeader: crossHeader ?? false,
    escapeMenuAlternativeNavigateTo,
  });

  const setFocused = useCallback(() => {
    setIsFocus(!isFocus);
  }, [isFocus]);

  return (
    <ImageBackground
      source={
        CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
      }
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <Header />
        <ExtendedKeyboardAvoidingView>
          <BottomButtonView
            buttonTitle={buttonTitle || t('buttons.next')}
            isArrow={!buttonTitle}
            onSubmit={onSubmit}
            isDisabledButton={!inputText}
            style={styles.container}>
            {title ? (
              <Title />
            ) : (
              <ExtendedText preset="title" style={generalStyles.brilliantWhite}>
                {t('screens.journel.title')}
              </ExtendedText>
            )}
            <View style={styles.inputContainer}>
              <MultilineTextInput
                placeholder={t('placeholders.enter_text')}
                value={inputText}
                onChangeText={setInputText}
                onFocus={setFocused}
                onBlur={setFocused}
              />
            </View>

            <View style={generalStyles.flex} />
            <View style={[generalStyles.aiCenter, isFocus && styles.focused]}>
              <CircleExclamationMarkIcon color={COLORS.PRIMARY_ORANGE} />
              <ExtendedText preset="secondary-text" style={styles.description}>
                {description ?? t('screens.journel.description')}
              </ExtendedText>
            </View>
          </BottomButtonView>
        </ExtendedKeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};
