import React, { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';
import { ICarouselInstance } from 'react-native-reanimated-carousel';

import {
  BottomButtonView,
  Carousel,
  CarouselType,
} from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { CHARMS_CAROUSEL } from './CharmsIntroducing.data';
import { ICharmsIntroducingScreenProps } from './CharmsIntroducing.types';
import { styles } from './CharmsIntroducing.styles';
import { BACKGROUND_IMAGES } from '../../../../assets';
import { SVG } from '../../../../assets/svg';
import { useAppDispatch, useMount } from '../../../../hooks';
import { cacheSlice } from '../../../../redux/slices';
import { AUDIO } from '../../../../constants/audio';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const CharmsIntroducingScreen: React.FC<ICharmsIntroducingScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);
    const carouselRef = useRef<ICarouselInstance>(null);
    const dispatch = useAppDispatch();

    useMount(() => {
      dispatch(
        cacheSlice.actions.setBackgroundAudio(AUDIO.FOREST_AMBIENCE_LOOP),
      );
    });

    const onSubmit = useCallback(() => {
      if (index >= CHARMS_CAROUSEL.length - 1) {
        navigation.navigate('ParentGroundingStack');
      }
      carouselRef.current?.next();
      setIndex(index + 1);
    }, [index, navigation]);

    const onBackArrowPress = useCallback(() => {
      carouselRef.current?.prev();
      setIndex(index - 1);
    }, [index]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.GARDEN}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          {index > 0 && (
            <TouchableOpacity
              style={styles.backArrowContainer}
              onPress={onBackArrowPress}>
              <WhiteBackArrowIcon />
            </TouchableOpacity>
          )}

          <BottomButtonView
            buttonTitle={t('buttons.next')}
            isArrow={true}
            onSubmit={onSubmit}
            style={styles.container}>
            <Carousel
              data={CHARMS_CAROUSEL}
              preset={CarouselType.IconTitleDescription}
              carouselRef={carouselRef}
              carouselItemStyle={styles.carousel}
              isProgressBar={false}
              scrollAnimationDuration={0}
            />
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
