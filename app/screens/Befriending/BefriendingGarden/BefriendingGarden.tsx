import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useIsFocused } from '@react-navigation/native';
import { ImageBackground, TouchableOpacity, View } from 'react-native';

import { useAppSelector, useAppState } from '../../../hooks';
import { BACKGROUND_IMAGES } from '../../../assets';
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
import { AVATARS_SVG } from '../../../assets/svg';

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

    const avatar = useAppSelector(state => state.user.parent?.avatar);

    const Avatar = AVATARS_SVG[avatar ?? 'CircleRabbitIcon'];

    const [activePlantArea, setActivePlantArea] =
      useState<Nullable<PlantAreaType>>(null);

    const onAvatarPress = useCallback(() => {
      navigation.navigate('MenuStack');
    }, [navigation]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN}
        style={generalStyles.flex}>
        <View style={generalStyles.flex}>
          <TouchableOpacity
            onPress={onAvatarPress}
            style={styles.avatarContainer}
            disabled={true}>
            <View style={styles.avatar}>
              <Avatar width={80} height={80} />
            </View>
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
