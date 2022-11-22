import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View, ScrollView, Image } from 'react-native';

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
import { useAppSelector, useMount } from '../../../hooks';
import { trackEvent } from '../../../services/firebase';
import { FirebaseAnalyticsEventsType } from '../../../services/firebase';
import moment from 'moment';
import { APP_FEEDBACK } from '../../../constants/quest';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const FeedbackScreen: React.FC<IFeedbackScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();
  const [feedback, setFeedback] = useState('');

  const email = useAppSelector(state => state.user.parent?.email ?? '');

  const onSubmit = useCallback(() => {
    navigation.navigate('FeedbackSuccess');
  }, [navigation]);

  const [isInputFocus, setInputIsFocus] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd();
  }, [isInputFocus]);

  useMount(() => {
    trackEvent(FirebaseAnalyticsEventsType.Feedback, {
      datetime: moment().format('d-m-Y H:i:s'),
      email: email,
      data: feedback,
      type: APP_FEEDBACK,
    });
  });

  return (
    <View style={generalStyles.flex}>
      <Image
        source={BACKGROUND_IMAGES.MENU}
        style={generalStyles.backgroundImage}
      />
      <SafeAreaView style={generalStyles.flex}>
        <ExtendedKeyboardAvoidingView>
          <BottomButtonView
            buttonTitle={t('buttons.submit')}
            onSubmit={onSubmit}
            isDisabledButton={!feedback}>
            <ScrollView
              style={generalStyles.flex}
              ref={scrollViewRef}
              showsVerticalScrollIndicator={false}>
              <MainHeader
                leftIcon={<WhiteBackArrowIcon />}
                onLeftIconPress={navigation.goBack}
              />
              <View style={styles.container}>
                <ExtendedText style={styles.title} preset="large-title">
                  {t('screens.menu.feedback.title')}
                </ExtendedText>
                <ExtendedText style={styles.subtitle} preset="secondary-text">
                  {t('screens.menu.feedback.description')}
                </ExtendedText>
                <View style={styles.inputContainer}>
                  <MultilineTextInput
                    value={feedback}
                    onChangeText={setFeedback}
                    placeholder={t('placeholders.enter_text')}
                    setIsInputFocus={setInputIsFocus}
                  />
                </View>
              </View>
            </ScrollView>
          </BottomButtonView>
        </ExtendedKeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};
