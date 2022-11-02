import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';

import { CHARMS_BACKGROUNDS } from '../../../assets';
import { AVATARS_SVG } from '../../../assets/svg';
import { ElixirThreeIcon } from '../../../assets/svg/garden';
import { ExtendedText } from '../../../components';
import { AUDIO } from '../../../constants/audio';
import { useAppDispatch, useAppSelector, useAppState } from '../../../hooks';
import { elixirSlice } from '../../../redux/slices';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { generalStyles } from '../../../utils/styles';
import { styles } from './RecognitionDoubleInteraction.styles';
import { IRecognitionDoubleInteractionScreenProps } from './RecognitionDoubleInteraction.types';

export const RecognitionDoubleInteractionScreen: React.FC<IRecognitionDoubleInteractionScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

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
        source={CHARMS_BACKGROUNDS.ALTERNATIVE_GARDEN_BACKGROUND}
        style={generalStyles.flex}>
        <SafeAreaView style={styles.container}>
          <ExtendedText style={styles.title}>
            {t('screens.recognition.double_interaction.title')}
          </ExtendedText>
          {/* // TODO: change to animation */}
          <View style={generalStyles.aiCenter}>
            <ElixirThreeIcon />
          </View>
          <ExtendedText style={styles.subtitle}>
            {t('screens.recognition.double_interaction.description')}
          </ExtendedText>
          <GestureHandlerRootView style={styles.buttonsContainer}>
            <PanGestureHandler onBegan={setChildPress} onEnded={setChildPress}>
              <View>
                <ParentAvatarIcon width={90} height={90} />
              </View>
            </PanGestureHandler>
            <PanGestureHandler onBegan={setAdultPress} onEnded={setAdultPress}>
              <View>
                <ChildAvatarIcon width={90} height={90} />
              </View>
            </PanGestureHandler>
          </GestureHandlerRootView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
