import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useIsFocused } from '@react-navigation/native';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import Lottie from 'lottie-react-native';

import { useAppSelector, useAppState } from '../../../hooks';
import { BACKGROUND_IMAGES } from '../../../assets';
import { LottieAbsoluteStyles } from '../../../utils';
import { ExtendedText } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { IBefriendingGardenScreenProps } from './BefriendingGarden.types';
import { Book, Elixir, PlantAreaType } from '../../Garden/components';
import { styles } from './BefriendingGarden.styles';
import { AVATARS_SVG } from '../../../assets/svg';
import { MixingElixirPhaseType } from '../../../utils/types';
import { ANIMATIONS } from '../../../assets/animations';

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

    const onAvatarPress = useCallback(() => {
      navigation.navigate('MenuStack');
    }, [navigation]);

    const onSpiritPress = useCallback(() => {
      navigation.navigate('MixingElixirStack', {
        screen: 'ElixirInstruction',
        params: {
          phase: MixingElixirPhaseType.Mix,
          isFirstTimeGarden: false,
          selectedPlantArea: PlantAreaType.Center,
        },
      });
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
            <TouchableOpacity
              style={styles.onPressView}
              onPress={onSpiritPress}
            />
            <Lottie
              source={ANIMATIONS.TROUBLE_SOME_SPIRIT_ENTERS}
              autoPlay
              loop={false}
              style={LottieAbsoluteStyles(-10)}
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
