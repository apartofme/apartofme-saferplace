import { values } from 'lodash';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
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
import {
  DAY_14_CLOSING_DIALOGUE_ID,
  THE_CHARM_OF_BEFRIENDING_ID,
  THE_CHARM_OF_WEAVING_ID,
} from '../../../constants/quest';
import {
  useAppDispatch,
  useAppSelector,
  useAppState,
  useInternetCheck,
} from '../../../hooks';
import { elixirSlice, questSlice } from '../../../redux/slices';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { generalStyles } from '../../../utils/styles';
import { styles } from './ElixirDoubleInteraction.styles';
import { IElixirDoubleInteractionScreenProps } from './ElixirDoubleInteraction.types';
import {
  getElixirAnimationKeyByRange,
  LottieAbsoluteStyles,
} from '../../../utils';
import { ANIMATIONS, POTION_FILL_ANIMATIONS } from '../../../assets/animations';
import { PotionFillKeys } from '../../../utils/types';

export const ElixirDoubleInteractionScreen: React.FC<IElixirDoubleInteractionScreenProps> =
  ({ navigation, route }) => {
    const { title, elixirReward, backgroundImage } = route.params.data;
    const dispatch = useAppDispatch();
    const animationRef = useRef<Lottie>(null);
    const appStatus = useAppState();

    useInternetCheck(
      'errors.network_progress.title',
      'errors.network_progress.description',
    );

    const {
      currentQuestLine,
      isCurrentQuestCompleted,
      allQuests,
      isFirstTimeGrounding,
    } = useAppSelector(state => state.quest);
    const fullnessElixir = useAppSelector(state => state.elixir.fullnessElixir);
    const { settings } = useAppSelector(state => state.settings);
    const currentLanguage = settings.language ?? 'en';
    const isSoundFXEnabled = settings.audioSettings?.isSoundFXEnabled;
    const quests = allQuests?.[currentLanguage];
    const { parent, child } = useAppSelector(state => state.user);

    const [isChildPress, setIsChildPress] = useState(false);
    const [isAdultPress, setIsAdultPress] = useState(false);
    const [isOnDoublePress, setOnDoublePress] = useState(false);

    const ParentAvatarIcon = AVATARS_SVG[parent?.avatar ?? 'CircleRabbitIcon'];
    const ChildAvatarIcon = AVATARS_SVG[child?.avatar ?? 'CircleBearIcon'];

    const setChildPress = useCallback(() => {
      setIsChildPress(!isChildPress);
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
        return;
      }
    }, [isCurrentQuestCompleted, isOnDoublePress, isSoundFXEnabled]);

    useEffect(() => {
      if (appStatus !== 'active') {
        AudioPlayerHelper.stop();
        animationRef.current?.pause();
      }
    }, [appStatus]);

    useEffect(() => {
      if (isOnDoublePress) {
        animationRef.current?.play();
        return;
      }
      animationRef.current?.pause();
    }, [isOnDoublePress]);

    const onSubmit = useCallback(() => {
      if (isOnDoublePress) {
        // *** Flow for complited charms ***
        if (isCurrentQuestCompleted) {
          dispatch(questSlice.actions.setIsCurrentQuestCompleted(false));
          navigation.push('GardenStack', {
            screen: 'CompletedCharmEnd',
          });
          return;
        }

        // *** Flow for graunded charms from menu ***
        if (!isFirstTimeGrounding) {
          navigation.replace('GardenStack', {
            screen: 'Garden',
            params: {
              isPlanting: false,
              isFirstTime: false,
              isFirstTimeGarden: false,
            },
          });
          return;
        }

        // *** Flow for static navigation charm og befriending ***
        if (
          currentQuestLine &&
          currentQuestLine.id === THE_CHARM_OF_BEFRIENDING_ID
        ) {
          navigation.push('BefriendingStack');
          return;
        }

        // *** Flow for static navigation day 14 closing dialog ***
        if (
          currentQuestLine &&
          currentQuestLine.id === THE_CHARM_OF_WEAVING_ID
        ) {
          const newQuestLineId = DAY_14_CLOSING_DIALOGUE_ID;
          const newQuests = values(quests?.[newQuestLineId].quests);

          dispatch(
            questSlice.actions.saveCurrentQuestLine({
              id: newQuests[0].questLineId,
              quests: newQuests,
            }),
          );
          dispatch(
            questSlice.actions.saveCompletedQuestsId(+THE_CHARM_OF_WEAVING_ID),
          );
          dispatch(questSlice.actions.updateCurrentDayQuestsStack());
          dispatch(questSlice.actions.saveCurrentQuestIdx(0));

          navigation.push('QuestStack', {
            screen: newQuests[0].type,
            params: {
              data: { ...newQuests[0] },
            },
          });
          return;
        }

        dispatch(
          elixirSlice.actions.updateFullnessElixir(
            fullnessElixir + (elixirReward ?? 1),
          ),
        );
        dispatch(questSlice.actions.updateCurrentDayQuestsStack());

        navigation.replace('ElixirTitleButton');
      }
      // intentionally
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOnDoublePress]);

    const animation = useMemo(() => {
      if (isCurrentQuestCompleted) {
        return ANIMATIONS.DANCING_MONTH_CONMPLETED;
      }
      const from = getElixirAnimationKeyByRange(fullnessElixir).replace(
        'Icon',
        '',
      );
      const to = getElixirAnimationKeyByRange(
        fullnessElixir + (elixirReward ?? 1),
      ).replace('Icon', '');

      return POTION_FILL_ANIMATIONS[`${from}To${to}` as PotionFillKeys];
    }, [elixirReward, fullnessElixir, isCurrentQuestCompleted]);

    return (
      <ImageBackground
        source={
          CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
        }
        style={generalStyles.flex}>
        <Lottie
          ref={animationRef}
          source={animation}
          onAnimationFinish={onSubmit}
          loop={false}
          style={
            isCurrentQuestCompleted
              ? styles.animation
              : LottieAbsoluteStyles(-20)
          }
        />
        <SafeAreaView style={styles.container}>
          <View style={generalStyles.aiCenter}>
            <ExtendedText style={styles.title} preset="title">
              {title}
            </ExtendedText>
          </View>
        </SafeAreaView>
        <GestureHandlerRootView style={styles.buttonsContainer}>
          <PanGestureHandler onBegan={setChildPress} onEnded={setChildPress}>
            <View>
              <ParentAvatarIcon width={110} height={110} reduceSize={false} />
            </View>
          </PanGestureHandler>
          <PanGestureHandler onBegan={setAdultPress} onEnded={setAdultPress}>
            <View>
              <ChildAvatarIcon width={110} height={110} reduceSize={false} />
            </View>
          </PanGestureHandler>
        </GestureHandlerRootView>
      </ImageBackground>
    );
  };
