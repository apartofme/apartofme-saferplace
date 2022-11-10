import { values } from 'lodash';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
} from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';
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
import { POTION_FILL_ANIMATIONS } from '../../../assets/animations';
import { PotionFillKeys } from '../../../utils/types';

export const ElixirDoubleInteractionScreen: React.FC<IElixirDoubleInteractionScreenProps> =
  ({ route, navigation }) => {
    const { title, elixirReward, backgroundImage } = route.params.data;
    const dispatch = useAppDispatch();
    const appStatus = useAppState();
    const animationRef = useRef<Lottie>(null);

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
    const [isSoundStart, setIsSoundStart] = useState(false);

    const ParentAvatarIcon = AVATARS_SVG[parent?.avatar ?? 'CircleRabbitIcon'];
    const ChildAvatarIcon = AVATARS_SVG[child?.avatar ?? 'CircleBearIcon'];

    const setChildPress = useCallback(() => {
      setIsChildPress(!isChildPress);
    }, [isChildPress]);

    const setAdultPress = useCallback(() => {
      setIsAdultPress(!isAdultPress);
    }, [isAdultPress]);

    useEffect(() => {
      if (isChildPress && isAdultPress && !isSoundStart && isSoundFXEnabled) {
        AudioPlayerHelper.play(AUDIO.BOTTLE_FILLING);
        setIsSoundStart(true);
        return;
      }
      if (isChildPress && isAdultPress && isSoundFXEnabled) {
        AudioPlayerHelper.start();
        return;
      }
      AudioPlayerHelper.pause();
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
        animationRef.current?.pause();
      }
    }, [appStatus]);

    const onSubmit = useCallback(() => {
      if (isChildPress && isAdultPress) {
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isChildPress, isAdultPress]);

    const animation = useMemo(() => {
      const from = getElixirAnimationKeyByRange(fullnessElixir).replace(
        'Icon',
        '',
      );
      const to = getElixirAnimationKeyByRange(
        fullnessElixir + (elixirReward ?? 1),
      ).replace('Icon', '');

      return POTION_FILL_ANIMATIONS[`${from}To${to}` as PotionFillKeys];
    }, [elixirReward, fullnessElixir]);

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
          autoPlay
          loop={false}
          style={LottieAbsoluteStyles()}
        />
        <SafeAreaView style={styles.container}>
          <View style={generalStyles.aiCenter}>
            <ExtendedText style={styles.title}>{title}</ExtendedText>
          </View>

          <View style={styles.buttonsContainer}>
            <View onTouchStart={setChildPress} onTouchEnd={setChildPress}>
              <ParentAvatarIcon width={110} height={110} reduceSize={false} />
            </View>
            <View onTouchStart={setAdultPress} onTouchEnd={setAdultPress}>
              <ChildAvatarIcon width={110} height={110} reduceSize={false} />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  };
