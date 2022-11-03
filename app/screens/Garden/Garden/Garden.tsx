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
import { OPEN_DIALOG_IDS } from '../../../constants/quest';

export const GardenScreen: React.FC<IGardenScreenProps> = ({
  navigation,
  route,
}) => {
  const { isPlanting, isFirstTime, isFirstTimeGarden } = route.params;

  const { t } = useTranslation();
  const appStatus = useAppState();
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();

  const [isModal, setIsModal] = useState(false);
  const [charmBookType, setCharmBookType] = useState(
    CharmBookMenuType.NoneCharm,
  );
  const [isPrevStatusBackground, setIsPrevStatusBackground] = useState(false);
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
  const isInterruptedQuestLineEmpty = !interruptedQuestLine;
  const parentdAvatar = useAppSelector(state => state.user.parent?.avatar);
  const currentLanguage = useAppSelector(
    state => state.settings.settings.language ?? 'en',
  );
  const allQuests = useAppSelector(
    state => state.quest.allQuests?.[currentLanguage],
  );

  const AvatarIcon = AVATARS_SVG[parentdAvatar ?? 'CircleRabbitIcon'];

  useEffect(() => {
    if (isFocused && appStatus === 'active' && isBackgroundMusicEnabled) {
      AudioPlayerHelper.setInfiniteLoop(AUDIO.FOREST_AMBIENCE_LOOP);
      showDayOpenDialog();
    } else {
      AudioPlayerHelper.stop();
    }
    // intentionally
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appStatus, isFocused, isBackgroundMusicEnabled]);

  useEffect(() => {
    if (appStatus === 'background') {
      setIsPrevStatusBackground(true);
      return;
    }

    if (appStatus === 'active' && isPrevStatusBackground) {
      const nowSeconds = +moment().format('X');

      if (
        nowSeconds - lastDayUpdate >= ONE_DAY_SECONDS &&
        !interruptedQuestLine &&
        !currentDayQuestsStack.length
      ) {
        dispatch(questSlice.actions.setLastDayUpdate());
        dispatch(questSlice.actions.updateCurrentDay(currentDay + 1));
        dispatch(questSlice.actions.setCurrentDayQuestsStack());
        showDayOpenDialog();
      }
      setIsPrevStatusBackground(false);
      return;
    }
    // intentionally
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appStatus]);

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
      navigation.navigate('MixingElixirStack', {
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

  const title = useMemo(() => {
    const isDisplayNone =
      !currentDayQuestsStack.length &&
      isInterruptedQuestLineEmpty &&
      !isPlanting;

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
  }, [currentDayQuestsStack, isInterruptedQuestLineEmpty, isPlanting, t]);

  const setModalStatus = useCallback(() => {
    setIsModal(!isModal);
  }, [isModal]);

  const showDayOpenDialog = useCallback(() => {
    const dayOpenDialogIdx = _.findIndex(
      OPEN_DIALOG_IDS,
      item => item === currentDayQuestsStack[currentDayQuestsStack.length - 1],
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
      }, 50);
    }
  }, [allQuests, currentDayQuestsStack, dispatch, navigation]);

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
          <AvatarIcon width={80} height={80} />
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
          isDisabled={isPlanting || isFirstTimeGarden}
          setModalStatus={setModalStatus}
          setType={setCharmBookType}
        />
      </View>
    </ImageBackground>
  );
};
