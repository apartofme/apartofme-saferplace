import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { IJournelScreenProps } from './Journel.types';
import { styles } from './Journel.styles';
import {
  BottomButtonView,
  ExtendedKeyboardAvoidingView,
  ExtendedText,
  MainHeader,
  MultilineTextInput,
} from '../../../components';
import { IMAGES } from '../../../assets';
import { generalStyles } from '../../../utils/styles';
import { useNavigateNextQuest, useNavigatePrevQuest } from '../../../hooks';

export const JournelScreen: React.FC<IJournelScreenProps> = ({ route }) => {
  const [inputText, setInputText] = useState<string>('');
  const { t } = useTranslation();
  const goBack = useNavigatePrevQuest();
  const onSubmit = useNavigateNextQuest();

  const { title, description, buttonTitle, backgroundImage } =
    route.params.data;

  return (
    <ImageBackground
      // TODO: change to the real image
      source={{
        uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
      }}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={goBack}
        />
        <ExtendedKeyboardAvoidingView>
          <BottomButtonView
            buttonTitle={buttonTitle ?? t('buttons.next')}
            onSubmit={onSubmit}
            isDisabledButton={!inputText}
            style={styles.container}>
            <ExtendedText preset="title">
              {title ?? t('screens.journel.title')}
            </ExtendedText>
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
