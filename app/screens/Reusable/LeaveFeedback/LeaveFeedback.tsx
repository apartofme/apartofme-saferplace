import React, { useEffect, useRef, useState } from 'react';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { ILeaveFeedbackScreenProps } from './LeaveFeedback.types';
import { styles } from './LeaveFeedback.styles';
import { generalStyles } from '../../../utils/styles';
import {
  useAppSelector,
  useMount,
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks';
import { CHARMS_BACKGROUNDS } from '../../../assets';
import {
  BottomButtonView,
  ExtendedKeyboardAvoidingView,
  ExtendedText,
  MultilineTextInput,
} from '../../../components';
import {
  FirebaseAnalyticsEventsType,
  trackEvent,
} from '../../../services/firebase';
import moment from 'moment';
import { APP_FEEDBACK } from '../../../constants/quest';

export const LeaveFeedbackScreen: React.FC<ILeaveFeedbackScreenProps> = ({
  route,
}) => {
  const {
    title,
    description,
    buttonTitle,
    backgroundImage,
    crossHeader,
    titleHasNickname,
    escapeMenuAlternativeNavigateTo,
  } = route.params.data;

  const [inputText, setInputText] = useState<string>('');

  const { t } = useTranslation();
  const onSubmit = useNavigateNextQuest();

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

  const email = useAppSelector(state => state.user.parent?.email ?? '');

  const [isInputFocus, setInputIsFocus] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd();
  }, [isInputFocus]);

  useMount(() => {
    trackEvent(FirebaseAnalyticsEventsType.Feedback, {
      datetime: moment().format('d-m-Y H:i:s'),
      email: email,
      data: inputText,
      type: APP_FEEDBACK,
    });
  });

  return (
    <View>
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
                {!!description && (
                  <ExtendedText
                    preset="secondary-text"
                    style={styles.description}>
                    {description ?? t('screens.journel.description')}
                  </ExtendedText>
                )}
                <View style={styles.inputContainer}>
                  <MultilineTextInput
                    placeholder={t('placeholders.enter_text')}
                    value={inputText}
                    onChangeText={setInputText}
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
