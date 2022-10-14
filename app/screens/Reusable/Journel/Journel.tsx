import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { IJournelScreenProps } from './Journel.types';
import { styles } from './Journel.styles';
import {
  BottomButtonView,
  ExtendedKeyboardAvoidingView,
  ExtendedText,
  MultilineTextInput,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import {
  useParsedJSXTextNickname,
  usePositiveNavigateTo,
  useRenderQuestHeader,
} from '../../../hooks';

export const JournelScreen: React.FC<IJournelScreenProps> = ({ route }) => {
  const {
    title,
    description,
    buttonTitle,
    titleHasNickname,
    crossHeader,
    positiveNavigatesTo,
    escapeMenuAlternativeNavigateTo,
  } = route.params.data;

  const [inputText, setInputText] = useState<string>('');
  const { t } = useTranslation();
  const onSubmit = usePositiveNavigateTo(positiveNavigatesTo);

  const Title = useParsedJSXTextNickname({
    text: title,
    textHasNickname: titleHasNickname ?? true,
    preset: 'title',
    // TODO: remove
    variableStyle: { color: '#00dbc0' },
  });

  const Header = useRenderQuestHeader({
    crossHeader: crossHeader ?? false,
    escapeMenuAlternativeNavigateTo,
  });

  return (
    <ImageBackground
      // TODO: change to the real image
      source={{
        uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
      }}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <Header />
        <ExtendedKeyboardAvoidingView>
          <BottomButtonView
            buttonTitle={buttonTitle ?? t('buttons.next')}
            onSubmit={onSubmit}
            isDisabledButton={!inputText}
            style={styles.container}>
            {title ? (
              <Title />
            ) : (
              <ExtendedText preset="title">
                {t('screens.journel.title')}
              </ExtendedText>
            )}
            <ExtendedText preset="secondary-text" style={styles.description}>
              {description ?? t('screens.journel.description')}
            </ExtendedText>
            <View style={styles.inputContainer}>
              <MultilineTextInput
                placeholder={t('placeholders.enter_text')}
                value={inputText}
                onChangeText={setInputText}
              />
            </View>
          </BottomButtonView>
        </ExtendedKeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};
