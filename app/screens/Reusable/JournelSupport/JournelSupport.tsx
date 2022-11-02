import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Image, SafeAreaView, View } from 'react-native';
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
import { ScrollView } from 'react-native-gesture-handler';

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

  const [isInputFocus, setInputIsFocus] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd();
  }, [isInputFocus]);

  return (
    <View style={generalStyles.flex}>
      <Image
        source={
          CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
        }
        style={generalStyles.backgroundImage}
      />
      <SafeAreaView style={generalStyles.flex}>
        <ExtendedKeyboardAvoidingView>
          <BottomButtonView
            buttonTitle={buttonTitle || t('buttons.next')}
            isArrow={!buttonTitle}
            onSubmit={onSubmit}
            isDisabledButton={!inputText}>
            <ScrollView
              ref={scrollViewRef}
              showsVerticalScrollIndicator={false}>
              <Header />
              <View style={styles.container}>
                {title ? (
                  <Title />
                ) : (
                  <ExtendedText
                    preset="title"
                    style={generalStyles.brilliantWhite}>
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
                    setIsInputFocus={setInputIsFocus}
                  />
                </View>
              </View>
            </ScrollView>
            <View style={[styles.supportContainer, isFocus && styles.focused]}>
              <CircleExclamationMarkIcon color={COLORS.PRIMARY_ORANGE} />
              <ExtendedText preset="secondary-text" style={styles.description}>
                {description ?? t('screens.journel.description')}
              </ExtendedText>
            </View>
          </BottomButtonView>
        </ExtendedKeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};
