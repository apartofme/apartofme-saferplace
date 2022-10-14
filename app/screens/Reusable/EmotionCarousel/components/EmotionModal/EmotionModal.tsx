import React, { useCallback, useEffect, useState } from 'react';
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
import { IMAGES } from '../../../../../assets';
import { cacheSlice } from '../../../../../redux/slices';
import {
  useAppDispatch,
  useNavigateNextQuest,
  useParsedJSXTextNickname,
} from '../../../../../hooks';

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
    dispatch(cacheSlice.actions.saveEmotionItem(inputValue));
    navigateToNextQuest();
  }, [dispatch, inputValue, navigateToNextQuest]);

  const Title = useParsedJSXTextNickname({
    text: title,
    textHasNickname: true,
    preset: 'title',
    style: styles.title,
    // TODO: remove
    nicknameStyle: { color: '#00dbc0' },
  });

  useEffect(() => {
    if (inputValue.length > 50) {
      setInputValue(prev => prev.slice(0, 50));
    }
  }, [inputValue]);

  return (
    <ImageBackground
      // TODO: change to real default image
      source={
        (backgroundImage && IMAGES[backgroundImage as keyof typeof IMAGES]) ?? {
          uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
        }
      }
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          rightIcon={IMAGES.WHITE_PENCIL}
          onLeftIconPress={setModalStatus}
        />
        <ExtendedKeyboardAvoidingView>
          <BottomButtonView buttonTitle={t('buttons.next')} onSubmit={onSubmit}>
            <View style={styles.container}>
              <Title />
              <ExtendedTextInput
                value={inputValue}
                placeholder={t('placeholders.enter_text')}
                // TODO: change to correct color
                placeholderTextColor={'white'}
                onChangeText={setInputValue}
              />
              <ExtendedText preset="tertiary-text-regular" style={styles.hint}>
                {t('screens.emotion_carousel.maximum')}
              </ExtendedText>
            </View>
          </BottomButtonView>
        </ExtendedKeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};
