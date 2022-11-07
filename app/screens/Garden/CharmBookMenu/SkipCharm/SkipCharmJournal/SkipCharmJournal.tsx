import moment from 'moment';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';

import { BACKGROUND_IMAGES } from '../../../../../assets';
import { SVG } from '../../../../../assets/svg';
import {
  BottomButtonView,
  ExtendedKeyboardAvoidingView,
  ExtendedText,
  MainHeader,
  MultilineTextInput,
} from '../../../../../components';
import { SKIP_CHARM_FEEDBACK } from '../../../../../constants/quest';
import { useAppSelector, useMount } from '../../../../../hooks';
import { trackEvent } from '../../../../../services/firebase/analytics';
import { FirebaseAnalyticsEventsType } from '../../../../../services/firebase/types';
import { generalStyles } from '../../../../../utils/styles';
import { styles } from './SkipCharmJournal.styles';
import { ISkipCharmJournalScreenProps } from './SkipCharmJournal.types';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const SkipCharmJournalScreen: React.FC<ISkipCharmJournalScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();
  const [text, setText] = useState('');

  const email = useAppSelector(state => state.user.parent?.email ?? '');

  const onSubmit = useCallback(() => {
    navigation.push('SkipCharmAcknowledgement', {
      isFirst: false,
    });
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
      data: text,
      type: SKIP_CHARM_FEEDBACK,
    });
  });

  return (
    <View style={generalStyles.flex}>
      <Image
        source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN}
        style={generalStyles.backgroundImage}
      />
      <SafeAreaView style={generalStyles.flex}>
        <ExtendedKeyboardAvoidingView>
          <BottomButtonView
            buttonTitle={t('buttons.finish')}
            onSubmit={onSubmit}>
            <ScrollView
              ref={scrollViewRef}
              showsVerticalScrollIndicator={false}>
              <MainHeader
                leftIcon={<WhiteBackArrowIcon />}
                onLeftIconPress={navigation.goBack}
              />
              <View style={styles.container}>
                <ExtendedText
                  preset="title"
                  style={generalStyles.brilliantWhite}>
                  {t('screens.skip_charm_journal.title')}
                </ExtendedText>
                <View style={styles.inputContainer}>
                  <MultilineTextInput
                    onChangeText={setText}
                    value={text}
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
