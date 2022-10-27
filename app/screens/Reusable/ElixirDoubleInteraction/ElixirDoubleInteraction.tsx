import React, { useCallback, useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { CHARMS_BACKGROUNDS } from '../../../assets';
import { AVATARS_SVG } from '../../../assets/svg';
import { ExtendedText } from '../../../components';
import { AUDIO } from '../../../constants/audio';
import { THE_CHARM_OF_BEFRIENDING_ID } from '../../../constants/quest';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { elixirSlice, questSlice } from '../../../redux/slices';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { generalStyles } from '../../../utils/styles';
import { AvatarsNameType } from '../../../utils/types';
import { styles } from './ElixirDoubleInteraction.styles';
import { IElixirDoubleInteractionScreenProps } from './ElixirDoubleInteraction.types';

export const ElixirDoubleInteractionScreen: React.FC<IElixirDoubleInteractionScreenProps> =
  ({ route, navigation }) => {
    const { title, elixirReward, backgroundImage } = route.params.data;
    const dispatch = useAppDispatch();

    const currentQuestLine = useAppSelector(
      state => state.quest.currentQuestLine,
    );
    const fullnessElixir = useAppSelector(state => state.elixir.fullnessElixir);
    const isCurrentQuestCompleted = useAppSelector(
      state => state.quest.isCurrentQuestCompleted,
    );

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
        return;
      }
      if (isChildPress && isAdultPress) {
        AudioPlayerHelper.start();
        return;
      }
      AudioPlayerHelper.pause();
    }, [isAdultPress, isChildPress, isSoundStart]);

    useEffect(() => {
      if (isChildPress && isAdultPress) {
        if (isCurrentQuestCompleted) {
          dispatch(questSlice.actions.setIsCurrentQuestCompleted(false));
          navigation.push('GardenStack', {
            screen: 'CompletedCharmEnd',
          });
          return;
        }

        dispatch(
          elixirSlice.actions.updateFullnessElixir(
            fullnessElixir + (elixirReward ?? 1),
          ),
        );

        if (
          currentQuestLine &&
          currentQuestLine.id === THE_CHARM_OF_BEFRIENDING_ID
        ) {
          navigation.push('BefriendingStack');
          return;
        }
        navigation.navigate('ElixirTitleButton');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isChildPress, isAdultPress]);

    return (
      <ImageBackground
        source={
          CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
        }
        style={generalStyles.flex}>
        <SafeAreaView style={styles.container}>
          <View style={generalStyles.aiCenter}>
            <ExtendedText style={styles.title}>{title}</ExtendedText>
          </View>
          {/* // TODO: change to animation */}
          <View
            style={[
              styles.square,
              isChildPress && isAdultPress && styles.redBackground,
            ]}
          />

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
