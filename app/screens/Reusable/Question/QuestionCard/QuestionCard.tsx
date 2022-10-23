import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { SVG } from '../../../../assets/svg';
import {
  ExtendedButton,
  ExtendedText,
  MainHeader,
} from '../../../../components';
import {
  useAppDispatch,
  useAppSelector,
  useNavigateNextQuest,
  useNegativeNavigateTo,
  usePositiveNavigateTo,
} from '../../../../hooks';
import { cacheSlice } from '../../../../redux/slices';
import { generalStyles } from '../../../../utils/styles';
import { QuestionView } from './components';
import { QUESTION_CARD } from './QuestionCard.data';
import { styles } from './QuestionCard.styles';
import { IQuestionCardScreenProps } from './QuestionCard.types';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

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
      // TODO: change to the real image
      source={{
        uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
      }}
      style={generalStyles.flex}>
      <SafeAreaView style={styles.container}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={goBack}
        />
        <View style={styles.contentContainer}>
          <ExtendedText preset="body-regular" style={styles.title}>
            {t('screens.question_card.title')}
          </ExtendedText>
          <QuestionView title={QUESTION_CARD[currentQuestionIndex].titleKey} />
        </View>
        <View>
          <ExtendedButton
            title={t('buttons.we_are_finished')}
            style={styles.button}
            onPress={onSubmit}
          />
          <ExtendedText style={styles.skip} onPress={onSkipPress}>
            {t('buttons.skip')}
          </ExtendedText>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
