import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { BACKGROUND_IMAGES } from '../../../assets';
import { AVATARS_SVG } from '../../../assets/svg';
import { ElixirThreeIcon } from '../../../assets/svg/garden';
import { ExtendedText } from '../../../components';
import { AUDIO } from '../../../constants/audio';
import { useAppDispatch, useAppSelector, useAppState } from '../../../hooks';
import { elixirSlice } from '../../../redux/slices';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { generalStyles } from '../../../utils/styles';
import { AvatarsNameType } from '../../../utils/types';
import { styles } from './RecognitionDoubleInteraction.styles';
import { IRecognitionDoubleInteractionScreenProps } from './RecognitionDoubleInteraction.types';

export const RecognitionDoubleInteractionScreen: React.FC<IRecognitionDoubleInteractionScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const fullnessElixir = useAppSelector(state => state.elixir.fullnessElixir);

    const [isChildPress, setIsСhildPress] = useState(false);
    const [isAdultPress, setIsAdultPress] = useState(false);

    const [isSoundStart, setIsSoundStart] = useState(false);

    const parentAvatar =
      useAppSelector(state => state.user.parent?.avatar) ??
      `Circle${AvatarsNameType.Rabbit}`;

    const ParentAvatarIcon = AVATARS_SVG[parentAvatar];

    const childAvatar =
      useAppSelector(state => state.user.child?.avatar) ??
      `Circle${AvatarsNameType.Rabbit}`;

    const ChildAvatarIcon = AVATARS_SVG[childAvatar];

    const setChildPress = useCallback(() => {
      setIsСhildPress(!isChildPress);
    }, [isChildPress]);

    const setAdultPress = useCallback(() => {
      setIsAdultPress(!isAdultPress);
    }, [isAdultPress]);

    const isSoundFXEnabled = useAppSelector(
      state => state.settings.settings.audioSettings?.isSoundFXEnabled,
    );

    useEffect(() => {
      if (isChildPress && isAdultPress && !isSoundStart && isSoundFXEnabled) {
        AudioPlayerHelper.play(AUDIO.BOTTLE_FILLING);
        setIsSoundStart(true);
      } else if (isChildPress && isAdultPress && isSoundFXEnabled) {
        AudioPlayerHelper.start();
      } else {
        AudioPlayerHelper.pause();
      }
    }, [isAdultPress, isChildPress, isSoundFXEnabled, isSoundStart]);

    const appStatus = useAppState();

    useEffect(() => {
      if (appStatus !== 'active') {
        AudioPlayerHelper.stop();
      }
    }, [appStatus]);

    useEffect(() => {
      if (isChildPress && isAdultPress) {
        dispatch(elixirSlice.actions.updateFullnessElixir(fullnessElixir + 1));
        navigation.navigate('RecognitionDoubleInteractionSuccess');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAdultPress, isChildPress]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN}
        style={generalStyles.flex}>
        <SafeAreaView style={styles.container}>
          <ExtendedText style={styles.title} preset="title">
            {t('screens.recognition.double_interaction.title')}
          </ExtendedText>
          {/* // TODO: change to animation */}
          <View style={generalStyles.aiCenter}>
            <ElixirThreeIcon />
          </View>
          <ExtendedText style={styles.subtitle} preset="secondary-text">
            {t('screens.recognition.double_interaction.description')}
          </ExtendedText>
          <View style={styles.buttonsContainer}>
            <View onTouchStart={setChildPress} onTouchEnd={setChildPress}>
              <ParentAvatarIcon width={90} height={90} />
            </View>
            <View onTouchStart={setAdultPress} onTouchEnd={setAdultPress}>
              <ChildAvatarIcon width={90} height={90} />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  };
