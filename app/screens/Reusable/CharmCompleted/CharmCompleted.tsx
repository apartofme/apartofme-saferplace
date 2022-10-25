import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';

import { BottomButtonView, ExtendedText } from '../../../components';
import { CHARMS_BACKGROUNDS } from '../../../assets';
import {
  useAppSelector,
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
import { AUDIO } from '../../../constants/audio';

export const CharmCompletedScreen: React.FC<ICharmCompletedScreenProps> = ({
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

  const isFocused = useIsFocused();
  const appStatus = useAppState();

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

  const isSoundFXEnabled = useAppSelector(
    state => state.settings.settings.audioSettings?.isSoundFXEnabled,
  );

  useEffect(() => {
    if (isFocused && appStatus === 'active' && isSoundFXEnabled) {
      AudioPlayerHelper.play(AUDIO.COMPLETING_EXERCISE);
    } else {
      AudioPlayerHelper.stop();
    }
  }, [appStatus, isFocused, isSoundFXEnabled]);

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
          <Title />
          <ExtendedText
            preset="secondary-text"
            style={generalStyles.greyCenter}>
            {description}
          </ExtendedText>
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
