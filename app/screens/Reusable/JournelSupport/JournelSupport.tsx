import React, { useState } from 'react';
import { Image, ImageBackground, SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { IJournelSupportScreenProps } from './JournelSupport.types';
import { styles } from './JournelSupport.styles';
import {
  BottomButtonView,
  ExtendedKeyboardAvoidingView,
  ExtendedText,
  MultilineTextInput,
} from '../../../components';
import { IMAGES } from '../../../assets';
import { generalStyles } from '../../../utils/styles';
import {
  useParsedJSXTextNickname,
  usePositiveNavigateTo,
  useRenderQuestHeader,
} from '../../../hooks';

export const JournelSupportScreen: React.FC<IJournelSupportScreenProps> = ({
  route,
}) => {
  const {
    title,
    description,
    images,
    buttonTitle,
    crossHeader,
    titleHasNickname,
    positiveNavigatesTo,
  } = route.params.data;

  const [inputText, setInputText] = useState<string>('');
  const { t } = useTranslation();
  const onSubmit = usePositiveNavigateTo(positiveNavigatesTo);

  const Title = useParsedJSXTextNickname({
    text: title,
    textHasNickname: titleHasNickname ?? true,
    preset: 'title',
    // TODO: remove
    nicknameStyle: { color: '#00dbc0' },
  });

  const Header = useRenderQuestHeader(crossHeader ?? false);

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
            <Title />
            <View style={styles.inputContainer}>
              <MultilineTextInput
                placeholder={t('placeholders.enter_text')}
                value={inputText}
                onChangeText={setInputText}
              />
            </View>

            <View style={generalStyles.flex} />
            <Image
              // TODO: change to correct image
              source={(images && IMAGES[images[0]]) ?? IMAGES.LOGO}
              style={styles.infoImage}
            />
            <ExtendedText preset="secondary-text" style={styles.description}>
              {description ?? t('screens.journel.description')}
            </ExtendedText>
          </BottomButtonView>
        </ExtendedKeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};
