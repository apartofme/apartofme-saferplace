import React, { useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

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

export const JournelScreen: React.FC<IJournelScreenProps> = ({
  navigation,
  route,
}) => {
  const [inputText, setInputText] = useState<string>('');
  const { t } = useTranslation();

  const { backgroundImage } = route.params.data;

  return (
    <ImageBackground source={backgroundImage} style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <ExtendedKeyboardAvoidingView>
        <BottomButtonView
          buttonTitle={t('buttons.next')}
          onSubmit={_.noop}
          isDisabledButton={!inputText}
          style={styles.container}>
          <ExtendedText preset="title">
            {t('screens.journel.title')}
          </ExtendedText>
          <ExtendedText preset="secondary-text" style={styles.description}>
            {t('screens.journel.description')}
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
    </ImageBackground>
  );
};
