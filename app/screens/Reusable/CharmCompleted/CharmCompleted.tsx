import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground, SafeAreaView } from 'react-native';

import { BottomButtonView, ExtendedText } from '../../../components';
import { IMAGES } from '../../../assets';
import {
  useAppState,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks';
import { generalStyles } from '../../../utils/styles';
import { ICharmCompletedScreenProps } from './CharmCompleted.types';
import { useNavigateNextQuest } from '../../../hooks';
import { styles } from './CharmCompleted.styles';
import { useIsFocused } from '@react-navigation/native';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';

export const CharmCompletedScreen: React.FC<ICharmCompletedScreenProps> = ({
  route,
}) => {
  const {
    title,
    description,
    buttonTitle,
    crossHeader,
    titleHasNickname,
    escapeMenuAlternativeNavigateTo,
  } = route.params.data;

  const { t } = useTranslation();
  const onSubmit = useNavigateNextQuest();

  const isFocused = useIsFocused();
  const appStatus = useAppState();

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

  useEffect(() => {
    if (isFocused && appStatus === 'active') {
      AudioPlayerHelper.play('after_completing_exercise_012.wav');
    } else {
      AudioPlayerHelper.stop();
    }
  }, [appStatus, isFocused]);

  return (
    <ImageBackground
      // TODO: change to the real image
      source={{
        uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
      }}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <Image
          // TODO: change to the real image
          source={IMAGES.WHITE_PENCIL}
          style={styles.image}
        />
        <Header />
        <BottomButtonView
          buttonTitle={buttonTitle ?? t('buttons.next')}
          onSubmit={onSubmit}
          style={styles.container}>
          <Title />
          <ExtendedText preset="secondary-text" style={styles.description}>
            {description}
          </ExtendedText>
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
