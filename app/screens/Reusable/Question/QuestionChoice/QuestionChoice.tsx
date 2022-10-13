import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';

import { BottomButtonView } from '../../../../components';
import {
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../../hooks';
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
    description,
    escapeMenuAlternativeNavigateTo,
    titleHasNickname,
    positiveNavigatesTo,
  } = route.params.data;

  const { t } = useTranslation();

  const onSubmit = useCallback(() => {
    navigation.navigate('QuestionCard', {
      data: { question: description, positiveNavigatesTo },
    });
  }, [description, navigation, positiveNavigatesTo]);

  const Header = useRenderQuestHeader({
    crossHeader: crossHeader ?? false,
    escapeMenuAlternativeNavigateTo,
  });

  const Title = useParsedJSXTextNickname({
    text: title,
    textHasNickname: titleHasNickname ?? true,
    preset: 'title',
    style: styles.title,
    // TODO: remove
    nicknameStyle: { color: '#00dbc0' },
  });

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
          <Title />
          {/* //TODO: add animation */}
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
