import React, { useCallback, useState } from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { styles } from './EmotionModal.styles';
import { IEmotionModalProps } from './EmotionModal.types';
import { generalStyles } from '../../../../../utils/styles';
import {
  BottomButtonView,
  ExtendedKeyboardAvoidingView,
  ExtendedText,
  ExtendedTextInput,
  MainHeader,
} from '../../../../../components';
import { cacheSlice } from '../../../../../redux/slices';
import {
  useAppDispatch,
  useNavigateNextQuest,
  useParsedJSXTextNickname,
} from '../../../../../hooks';
import { SVG } from '../../../../../assets/svg';
import { COLORS } from '../../../../../themes/colors';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;
const WhiteCrossIcon = SVG.WhiteCrossIcon;

export const EmotionModal: React.FC<IEmotionModalProps> = ({
  title,
  backgroundImage,
  setModalStatus,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigateToNextQuest = useNavigateNextQuest();

  const [inputValue, setInputValue] = useState('');

  const onSubmit = useCallback(() => {
    dispatch(
      cacheSlice.actions.saveEmotionItem({
        image: 'CreateYourOwnIcon',
        title: inputValue,
      }),
    );
    setModalStatus();
    navigateToNextQuest();
  }, [dispatch, inputValue, navigateToNextQuest, setModalStatus]);

  const Title = useParsedJSXTextNickname({
    text: title,
    textHasNickname: true,
    preset: 'title',
    style: generalStyles.brilliantWhite,
  });

  return (
    <ImageBackground source={backgroundImage} style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          rightIcon={<WhiteCrossIcon />}
          onLeftIconPress={setModalStatus}
        />
        <ExtendedKeyboardAvoidingView>
          <BottomButtonView
            buttonTitle={t('buttons.next')}
            isArrow={true}
            onSubmit={onSubmit}>
            <View style={styles.container}>
              <Title />
              <ExtendedTextInput
                placeholder={t('placeholders.enter_text')}
                placeholderTextColor={COLORS.BRILLIANT_WHITE}
                onChangeText={setInputValue}
                maxLength={30}
                style={styles.input}
              />
              <ExtendedText
                preset="tertiary-text-regular"
                style={generalStyles.brilliantWhite}>
                {t('screens.emotion_carousel.maximum')}
              </ExtendedText>
            </View>
          </BottomButtonView>
        </ExtendedKeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};
