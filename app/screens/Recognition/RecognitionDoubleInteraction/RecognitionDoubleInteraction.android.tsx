import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Lottie from 'lottie-react-native';

import { CHARMS_BACKGROUNDS } from '../../../assets';
import { AVATARS_SVG } from '../../../assets/svg';
import { ExtendedText } from '../../../components';
import { AUDIO } from '../../../constants/audio';
import { useAppDispatch, useAppSelector, useAppState } from '../../../hooks';
import { elixirSlice } from '../../../redux/slices';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { generalStyles } from '../../../utils/styles';
import { styles } from './RecognitionDoubleInteraction.styles';
import { IRecognitionDoubleInteractionScreenProps } from './RecognitionDoubleInteraction.types';
import { POTION_FILL_ANIMATIONS } from '../../../assets/animations';
import { LottieAbsoluteStyles } from '../../../utils';

export const RecognitionDoubleInteractionScreen: React.FC<IRecognitionDoubleInteractionScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const appStatus = useAppState();
    const animationRef = useRef<Lottie>(null);

    const fullnessElixir = useAppSelector(state => state.elixir.fullnessElixir);

    const [isChildPress, setIsChildPress] = useState(false);
    const [isAdultPress, setIsAdultPress] = useState(false);

    const [isSoundStart, setIsSoundStart] = useState(false);

    const { parent, child } = useAppSelector(state => state.user);

    const ParentAvatarIcon = AVATARS_SVG[parent?.avatar ?? 'CircleRabbitIcon'];

    const ChildAvatarIcon = AVATARS_SVG[child?.avatar ?? 'CircleBearIcon'];

    const setChildPress = useCallback(() => {
      setIsChildPress(!isChildPress);
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

    useEffect(() => {
      if (isChildPress && isAdultPress) {
        animationRef.current?.play();
        return;
      }
      animationRef.current?.pause();
    }, [isAdultPress, isChildPress]);

    useEffect(() => {
      if (appStatus !== 'active') {
        AudioPlayerHelper.stop();
      }
    }, [appStatus]);

    const onSubmit = useCallback(() => {
      if (isChildPress && isAdultPress) {
        dispatch(elixirSlice.actions.updateFullnessElixir(fullnessElixir + 1));
        navigation.navigate('RecognitionDoubleInteractionSuccess');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAdultPress, isChildPress]);

    return (
      <ImageBackground
        source={CHARMS_BACKGROUNDS.ALTERNATIVE_GARDEN_BACKGROUND}
        style={generalStyles.flex}>
        <Lottie
          ref={animationRef}
          source={POTION_FILL_ANIMATIONS.OneToTwo}
          onAnimationFinish={onSubmit}
          loop={false}
          style={LottieAbsoluteStyles(-30)}
        />
        <SafeAreaView style={styles.container}>
          <ExtendedText style={styles.title}>
            {t('screens.recognition.double_interaction.title')}
          </ExtendedText>

          <ExtendedText style={styles.subtitle}>
            {t('screens.recognition.double_interaction.description')}
          </ExtendedText>
        </SafeAreaView>
        <GestureHandlerRootView style={styles.buttonsContainer}>
          <PanGestureHandler onBegan={setChildPress} onEnded={setChildPress}>
            <View>
              <ParentAvatarIcon width={90} height={90} reduceSize={false} />
            </View>
          </PanGestureHandler>
          <PanGestureHandler onBegan={setAdultPress} onEnded={setAdultPress}>
            <View>
              <ChildAvatarIcon width={90} height={90} reduceSize={false} />
            </View>
          </PanGestureHandler>
        </GestureHandlerRootView>
      </ImageBackground>
    );
  };
