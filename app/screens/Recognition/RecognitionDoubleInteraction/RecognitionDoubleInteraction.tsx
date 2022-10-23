import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { BACKGROUND_IMAGES } from '../../../assets';
import { AVATARS_SVG } from '../../../assets/svg';
import { ExtendedText } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { elixirSlice } from '../../../redux/slices';
import { generalStyles } from '../../../utils/styles';
import { AvatarsNameType } from '../../../utils/types';
import { styles } from './RecognitionDoubleInteraction.styles';
import { IRecognitionDoubleInteractionScreenProps } from './RecognitionDoubleInteraction.types';

export const RecognitionDoubleInteractionScreen: React.FC<IRecognitionDoubleInteractionScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const fullnessElixir = useAppSelector(state => state.elixir.fullnessElixir);

    const [isСhildPress, setIsСhildPress] = useState(false);
    const [isAdultPress, setIsAdultPress] = useState(false);

    const parentAvatar =
      useAppSelector(state => state.user.parent?.avatar) ??
      `Circle${AvatarsNameType.Rabbit}`;

    const ParentAvatarIcon = AVATARS_SVG[parentAvatar];

    const childAvatar =
      useAppSelector(state => state.user.child?.avatar) ??
      `Circle${AvatarsNameType.Rabbit}`;

    const ChildAvatarIcon = AVATARS_SVG[childAvatar];

    const setСhildPress = useCallback(() => {
      setIsСhildPress(!isСhildPress);
    }, [isСhildPress]);

    const setAdultPress = useCallback(() => {
      setIsAdultPress(!isAdultPress);
    }, [isAdultPress]);

    useEffect(() => {
      if (isСhildPress && isAdultPress) {
        dispatch(elixirSlice.actions.updateFullnessElixir(fullnessElixir + 1));
        navigation.navigate('RecognitionDoubleInteractionSuccess');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAdultPress, isСhildPress]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN_BACKGROUND}
        style={generalStyles.flex}>
        <SafeAreaView style={styles.container}>
          <ExtendedText style={styles.title} preset="title">
            {t('screens.recognition.double_interaction.title')}
          </ExtendedText>
          {/* // TODO: change to animation */}
          <View
            style={[
              styles.square,
              isСhildPress && isAdultPress && styles.redBackground,
            ]}
          />
          <ExtendedText style={styles.subtitle} preset="secondary-text">
            {t('screens.recognition.double_interaction.description')}
          </ExtendedText>
          <View style={styles.buttonsContainer}>
            <View onTouchStart={setСhildPress} onTouchEnd={setСhildPress}>
              <ParentAvatarIcon width={90} height={90} />
            </View>
            <View onTouchStart={setAdultPress} onTouchEnd={setAdultPress}>
              <ChildAvatarIcon width={90} height={90} />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  };
