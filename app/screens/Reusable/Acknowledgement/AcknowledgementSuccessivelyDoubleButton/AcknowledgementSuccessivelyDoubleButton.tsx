import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';

import { BottomButtonView, ExtendedText } from '../../../../components';
import { CHARMS_BACKGROUNDS } from '../../../../assets';
import {
  usePositiveNavigateTo,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
  useAppSelector,
  useAppDispatch,
  useNegativeNavigateTo,
  useNavigateNextQuest,
} from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { IAcknowledgementSuccessivelyDoubleButtonScreenProps } from './AcknowledgementSuccessivelyDoubleButton.types';
import { styles } from './AcknowledgementSuccessivelyDoubleButton.styles';
import { cacheSlice } from '../../../../redux/slices';
import { THE_CHARM_OF_THE_MIRROR_ID } from '../../../../constants/quest';
import { EMOTION_BUTTON_LIST } from '../../EmotionSelection';
import { CHARMS_SVG } from '../../../../assets/svg';

export const AcknowledgementSuccessivelyDoubleButtonScreen: React.FC<IAcknowledgementSuccessivelyDoubleButtonScreenProps> =
  ({ route }) => {
    const {
      title,
      description,
      buttonTitle,
      image,
      backgroundImage,
      tellMoreTitle,
      crossHeader,
      positiveNavigatesTo,
      negativeNavigatesTo,
      titleHasNickname,
      escapeMenuAlternativeNavigateTo,
    } = route.params.data;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const navigateToNextQuest = useNavigateNextQuest();
    const negativeNavigate = useNegativeNavigateTo(negativeNavigatesTo, true);
    const positiveNavigate = usePositiveNavigateTo(positiveNavigatesTo);

    const currentQuestLineId = useAppSelector(
      state => state.quest.currentQuestLine?.id,
    );
    const completedEmotionsCount = useAppSelector(
      state => state.cache.emotions.completed.length,
    );

    const isAllEmotionsCompleted =
      completedEmotionsCount < EMOTION_BUTTON_LIST.length - 1;
    const isMirrorCharm = currentQuestLineId === THE_CHARM_OF_THE_MIRROR_ID;

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'large-title',
      style: styles.title,
    });

    const Header = useRenderQuestHeader({
      crossHeader: crossHeader ?? false,
      escapeMenuAlternativeNavigateTo,
    });

    const onSubmit = useCallback(() => {
      if (isMirrorCharm) {
        dispatch(cacheSlice.actions.completeSelectedEmotion());
        if (isAllEmotionsCompleted) {
          navigateToNextQuest();
          return;
        }
      }
      positiveNavigate();
    }, [
      dispatch,
      isAllEmotionsCompleted,
      isMirrorCharm,
      navigateToNextQuest,
      positiveNavigate,
    ]);

    const onBottomButtonPress = useCallback(() => {
      if (isMirrorCharm) {
        dispatch(cacheSlice.actions.clearEmotions());
      }
      negativeNavigate();
    }, [dispatch, isMirrorCharm, negativeNavigate]);

    const Icon = image && CHARMS_SVG[image];

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
            isArrow={!buttonTitle}
            onSubmit={onSubmit}
            style={styles.container}>
            {Icon && <Icon />}
            <Title />
            <ExtendedText preset="secondary-text" style={styles.description}>
              {description}
            </ExtendedText>
          </BottomButtonView>
          <TouchableOpacity
            onPress={onBottomButtonPress}
            style={styles.bottomButton}>
            <ExtendedText preset="secondary-text" style={styles.bottomButton}>
              {tellMoreTitle}
            </ExtendedText>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    );
  };
