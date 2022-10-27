import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { useIsFocused } from '@react-navigation/native';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';

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
import { AvatarsNameType, MixingElixirPhaseType } from '../../../utils/types';
import { questSlice } from '../../../redux/slices';
import { ONE_DAY_SECONDS } from '../../../constants/time';
import { IGardenScreenProps } from './Garden.types';
import { styles } from './Garden.styles';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { AUDIO } from '../../../constants/audio';
import { AVATARS_SVG } from '../../../assets/svg';
import { CharmBookMenuScreen, CharmBookMenuType } from '../CharmBookMenu';

export const GardenScreen: React.FC<IGardenScreenProps> = ({
  navigation,
  route,
}) => {
  const { isPlanting, isFirstTime, isFirstTimeGarden } = route.params;

  const { t } = useTranslation();
  const appStatus = useAppState();
  const dispatch = useAppDispatch();
  const [isModal, setIsModal] = useState(false);
  const [charmBookType, setCharmBookType] = useState(
    CharmBookMenuType.NoneCharm,
  );

  const isFocused = useIsFocused();

  const isBackgroundMusicEnabled = useAppSelector(
    state => state.settings.settings.audioSettings?.isBackgroundMusicEnabled,
  );

  useEffect(() => {
    if (isFocused && appStatus === 'active' && isBackgroundMusicEnabled) {
      AudioPlayerHelper.setInfiniteLoop(AUDIO.FOREST_AMBIENCE_LOOP);
    } else {
      AudioPlayerHelper.stop();
    }
  }, [appStatus, isFocused, isBackgroundMusicEnabled]);

  const isCurrentDayQuestStackEmpty = useAppSelector(
    state => !state.quest.currentDayQuestsStack.length,
  );
  const isInterruptedQuestLineEmpty = useAppSelector(
    state => !state.quest.interruptedQuestLine,
  );
  const currentDay = useAppSelector(state => state.quest.currentDay);
  const lastDayUpdate = useAppSelector(state => state.quest.lastDayUpdate);
  const interruptedQuestLine = useAppSelector(
    state => state.quest.interruptedQuestLine,
  );
  const isCurrentDayQuestsStackEmpty = useAppSelector(
    state => !state.quest.currentQuestStack.length,
  );

  const parentdAvatar =
    useAppSelector(state => state.user.parent?.avatar) ??
    `Circle${AvatarsNameType.Rabbit}`;
  const AvatarIcon = AVATARS_SVG[parentdAvatar];

  const [isPrevStatusBackground, setIsPrevStatusBackground] = useState(false);
  const [activePlantArea, setActivePlantArea] =
    useState<Nullable<PlantAreaType>>(null);

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
        !isCurrentDayQuestsStackEmpty
      ) {
        dispatch(questSlice.actions.setLastDayUpdate());
        dispatch(questSlice.actions.updateCurrentDay(currentDay + 1));
        dispatch(questSlice.actions.setCurrentDayQuestsStack());
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
      isCurrentDayQuestStackEmpty && isInterruptedQuestLineEmpty && !isPlanting;

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
  }, [isCurrentDayQuestStackEmpty, isInterruptedQuestLineEmpty, isPlanting, t]);

  const setModalStatus = useCallback(() => {
    setIsModal(!isModal);
  }, [isModal]);

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
