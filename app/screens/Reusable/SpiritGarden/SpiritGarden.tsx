import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useIsFocused } from '@react-navigation/native';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import Lottie from 'lottie-react-native';

import {
  useAppSelector,
  useAppState,
  useNavigateNextQuest,
} from '../../../hooks';
import { BACKGROUND_IMAGES } from '../../../assets';
import { ExtendedText } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { ISpiritGardenScreenProps } from './SpiritGarden.types';
import { Book, Elixir } from '../../Garden/components';
import { styles } from './SpiritGarden.styles';
import { AVATARS_SVG } from '../../../assets/svg';
import { ANIMATIONS } from '../../../assets/animations';
import { LottieAbsoluteStyles } from '../../../utils';

export const SpiritGardenScreen: React.FC<ISpiritGardenScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const avatar = useAppSelector(state => state.user.parent?.avatar);
  const Avatar = AVATARS_SVG[avatar ?? 'CircleRabbitIcon'];

  const appStatus = useAppState();
  const isFocused = useIsFocused();

  const onSpiritPress = useNavigateNextQuest();

  const onAvatarPress = useCallback(() => {
    navigation.navigate('MenuStack');
  }, [navigation]);

  useEffect(() => {
    if (isFocused && appStatus === 'active') {
      AudioPlayerHelper.setInfiniteLoop('forest_ambience_sfx_loop_2_001.mp3');
    } else {
      AudioPlayerHelper.stop();
    }
  }, [appStatus, isFocused]);

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
