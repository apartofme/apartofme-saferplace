import React, { useCallback, useEffect, useRef, useState } from 'react';
import { SafeAreaView, View, ScrollView, Image } from 'react-native';
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
  useAppDispatch,
  useAppSelector,
  useIsChildMove,
  useParsedJSXTextNickname,
  usePositiveNavigateTo,
  useRenderQuestHeader,
} from '../../../hooks';
import { cacheSlice } from '../../../redux/slices';
import { CHARMS_BACKGROUNDS } from '../../../assets';
import { THE_CHARM_OF_KINDNESS_PART_ONE_ID } from '../../../constants/quest';
import { SCROLL_DELAY } from '../../../constants/time';

export const JournelScreen: React.FC<IJournelScreenProps> = ({ route }) => {
  const {
    title,
    description,
    buttonTitle,
    backgroundImage,
    titleHasNickname,
    crossHeader,
    positiveNavigatesTo,
    escapeMenuAlternativeNavigateTo,
  } = route.params.data;

  const [inputText, setInputText] = useState<string>('');
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const currentQuestLineId = useAppSelector(
    state => state.quest.currentQuestLine?.id,
  );
  const isChild = useIsChildMove(title);
  const positiveNavigate = usePositiveNavigateTo(positiveNavigatesTo);

  const onSubmit = useCallback(() => {
    if (currentQuestLineId === THE_CHARM_OF_KINDNESS_PART_ONE_ID) {
      if (isChild) {
        dispatch(cacheSlice.actions.saveChildKindnessItem(inputText));
      } else {
        dispatch(cacheSlice.actions.saveParentKindnessItem(inputText));
      }
    }
    positiveNavigate();
  }, [currentQuestLineId, dispatch, inputText, isChild, positiveNavigate]);

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

  const [isInputFocus, setInputIsFocus] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (isInputFocus) {
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd();
      }, SCROLL_DELAY);
    }
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
            isDisabledButton={!inputText}
            isArrow={!buttonTitle}
            onSubmit={onSubmit}>
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
