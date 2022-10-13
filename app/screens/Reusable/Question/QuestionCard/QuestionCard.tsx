import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../../assets';
import {
  ExtendedButton,
  ExtendedText,
  MainHeader,
} from '../../../../components';
import { useNavigateNextQuest, usePositiveNavigateTo } from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { QuestionView } from './components';
import { styles } from './QuestionCard.styles';
import { IQuestionCardScreenProps } from './QuestionCard.types';

export const QuestionCardScreen: React.FC<IQuestionCardScreenProps> = ({
  navigation,
  route,
}) => {
  const { question, positiveNavigatesTo } = route.params.data;

  const { t } = useTranslation();

  const onSubmit = useNavigateNextQuest();

  const onSkipPress = usePositiveNavigateTo(positiveNavigatesTo);

  return (
    <ImageBackground
      // TODO: change to the real image
      source={{
        uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
      }}
      style={generalStyles.flex}>
      <SafeAreaView style={styles.container}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <View style={styles.contentContainer}>
          <ExtendedText preset="body-regular" style={styles.title}>
            {t('screens.question_card.title')}
          </ExtendedText>
          <QuestionView title={question ?? ''} />
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
