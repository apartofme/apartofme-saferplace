import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';

import { AVATARS_SVG } from '../../../assets/svg';
import { ElixirThreeIcon } from '../../../assets/svg/garden';
import { ExtendedText } from '../../../components';
import { AUDIO } from '../../../constants/audio';
import { useAppDispatch, useAppSelector } from '../../../hooks';
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

    const [isChildPress, setIsChildPress] = useState(false);
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
      setIsChildPress(!isChildPress);
    }, [isChildPress]);

    const setAdultPress = useCallback(() => {
      setIsAdultPress(!isAdultPress);
    }, [isAdultPress]);

    useEffect(() => {
      if (isChildPress && isAdultPress && !isSoundStart) {
        AudioPlayerHelper.play(AUDIO.BOTTLE_FILLING);
        setIsSoundStart(true);
      } else if (isChildPress && isAdultPress) {
        AudioPlayerHelper.start();
      } else {
        AudioPlayerHelper.pause();
      }
    }, [isAdultPress, isChildPress, isSoundStart]);

    useEffect(() => {
      if (isChildPress && isAdultPress) {
        dispatch(elixirSlice.actions.updateFullnessElixir(fullnessElixir + 1));
        navigation.navigate('RecognitionDoubleInteractionSuccess');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAdultPress, isChildPress]);

    return (
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
            <ParentAvatarIcon width={90} height={90} />
          </PanGestureHandler>
          <PanGestureHandler onBegan={setAdultPress} onEnded={setAdultPress}>
            <ChildAvatarIcon width={90} height={90} />
          </PanGestureHandler>
        </GestureHandlerRootView>
      </SafeAreaView>
    );
  };
