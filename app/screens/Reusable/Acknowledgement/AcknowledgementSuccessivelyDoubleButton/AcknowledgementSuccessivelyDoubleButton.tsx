import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import { BottomButtonView, ExtendedText } from '../../../../components';
import { IMAGES } from '../../../../assets';
import {
  usePositiveNavigateTo,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
  useNavigateNextQuest,
  useAppSelector,
  useAppDispatch,
  useNegativeNavigateTo,
} from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { IAcknowledgementSuccessivelyDoubleButtonScreenProps } from './AcknowledgementSuccessivelyDoubleButton.types';
import { styles } from './AcknowledgementSuccessivelyDoubleButton.styles';
import { cacheSlice } from '../../../../redux/slices';
import { THE_CHARM_OF_THE_MIRROR_ID } from '../../../../constants/quest';
import { EMOTION_BUTTON_LIST } from '../../EmotionSelection';

export const AcknowledgementSuccessivelyDoubleButtonScreen: React.FC<IAcknowledgementSuccessivelyDoubleButtonScreenProps> =
  ({ route }) => {
    const {
      title,
      description,
      buttonTitle,
      crossHeader,
      positiveNavigatesTo,
      negativeNavigatesTo,
      titleHasNickname,
      escapeMenuAlternativeNavigateTo,
    } = route.params.data;

    const isNextButtonTitle = /next/i.test(buttonTitle as string);

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const navigateToNextQuest = useNavigateNextQuest();
    const positiveNavigate = usePositiveNavigateTo(positiveNavigatesTo);
    const currentQuestLineId = useAppSelector(
      state => state.quest.currentQuestLine?.id,
    );
    const completedEmotionsCount = useAppSelector(
      state => state.cache.emotions.completed.length,
    );

    const isAllEmotionsCompleted =
      completedEmotionsCount < EMOTION_BUTTON_LIST.length - 1;
    const negativeNavigate = useNegativeNavigateTo(
      negativeNavigatesTo,
      isAllEmotionsCompleted,
    );

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'large-title',
      style: styles.title,
      // TODO: remove
      variableStyle: { color: '#00dbc0' },
    });

    const Header = useRenderQuestHeader({
      crossHeader: crossHeader ?? false,
      escapeMenuAlternativeNavigateTo,
    });

    const correctButtonTitle = useMemo(() => {
      if (isNextButtonTitle) {
        return t('buttons.skip').toUpperCase();
      }
      return t('buttons.i_finished').toUpperCase();
    }, [isNextButtonTitle, t]);

    const onSubmit = useCallback(() => {
      if (isNextButtonTitle) {
        navigateToNextQuest();
        return;
      }
      if (currentQuestLineId === THE_CHARM_OF_THE_MIRROR_ID) {
        dispatch(cacheSlice.actions.completeSelectedEmotion());
        negativeNavigate();
        return;
      }
      positiveNavigate();
    }, [
      currentQuestLineId,
      dispatch,
      isNextButtonTitle,
      navigateToNextQuest,
      negativeNavigate,
      positiveNavigate,
    ]);

    const onBottomButtonPress = useCallback(() => {
      if (isNextButtonTitle) {
        positiveNavigate();
        return;
      }
      if (currentQuestLineId === THE_CHARM_OF_THE_MIRROR_ID) {
        dispatch(cacheSlice.actions.clearEmotions());
      }
      navigateToNextQuest();
    }, [
      currentQuestLineId,
      dispatch,
      isNextButtonTitle,
      navigateToNextQuest,
      positiveNavigate,
    ]);

    return (
      <ImageBackground
        // TODO: change to the real image
        source={{
          uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
        }}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <Header />
          <BottomButtonView
            buttonTitle={buttonTitle ?? t('buttons.next')}
            onSubmit={onSubmit}
            style={styles.container}>
            <Image
              // TODO: change to the real image
              source={IMAGES.WHITE_PENCIL}
              style={styles.image}
            />
            <Title />
            <ExtendedText preset="secondary-text" style={styles.description}>
              {description}
            </ExtendedText>
          </BottomButtonView>
          <TouchableOpacity
            onPress={onBottomButtonPress}
            style={styles.bottomButton}>
            <ExtendedText preset="secondary-text">
              {correctButtonTitle}
            </ExtendedText>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    );
  };
