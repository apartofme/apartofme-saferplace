import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import {
  BottomButtonView,
  ExtendedKeyboardAvoidingView,
  ExtendedText,
  MainHeader,
  MultilineTextInput,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IFeedbackScreenProps } from './Feedback.types';
import { styles } from './Feedback.styles';
import { SVG } from '../../../assets/svg';
import { BACKGROUND_IMAGES } from '../../../assets';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const FeedbackScreen: React.FC<IFeedbackScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();
  const [feedback, setFeedback] = useState('');

  const onSubmit = useCallback(() => {
    navigation.navigate('FeedbackSuccess');
  }, [navigation]);

  return (
    <ImageBackground source={BACKGROUND_IMAGES.MENU} style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <ExtendedKeyboardAvoidingView>
          <BottomButtonView
            buttonTitle={t('buttons.submit')}
            onSubmit={onSubmit}
            isDisabledButton={!feedback}>
            <MainHeader
              leftIcon={<WhiteBackArrowIcon />}
              onLeftIconPress={navigation.goBack}
            />
            <View style={styles.container}>
              <ExtendedText style={styles.title}>
                {t('screens.menu.feedback.title')}
              </ExtendedText>
              <ExtendedText style={styles.subtitle}>
                {t('screens.menu.feedback.description')}
              </ExtendedText>
              <View style={styles.inputContainer}>
                <MultilineTextInput
                  value={feedback}
                  onChangeText={setFeedback}
                  placeholder={t('placeholders.enter_text')}
                />
              </View>
            </View>
          </BottomButtonView>
        </ExtendedKeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};
