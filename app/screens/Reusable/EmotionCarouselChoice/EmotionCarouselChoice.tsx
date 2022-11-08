import React, { useCallback } from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { IEmotionCarouselChoiceScreenProps } from './EmotionCarouselChoice.types';
import { styles } from './EmotionCarouselChoice.styles';
import {
  useAppDispatch,
  useAppSelector,
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  usePositiveNavigateTo,
  useRenderQuestHeader,
} from '../../../hooks';
import { CHARMS_BACKGROUNDS } from '../../../assets';
import { generalStyles } from '../../../utils/styles';
import { BottomButtonView, ExtendedText } from '../../../components';
import { EMOTIONS_CAROUSEL_SVG } from '../../../assets/svg';
import { EMOTION_BUTTON_LIST } from '../EmotionSelection';
import { cacheSlice } from '../../../redux/slices';

export const EmotionCarouselChoiceScreen: React.FC<IEmotionCarouselChoiceScreenProps> =
  ({ route }) => {
    const {
      title,
      description,
      buttonTitle,
      backgroundImage,
      crossHeader,
      titleHasNickname,
      positiveNavigatesTo,
      escapeMenuAlternativeNavigateTo,
    } = route.params.data;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const navigateToNextQuest = useNavigateNextQuest();
    const positiveNavigate = usePositiveNavigateTo(positiveNavigatesTo);
    const { emotionItem, emotions } = useAppSelector(state => state.cache);
    const completedEmotionsCount = emotions.completed.length;
    const isAllEmotionsCompleted =
      completedEmotionsCount >= EMOTION_BUTTON_LIST.length - 1;

    const onSubmit = useCallback(() => {
      dispatch(cacheSlice.actions.completeSelectedEmotion());
      if (isAllEmotionsCompleted) {
        positiveNavigate();
        dispatch(cacheSlice.actions.clearEmotions());
        return;
      }
      navigateToNextQuest();
    }, [
      dispatch,
      isAllEmotionsCompleted,
      navigateToNextQuest,
      positiveNavigate,
    ]);

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'title',
      style: styles.title,
    });

    const Header = useRenderQuestHeader({
      crossHeader: crossHeader ?? false,
      escapeMenuAlternativeNavigateTo,
    });

    const Icon = emotionItem && EMOTIONS_CAROUSEL_SVG[emotionItem.iconKey];

    return (
      <ImageBackground
        source={
          CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
        }
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <Header />
          <BottomButtonView
            buttonTitle={buttonTitle || t('buttons.next')}
            isArrow
            onSubmit={onSubmit}
            style={styles.container}>
            <Title />
            <View style={styles.card}>
              {Icon && <Icon />}
              <ExtendedText preset="heading" style={styles.cardTitle}>
                {emotionItem && t(emotionItem.titleKey)}
              </ExtendedText>
            </View>
            <ExtendedText preset="secondary-text" style={styles.subtitle}>
              {description}
            </ExtendedText>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
