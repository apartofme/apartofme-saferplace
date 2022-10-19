import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { useIsFocused } from '@react-navigation/native';
import {
  Image,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  useAppDispatch,
  useAppSelector,
  useAppState,
  useMount,
} from '../../../hooks';
import { IMAGES } from '../../../assets';
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

export const GardenScreen: React.FC<IGardenScreenProps> = ({
  navigation,
  route,
}) => {
  const { isPlanting, isFirstTime, isFirstTimeGarden } = route.params;

  const { t } = useTranslation();
  const appStatus = useAppState();
  const dispatch = useAppDispatch();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && appStatus === 'active') {
      AudioPlayerHelper.setInfiniteLoop('forest_ambience_sfx_loop_2_001.mp3');
    } else {
      AudioPlayerHelper.stop();
    }
  }, [appStatus, isFocused]);

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
  const childAvatar = useAppSelector(
    state => state.user.child?.avatar,
  ) as keyof typeof IMAGES;

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

  const onTitlePress = useCallback(() => {
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

  const title = useMemo(() => {
    const isDisplayNone =
      isCurrentDayQuestStackEmpty && isInterruptedQuestLineEmpty && !isPlanting;

    return (
      <Pressable
        onPress={onTitlePress}
        style={[styles.titleContainer, isDisplayNone && styles.displayNone]}
        disabled={!isPlanting}>
        <ExtendedText preset="tertiary-text-medium" style={styles.title}>
          {isPlanting
            ? t('screens.garden.tapTitle')
            : t('screens.garden.tapBook')}
        </ExtendedText>
      </Pressable>
    );
  }, [
    isCurrentDayQuestStackEmpty,
    isInterruptedQuestLineEmpty,
    isPlanting,
    onTitlePress,
    t,
  ]);

  return (
    <ImageBackground
      source={IMAGES.GARDEN_BACKGROUND}
      style={generalStyles.flex}>
      <View style={generalStyles.flex}>
        <TouchableOpacity
          onPress={onAvatarPress}
          style={styles.avatarContainer}
          disabled={isFirstTime}>
          <Image source={IMAGES[childAvatar]} style={styles.avatar} />
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
        <Book isDisabled={isPlanting || isFirstTimeGarden} />
      </View>
    </ImageBackground>
  );
};
