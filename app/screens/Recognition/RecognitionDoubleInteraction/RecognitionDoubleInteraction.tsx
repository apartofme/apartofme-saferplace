import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import Lottie from 'lottie-react-native';

import { BACKGROUND_IMAGES } from '../../../assets';
import { POTION_FILL_ANIMATIONS } from '../../../assets/animations';
import { AVATARS_SVG } from '../../../assets/svg';
import { ExtendedText } from '../../../components';
import { AUDIO } from '../../../constants/audio';
import {
  useAppDispatch,
  useAppSelector,
  useAppState,
  useInternetCheck,
} from '../../../hooks';
import { elixirSlice } from '../../../redux/slices';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { LottieAbsoluteStyles } from '../../../utils';
import { generalStyles } from '../../../utils/styles';
import { styles } from './RecognitionDoubleInteraction.styles';
import { IRecognitionDoubleInteractionScreenProps } from './RecognitionDoubleInteraction.types';

export const RecognitionDoubleInteractionScreen: React.FC<IRecognitionDoubleInteractionScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const appStatus = useAppState();
    const animationRef = useRef<Lottie>(null);

    useInternetCheck(
      'errors.network_progress.title',
      'errors.network_progress.description',
    );

    const fullnessElixir = useAppSelector(state => state.elixir.fullnessElixir);
    const { parent, child } = useAppSelector(state => state.user);
    const isSoundFXEnabled = useAppSelector(
      state => state.settings.settings.audioSettings?.isSoundFXEnabled,
    );
    const isCurrentQuestCompleted = useAppSelector(
      state => state.quest.isCurrentQuestCompleted,
    );

    const [isChildPress, setIsСhildPress] = useState(false);
    const [isAdultPress, setIsAdultPress] = useState(false);
    const [isOnDoublePress, setOnDoublePress] = useState(false);

    const ParentAvatarIcon = AVATARS_SVG[parent?.avatar ?? 'CircleRabbitIcon'];
    const ChildAvatarIcon = AVATARS_SVG[child?.avatar ?? 'CircleBearIcon'];

    const setChildPress = useCallback(() => {
      setIsСhildPress(!isChildPress);
    }, [isChildPress]);

    const setAdultPress = useCallback(() => {
      setIsAdultPress(!isAdultPress);
    }, [isAdultPress]);

    useEffect(() => {
      if (isChildPress && isAdultPress) {
        setOnDoublePress(true);
      }
    }, [isChildPress, isAdultPress]);

    useEffect(() => {
      if (isOnDoublePress && isSoundFXEnabled) {
        AudioPlayerHelper.play(
          !isCurrentQuestCompleted
            ? AUDIO.BOTTLE_FILLING
            : AUDIO.PERCUSSION_SHORTER_FADE_IN_OUT,
        );
        return;
      }
      if (isOnDoublePress && isSoundFXEnabled) {
        AudioPlayerHelper.start();
      }
    }, [isCurrentQuestCompleted, isOnDoublePress, isSoundFXEnabled]);

    useEffect(() => {
      if (isOnDoublePress) {
        animationRef.current?.play();
        return;
      }
    }, [isOnDoublePress]);

    useEffect(() => {
      if (appStatus !== 'active') {
        AudioPlayerHelper.stop();
        animationRef.current?.pause();
      }
    }, [appStatus]);

    const onSubmit = useCallback(() => {
      if (isOnDoublePress) {
        dispatch(elixirSlice.actions.updateFullnessElixir(fullnessElixir + 1));
        navigation.replace('RecognitionDoubleInteractionSuccess');
      }
      // intentionally
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOnDoublePress]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN}
        style={generalStyles.flex}>
        <Lottie
          ref={animationRef}
          source={POTION_FILL_ANIMATIONS.ElixirOneToElixirTwo}
          onAnimationFinish={onSubmit}
          loop={false}
          style={LottieAbsoluteStyles()}
        />
        <SafeAreaView style={styles.container}>
          <ExtendedText style={styles.title} preset="title">
            {t('screens.recognition.double_interaction.title')}
          </ExtendedText>
          <ExtendedText style={styles.subtitle} preset="secondary-text">
            {t('screens.recognition.double_interaction.description')}
          </ExtendedText>
        </SafeAreaView>
        <View style={styles.buttonsContainer}>
          <View onTouchStart={setChildPress} onTouchEnd={setChildPress}>
            <ParentAvatarIcon width={110} height={110} reduceSize={false} />
          </View>
          <View onTouchStart={setAdultPress} onTouchEnd={setAdultPress}>
            <ChildAvatarIcon width={110} height={110} reduceSize={false} />
          </View>
        </View>
      </ImageBackground>
    );
  };
