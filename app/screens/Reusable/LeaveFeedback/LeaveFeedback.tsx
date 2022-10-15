import React from 'react';
import { ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

import { ILeaveFeedbackScreenProps } from './LeaveFeedback.types';
import { styles } from './LeaveFeedback.styles';
import { generalStyles } from '../../../utils/styles';
import {
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks';
import { IMAGES } from '../../../assets';
import { BottomButtonView, ExtendedText } from '../../../components';

export const LeaveFeedbackScreen: React.FC<ILeaveFeedbackScreenProps> = ({
  route,
}) => {
  const {
    title,
    description,
    buttonTitle,
    backgroundImage,
    crossHeader,
    titleHasNickname,
    escapeMenuAlternativeNavigateTo,
  } = route.params.data;

  const { t } = useTranslation();
  const onSubmit = useNavigateNextQuest();

  const Title = useParsedJSXTextNickname({
    text: title,
    textHasNickname: titleHasNickname ?? true,
    preset: 'large-title',
    style: styles.textCenter,
    // TODO: remove
    variableStyle: { color: '#00dbc0' },
  });

  const Header = useRenderQuestHeader({
    crossHeader: crossHeader ?? false,
    escapeMenuAlternativeNavigateTo,
  });

  return (
    <ImageBackground
      // TODO: change to real default image
      source={
        (backgroundImage && IMAGES[backgroundImage]) ?? {
          uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
        }
      }
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <Header />
        <BottomButtonView
          buttonTitle={buttonTitle ?? t('buttons.next')}
          onSubmit={onSubmit}
          style={styles.container}>
          <Title />
          <ExtendedText
            preset="secondary-text"
            style={[styles.description, styles.textCenter]}>
            {description}
          </ExtendedText>
        </BottomButtonView>
        <TouchableOpacity style={styles.bottomButton}>
          <ExtendedText>{t('buttons.not_now').toUpperCase()}</ExtendedText>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};
