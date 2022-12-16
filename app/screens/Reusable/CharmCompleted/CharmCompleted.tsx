import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';
import moment from 'moment';

import { BottomButtonView, ExtendedText } from '../../../components';
import { CHARMS_BACKGROUNDS } from '../../../assets';
import {
  useAppSelector,
  useAppState,
  useMount,
  useParsedJSXTextNickname,
} from '../../../hooks';
import { generalStyles } from '../../../utils/styles';
import { ICharmCompletedScreenProps } from './CharmCompleted.types';
import { useNavigateNextQuest } from '../../../hooks';
import { styles } from './CharmCompleted.styles';
import { useIsFocused } from '@react-navigation/native';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { AUDIO } from '../../../constants/audio';
import { CHARMS_SVG } from '../../../assets/svg';
import { FirebaseAnalyticsEventsType } from '../../../services/firebase/types';
import { trackEvent } from '../../../services/firebase/analytics';
import { CHARM_ENDED, ILLUSTRATION_ICON } from '../../../constants/quest';
import { CharmsSvgKeys } from '../../../utils/types';

export const CharmCompletedScreen: React.FC<ICharmCompletedScreenProps> = ({
  route,
}) => {
  const {
    title,
    description,
    buttonTitle,
    image,
    backgroundImage,
    titleHasNickname,
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

  const isSoundFXEnabled = useAppSelector(
    state => state.settings.settings.audioSettings?.isSoundFXEnabled,
  );

  const email = useAppSelector(state => state.user.parent?.email);

  useMount(() => {
    AudioPlayerHelper.pauseInfiniteLoop();
    setTimeout(() => AudioPlayerHelper.startInfiniteLoop(), 3000);
    trackEvent(FirebaseAnalyticsEventsType.CharmEnded, {
      name: image?.split(ILLUSTRATION_ICON)[0] ?? CHARM_ENDED,
      email: email ?? '',
      datetime: moment().format('d-m-Y H:i:s'),
    });
  });

  useEffect(() => {
    if (isFocused && appStatus === 'active' && isSoundFXEnabled) {
      AudioPlayerHelper.play(AUDIO.COMPLETING_EXERCISE);
    } else {
      AudioPlayerHelper.stop();
    }
  }, [appStatus, isFocused, isSoundFXEnabled]);

  useEffect(() => {
    if (appStatus !== 'active') {
      AudioPlayerHelper.stop();
    }
  }, [appStatus]);

  const Icon = CHARMS_SVG[(image as CharmsSvgKeys) ?? 'CelebrationGuideIcon'];

  return (
    <ImageBackground
      source={
        CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
      }
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <BottomButtonView
          buttonTitle={buttonTitle || t('buttons.next')}
          isArrow={!buttonTitle}
          onSubmit={onSubmit}
          style={styles.container}>
          {!!image && <Icon />}
          <Title />
          <ExtendedText preset="secondary-text" style={styles.description}>
            {description}
          </ExtendedText>
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
