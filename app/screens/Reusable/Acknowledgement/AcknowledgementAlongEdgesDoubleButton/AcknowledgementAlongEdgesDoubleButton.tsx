import React, { useCallback, useMemo } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import { IAcknowledgementAlongEdgesDoubleButtonScreenProps } from './AcknowledgementAlongEdgesDoubleButton.types';
import { styles } from './AcknowledgementAlongEdgesDoubleButton.styles';
import {
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  usePositiveNavigateTo,
  useRenderQuestHeader,
} from '../../../../hooks';
import { IMAGES } from '../../../../assets';
import { generalStyles } from '../../../../utils/styles';
import { BottomButtonView, ExtendedText } from '../../../../components';

export const AcknowledgementAlongEdgesDoubleButtonScreen: React.FC<IAcknowledgementAlongEdgesDoubleButtonScreenProps> =
  ({ route }) => {
    const {
      title,
      description,
      buttonTitle,
      images,
      backgroundImage,
      crossHeader,
      titleHasNickname,
      positiveNavigatesTo,
      escapeMenuAlternativeNavigateTo,
    } = route.params.data;

    const isNextButtonTitle = /next/i.test(buttonTitle as string);

    const { t } = useTranslation();
    const navigateToNextQuest = useNavigateNextQuest();
    const positiveNavigate = usePositiveNavigateTo(positiveNavigatesTo);

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'title',
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

      return t('buttons.finish').toUpperCase();
    }, [isNextButtonTitle, t]);

    const onSubmit = useCallback(() => {
      if (isNextButtonTitle) {
        navigateToNextQuest();
        return;
      }
      positiveNavigate();
    }, [isNextButtonTitle, navigateToNextQuest, positiveNavigate]);

    const onBottomButtonPress = useCallback(() => {
      if (isNextButtonTitle) {
        positiveNavigate();
        return;
      }
      navigateToNextQuest();
    }, [isNextButtonTitle, navigateToNextQuest, positiveNavigate]);

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
            <Image
              // TODO: change to real image
              source={(images && IMAGES[images[0]]) ?? IMAGES.LOGO}
              style={styles.image}
            />
            <ExtendedText style={styles.description}>
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
