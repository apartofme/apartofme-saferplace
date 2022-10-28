import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, Pressable, SafeAreaView, View } from 'react-native';

import { CHARMS_BACKGROUNDS } from '../../../../assets';
import { SVG } from '../../../../assets/svg';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../components';
import { HIT_SLOP } from '../../../../constants/hitSlop';
import {
  useAppDispatch,
  useAppSelector,
  useNavigateNextQuest,
  useNegativeNavigateTo,
  usePositiveNavigateTo,
} from '../../../../hooks';
import { cacheSlice } from '../../../../redux/slices';
import { COLORS } from '../../../../themes/colors';
import { generalStyles } from '../../../../utils/styles';
import { QuestionView } from './components';
import { QUESTION_CARD } from './QuestionCard.data';
import { styles } from './QuestionCard.styles';
import { IQuestionCardScreenProps } from './QuestionCard.types';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;
const CircleExclamationMarkIcon = SVG.CircleExclamationMarkIcon;

export const QuestionCardScreen: React.FC<IQuestionCardScreenProps> = ({
  navigation,
  route,
}) => {
  const { positiveNavigatesTo, negativeNavigatesTo } = route.params.data;

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const currentQuestionIndex = useAppSelector(
    state => state.cache.currentQuestionIndex,
  );

  const navigateNextQuest = useNavigateNextQuest();

  const onSkipPress = useNegativeNavigateTo(negativeNavigatesTo, true);

  const positiveNavigates = usePositiveNavigateTo(positiveNavigatesTo);

  const goBack = useCallback(() => {
    dispatch(cacheSlice.actions.decrementCurrentQuestionIndex());
    navigation.goBack();
  }, [dispatch, navigation]);

  const onSubmit = useCallback(() => {
    if (QUESTION_CARD.length - 1 <= currentQuestionIndex) {
      positiveNavigates();
      return;
    }
    navigateNextQuest();
  }, [currentQuestionIndex, navigateNextQuest, positiveNavigates]);

  return (
    <ImageBackground
      source={CHARMS_BACKGROUNDS.COURAGE_STAGE_TWO_BACKGROUND}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={goBack}
        />
        <BottomButtonView
          buttonTitle={t('buttons.we_are_finished')}
          onSubmit={onSubmit}
          style={styles.container}>
          <ExtendedText preset="body-regular" style={styles.title}>
            {t('screens.question_card.title')}
          </ExtendedText>
          <QuestionView title={QUESTION_CARD[currentQuestionIndex].titleKey} />
          <View style={generalStyles.aiCenter}>
            <CircleExclamationMarkIcon color={COLORS.PRIMARY_ORANGE} />
            <ExtendedText preset="secondary-text" style={styles.description}>
              {t('screens.question_card.description')}
            </ExtendedText>
          </View>
        </BottomButtonView>
        <Pressable
          onPress={onSkipPress}
          style={generalStyles.asCenter}
          hitSlop={HIT_SLOP}>
          <ExtendedText style={styles.skip}>
            {t('buttons.skip').toUpperCase()}
          </ExtendedText>
        </Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
};
