import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import {
  Image,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';

import { IMAGES } from '../../../assets';
import { ExtendedText } from '../../../components';
import { useAppSelector, useMount } from '../../../hooks';
import { Nullable } from '../../../utils';
import { generalStyles } from '../../../utils/styles';
import { Book, PlantArea, PlantAreaType } from '../components';
import { IGardenScreenProps } from './Garden.types';
import { styles } from './Garden.styles';
import { MixingElixirPhaseType } from '../../../utils/types';

export const GardenScreen: React.FC<IGardenScreenProps> = ({
  navigation,
  route,
}) => {
  const { isPlanting, isFirstTime, isFirstTimeGarden } = route.params;
  const { t } = useTranslation();
  const isCurrentDayQuestStackEmpty = useAppSelector(
    state => !state.quest.currentDayQuestsStack.length,
  );
  const isInterruptedQuestLineEmpty = useAppSelector(
    state => !state.quest.interruptedQuestLine,
  );

  const [activePlantArea, setActivePlantArea] =
    useState<Nullable<PlantAreaType>>(null);

  useMount(() => {
    if (isFirstTime) {
      setTimeout(() => {
        navigation.navigate('GardenTutorialDialog', { isStart: false });
      }, 3000);
    }
  });

  const childAvatar = useAppSelector(
    state => state.user.child?.avatar,
  ) as keyof typeof IMAGES;

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
      !isPlanting &&
      (isCurrentDayQuestStackEmpty || isInterruptedQuestLineEmpty) &&
      isPlanting;

    return (
      <Pressable
        onPress={onTitlePress}
        style={[styles.titleContainer, isDisplayNone && styles.displayNone]}
        disabled={!isPlanting}>
        <ExtendedText>
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
      // TODO: change to the real image
      source={{
        uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
      }}
      style={generalStyles.flex}>
      <View style={generalStyles.flex}>
        <TouchableOpacity
          onPress={onAvatarPress}
          style={styles.zIndex10}
          disabled={isFirstTime}>
          <Image source={IMAGES[childAvatar]} style={styles.avatar} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={_.noop}
          disabled={isPlanting}
          style={styles.zIndex10}>
          <Image source={IMAGES.LOGO} style={styles.elixir} />
        </TouchableOpacity>
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
