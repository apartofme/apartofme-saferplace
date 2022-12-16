import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import Lottie from 'lottie-react-native';

import {
  useAppDispatch,
  useAppSelector,
  useMount,
  useNavigateNextQuest,
} from '../../../hooks';
import { BACKGROUND_IMAGES } from '../../../assets';
import { ExtendedText } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { ISpiritGardenScreenProps } from './SpiritGarden.types';
import { Book, Elixir } from '../../Garden/components';
import { styles } from './SpiritGarden.styles';
import { AVATARS_SVG } from '../../../assets/svg';
import { ANIMATIONS } from '../../../assets/animations';
import { LottieAbsoluteStyles } from '../../../utils';
import { cacheSlice } from '../../../redux/slices';
import { AUDIO } from '../../../constants/audio';

export const SpiritGardenScreen: React.FC<ISpiritGardenScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const avatar = useAppSelector(state => state.user.parent?.avatar);
  const Avatar = AVATARS_SVG[avatar ?? 'CircleRabbitIcon'];

  const onSpiritPress = useNavigateNextQuest();

  const onAvatarPress = useCallback(() => {
    navigation.navigate('MenuStack');
  }, [navigation]);

  useMount(() => {
    dispatch(cacheSlice.actions.setBackgroundAudio(AUDIO.FOREST_AMBIENCE_LOOP));
  });

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
            <Avatar width={100} height={100} />
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
            style={LottieAbsoluteStyles()}
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
