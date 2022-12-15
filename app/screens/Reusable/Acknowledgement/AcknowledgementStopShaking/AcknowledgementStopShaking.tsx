import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';

import { BottomButtonView, ExtendedText } from '../../../../components';
import { CHARMS_BACKGROUNDS } from '../../../../assets';
import {
  usePositiveNavigateTo,
  useParsedJSXTextNickname,
  useAppSelector,
  useAppState,
  useMount,
} from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { IAcknowledgementStopShakingScreenProps } from './AcknowledgementStopShaking.types';
import { styles } from './AcknowledgementStopShaking.styles';
import { CHARMS_SVG } from '../../../../assets/svg';
import { AudioPlayerHelper } from '../../../../services/helpers/AudioPlayerHelper';
import { AUDIO } from '../../../../constants/audio';

export const AcknowledgementStopShakingScreen: React.FC<IAcknowledgementStopShakingScreenProps> =
  ({ route }) => {
    const {
      title,
      description,
      buttonTitle,
      image,
      backgroundImage,
      positiveNavigatesTo,
      titleHasNickname,
    } = route.params.data;

    const { t } = useTranslation();

    const onSubmit = usePositiveNavigateTo(positiveNavigatesTo);

    const isSoundFXEnabled = useAppSelector(
      state => state.settings.settings.audioSettings?.isSoundFXEnabled,
    );

    useMount(() => {
      if (isSoundFXEnabled) {
        AudioPlayerHelper.play(AUDIO.TIMER_SOUND_MAGIC);
        setTimeout(() => AudioPlayerHelper.startInfiniteLoop(), 3000);
      }
    });

    const appStatus = useAppState();

    useEffect(() => {
      if (appStatus !== 'active') {
        AudioPlayerHelper.stop();
      }
    }, [appStatus]);

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'large-title',
      style: styles.title,
    });

    const Icon = image && CHARMS_SVG[image];

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
            {!!Icon && <Icon />}
            <Title />
            <ExtendedText preset="secondary-text" style={styles.description}>
              {description}
            </ExtendedText>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
