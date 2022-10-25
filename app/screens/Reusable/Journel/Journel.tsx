import React, { useCallback, useState } from 'react';
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
  useAppDispatch,
  useIsChildMove,
  useParsedJSXTextNickname,
  usePositiveNavigateTo,
  useRenderQuestHeader,
} from '../../../hooks';
import { cacheSlice } from '../../../redux/slices';
import { CHARMS_BACKGROUNDS } from '../../../assets';

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
  const isChild = useIsChildMove(title);
  const positiveNavigate = usePositiveNavigateTo(positiveNavigatesTo);

  const onSubmit = useCallback(() => {
    if (isChild) {
      dispatch(cacheSlice.actions.saveChildKindnessItem(inputText));
    } else {
      dispatch(cacheSlice.actions.saveParentKindnessItem(inputText));
    }
    positiveNavigate();
  }, [dispatch, inputText, isChild, positiveNavigate]);

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

  return (
    <ImageBackground
      source={
        CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
      }
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <Header />
        <ExtendedKeyboardAvoidingView>
          <BottomButtonView
            buttonTitle={buttonTitle || t('buttons.next')}
            isArrow={!buttonTitle}
            onSubmit={onSubmit}
            isDisabledButton={!inputText}
            style={styles.container}>
            {title ? (
              <Title />
            ) : (
              <ExtendedText preset="title" style={generalStyles.brilliantWhite}>
                {t('screens.journel.title')}
              </ExtendedText>
            )}
            {!!description && (
              <ExtendedText preset="secondary-text" style={styles.description}>
                {description ?? t('screens.journel.description')}
              </ExtendedText>
            )}
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
