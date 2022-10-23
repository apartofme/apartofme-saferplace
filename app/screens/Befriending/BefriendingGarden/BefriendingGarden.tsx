import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useIsFocused } from '@react-navigation/native';
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';

import { useAppSelector, useAppState } from '../../../hooks';
import { BACKGROUND_IMAGES, IMAGES } from '../../../assets';
import { Nullable } from '../../../utils';
import { ExtendedText } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { IBefriendingGardenScreenProps } from './BefriendingGarden.types';
import {
  Book,
  Elixir,
  PlantArea,
  PlantAreaType,
} from '../../Garden/components';
import { styles } from './BefriendingGarden.styles';

export const BefriendingGardenScreen: React.FC<IBefriendingGardenScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();
    const appStatus = useAppState();
    const isFocused = useIsFocused();

    useEffect(() => {
      if (isFocused && appStatus === 'active') {
        AudioPlayerHelper.setInfiniteLoop('forest_ambience_sfx_loop_2_001.mp3');
      } else {
        AudioPlayerHelper.stop();
      }
    }, [appStatus, isFocused]);

    const childAvatar = useAppSelector(
      state => state.user.child?.avatar,
    ) as keyof typeof IMAGES;

    const [activePlantArea, setActivePlantArea] =
      useState<Nullable<PlantAreaType>>(null);

    const onAvatarPress = useCallback(() => {
      navigation.navigate('MenuStack');
    }, [navigation]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.GARDEN_BACKGROUND}
        style={generalStyles.flex}>
        <View style={generalStyles.flex}>
          <TouchableOpacity
            onPress={onAvatarPress}
            style={styles.avatarContainer}
            disabled={true}>
            <Image source={IMAGES[childAvatar]} style={styles.avatar} />
          </TouchableOpacity>
          <Elixir />
          <View style={styles.plantArea}>
            <PlantArea
              isBefriending={true}
              isPlanting={false}
              activePlantArea={activePlantArea}
              setActivePlantArea={setActivePlantArea}
            />
          </View>
        </View>
        <View>
          <View style={[styles.titleContainer]}>
            <ExtendedText preset="tertiary-text-medium" style={styles.title}>
              {t('screens.garden.tapSpirit')}
            </ExtendedText>
          </View>
          <Book isDisabled={true} />
        </View>
      </ImageBackground>
    );
  };
