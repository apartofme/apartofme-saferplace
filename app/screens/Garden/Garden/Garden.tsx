import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { useIsFocused } from '@react-navigation/native';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import _ from 'lodash';

import {
  useAppDispatch,
  useAppSelector,
  useAppState,
  useInternetCheck,
  useMount,
} from '../../../hooks';
import { BACKGROUND_IMAGES } from '../../../assets';
import { Nullable } from '../../../utils';
import { ExtendedText } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { Book, Elixir, PlantArea, PlantAreaType } from '../components';
import { MixingElixirPhaseType } from '../../../utils/types';
import { questSlice } from '../../../redux/slices';
import { ONE_DAY_SECONDS } from '../../../constants/time';
import { IGardenScreenProps } from './Garden.types';
import { styles } from './Garden.styles';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { AUDIO } from '../../../constants/audio';
import { AVATARS_SVG } from '../../../assets/svg';
import { CharmBookMenuScreen, CharmBookMenuType } from '../CharmBookMenu';
import { CHARMS_PART_TWO_IDS, OPEN_DIALOG_IDS } from '../../../constants/quest';

export const GardenScreen: React.FC<IGardenScreenProps> = ({
  navigation,
  route,
}) => {
  const { isPlanting, isFirstTime, isFirstTimeGarden } = route.params;

  const { t } = useTranslation();
  const appStatus = useAppState();
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();

  useInternetCheck(
    'errors.network_progress.title',
    'errors.network_progress.description',
  );

  const [isModal, setIsModal] = useState(false);
  const [charmBookType, setCharmBookType] = useState(
    CharmBookMenuType.NoneCharm,
  );
  const [activePlantArea, setActivePlantArea] =
    useState<Nullable<PlantAreaType>>(null);
  const isBackgroundMusicEnabled = useAppSelector(
    state => state.settings.settings.audioSettings?.isBackgroundMusicEnabled,
  );
  const {
    currentDayQuestsStack,
    interruptedQuestLine,
    currentDay,
    lastDayUpdate,
  } = useAppSelector(state => state.quest);
  const parentdAvatar = useAppSelector(state => state.user.parent?.avatar);
  const currentLanguage = useAppSelector(
    state => state.settings.settings.language ?? 'en',
  );
  const allQuests = useAppSelector(
    state => state.quest.allQuests?.[currentLanguage],
  );

  const isInterruptedQuestLineEmpty = useMemo(
    () => !interruptedQuestLine,
    [interruptedQuestLine],
  );
  const AvatarIcon = AVATARS_SVG[parentdAvatar ?? 'CircleRabbitIcon'];

  useEffect(() => {
    if (isFocused && appStatus === 'active' && isBackgroundMusicEnabled) {
      AudioPlayerHelper.setInfiniteLoop(AUDIO.FOREST_AMBIENCE_LOOP);
    } else {
      AudioPlayerHelper.stop();
    }
    // intentionally
  }, [appStatus, isFocused, isBackgroundMusicEnabled]);

  useEffect(() => {
    if (appStatus === 'active' && !isPlanting && !isFirstTimeGarden) {
      const nowSeconds = +moment().format('X');

      if (
        nowSeconds - lastDayUpdate >= ONE_DAY_SECONDS &&
        !interruptedQuestLine &&
        !currentDayQuestsStack.length
      ) {
        dispatch(questSlice.actions.setLastDayUpdate());
        dispatch(questSlice.actions.updateCurrentDay(currentDay + 1));
        dispatch(questSlice.actions.setCurrentDayQuestsStack());
      }
      return;
    }
    // intentionally
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appStatus]);

  useEffect(() => {
    if (isFocused) {
      showDayOpenDialog();
      if (currentDayQuestsStack) {
        const charmPartTwoIdx = _.findIndex(
          CHARMS_PART_TWO_IDS,
          item =>
            currentDayQuestsStack[currentDayQuestsStack.length - 1] === item,
        );
        if (charmPartTwoIdx !== -1) {
          dispatch(
            questSlice.actions.updateInterruptedQuestLine({
              day: currentDay,
              id: CHARMS_PART_TWO_IDS[charmPartTwoIdx],
              interruptedQuestInx: 0,
            }),
          );
        }
      }
    }
    // intentionally
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused, currentDayQuestsStack]);

  useMount(() => {
    if (isFirstTime) {
      setTimeout(() => {
        navigation.navigate('GardenTutorialDialog', { isStart: false });
      }, 3000);
    }
    dispatch(questSlice.actions.clearQuestStack());
  });

  const onAvatarPress = useCallback(() => {
    navigation.navigate('MenuStack');
  }, [navigation]);

  const onTilePress = useCallback(() => {
    if (activePlantArea) {
      navigation.push('MixingElixirStack', {
        screen: 'ElixirInstruction',
        params: {
          phase: MixingElixirPhaseType.Mix,
          selectedPlantArea: activePlantArea,
          isFirstTimeGarden,
        },
      });
    }
  }, [activePlantArea, isFirstTimeGarden, navigation]);

  useEffect(() => {
    if (activePlantArea) {
      onTilePress();
    }
    // intentionally
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePlantArea]);

  const isOpeningDialog = useMemo(() => {
    if (currentDayQuestsStack?.length > 0) {
      return !!_.find(
        OPEN_DIALOG_IDS,
        item =>
          currentDayQuestsStack[currentDayQuestsStack.length - 1] === item,
      );
    }
    return false;
  }, [currentDayQuestsStack]);

  const title = useMemo(() => {
    const isDisplayNone =
      (!currentDayQuestsStack?.length &&
        isInterruptedQuestLineEmpty &&
        !isPlanting) ||
      isOpeningDialog;

    return (
      <View
        style={[styles.titleContainer, isDisplayNone && styles.displayNone]}>
        <ExtendedText preset="tertiary-text-medium" style={styles.title}>
          {isPlanting
            ? t('screens.garden.tapTitle')
            : t('screens.garden.tapBook')}
        </ExtendedText>
      </View>
    );
  }, [
    currentDayQuestsStack,
    isInterruptedQuestLineEmpty,
    isOpeningDialog,
    isPlanting,
    t,
  ]);

  const setModalStatus = useCallback(() => {
    setIsModal(!isModal);
  }, [isModal]);

  const showDayOpenDialog = useCallback(() => {
    if (!interruptedQuestLine && !isPlanting && currentDayQuestsStack) {
      const dayOpenDialogIdx = _.findIndex(
        OPEN_DIALOG_IDS,
        item =>
          item === currentDayQuestsStack[currentDayQuestsStack?.length - 1],
      );

      if (dayOpenDialogIdx !== -1) {
        const newQuestLineId = OPEN_DIALOG_IDS[dayOpenDialogIdx];
        const newQuests = _.values(allQuests?.[newQuestLineId].quests);

        dispatch(
          questSlice.actions.saveCurrentQuestLine({
            id: newQuests[0].questLineId,
            quests: newQuests,
          }),
        );

        dispatch(questSlice.actions.saveCurrentQuestIdx(0));
        setTimeout(() => {
          navigation.push('QuestStack', {
            screen: newQuests[0].type,
            params: {
              data: { ...newQuests[0] },
            },
          });
        }, 2000);
      }
    }
  }, [
    allQuests,
    currentDayQuestsStack,
    dispatch,
    interruptedQuestLine,
    navigation,
    isPlanting,
  ]);

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.GARDEN}
      style={generalStyles.flex}>
      <Modal
        isVisible={isModal}
        animationIn="fadeIn"
        animationOut="fadeOut"
        style={styles.modal}>
        <CharmBookMenuScreen
          setModalStatus={setModalStatus}
          type={charmBookType}
        />
      </Modal>
      <View style={generalStyles.flex}>
        <TouchableOpacity
          onPress={onAvatarPress}
          style={styles.avatarContainer}
          disabled={isFirstTime}>
          <AvatarIcon width={100} height={100} reduceSize={false} />
        </TouchableOpacity>
        <Elixir />
        <View style={styles.plantArea}>
          <PlantArea
            isPlanting={isPlanting}
            activePlantArea={activePlantArea}
            setActivePlantArea={setActivePlantArea}
          />
        </View>
      </View>
      <View>
        {title}
        <Book
          isDisabled={isPlanting || isFirstTimeGarden || isOpeningDialog}
          setModalStatus={setModalStatus}
          setType={setCharmBookType}
        />
      </View>
    </ImageBackground>
  );
};
