import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';

import { IFavouriteCharmCarouselScreenProps } from './FavouriteCharmCarousel.types';
import { styles } from './FavouriteCharmCarousel.styles';
import {
  BottomButtonView,
  Carousel,
  CarouselType,
  FAVOURITE_CHARM,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { CHARMS_BACKGROUNDS } from '../../../assets';
import {
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks';

export const FavouriteCharmCarouselScreen: React.FC<IFavouriteCharmCarouselScreenProps> =
  ({ route }) => {
    const {
      title,
      buttonTitle,
      backgroundImage,
      crossHeader,
      titleHasNickname,
      escapeMenuAlternativeNavigateTo,
    } = route.params.data;

    const { t } = useTranslation();
    const navigateToNextQuest = useNavigateNextQuest();

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      style: styles.title,
      preset: 'title',
    });

    const Header = useRenderQuestHeader({
      crossHeader: crossHeader ?? false,
      escapeMenuAlternativeNavigateTo,
    });

    const onSubmit = useCallback(() => {
      navigateToNextQuest();
    }, [navigateToNextQuest]);

    return (
      <ImageBackground
        source={
          CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
        }
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <Header />
          <BottomButtonView
            buttonTitle={buttonTitle ?? t('buttons.select')}
            onSubmit={onSubmit}
            style={styles.container}>
            <Title />
            <Carousel
              data={FAVOURITE_CHARM}
              preset={CarouselType.Card}
              carouselStyle={styles.carousel}
            />
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
