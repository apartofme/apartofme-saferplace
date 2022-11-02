import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import Lottie from 'lottie-react-native';

import { CHARMS_BACKGROUNDS } from '../../../../assets';
import { ANIMATIONS } from '../../../../assets/animations';
import { BottomButtonView } from '../../../../components';
import {
  useAppDispatch,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../../hooks';
import { cacheSlice } from '../../../../redux/slices';
import { LottieStyles } from '../../../../utils';
import { generalStyles } from '../../../../utils/styles';
import { styles } from './QuestionChoice.styles';
import { IQuestionChoiceScreenProps } from './QuestionChoice.types';

export const QuestionChoiceScreen: React.FC<IQuestionChoiceScreenProps> = ({
  navigation,
  route,
}) => {
  const {
    title,
    buttonTitle,
    crossHeader,
    backgroundImage,
    escapeMenuAlternativeNavigateTo,
    titleHasNickname,
    positiveNavigatesTo,
    negativeNavigatesTo,
  } = route.params.data;

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const onSubmit = useCallback(() => {
    dispatch(cacheSlice.actions.incrementCurrentQuestionIndex());
    navigation.push('QuestionCard', {
      data: { positiveNavigatesTo, negativeNavigatesTo },
    });
  }, [dispatch, navigation, negativeNavigatesTo, positiveNavigatesTo]);

  const Header = useRenderQuestHeader({
    crossHeader: crossHeader ?? false,
    escapeMenuAlternativeNavigateTo,
  });

  const Title = useParsedJSXTextNickname({
    text: title,
    textHasNickname: titleHasNickname ?? true,
    preset: 'title',
    style: generalStyles.brilliantWhiteCenter,
  });

  return (
    <ImageBackground
      source={
        CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
      }
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <Header />
        <BottomButtonView
          buttonTitle={buttonTitle ?? t('buttons.next')}
          onSubmit={onSubmit}
          style={styles.container}>
          <Title />
          <View style={generalStyles.flex} />
          <Lottie
            source={ANIMATIONS.CARD_SHUFFLE}
            autoPlay
            loop
            style={LottieStyles(100, { top: -20 })}
          />
          <View style={generalStyles.flex} />
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
