import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';

import { IFavouriteCharmCarouselScreenProps } from './FavouriteCharmCarousel.types';
import { styles } from './FavouriteCharmCarousel.styles';
import { BottomButtonView, FavouriteCharmCarousel } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { CHARMS_BACKGROUNDS } from '../../../assets';
import {
  useAppDispatch,
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks';
import { FAVOURITE_CHARM_LIST } from './FavouriteCharmCarousel.data';
import { cacheSlice } from '../../../redux/slices';

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
    const dispatch = useAppDispatch();
    const navigateToNextQuest = useNavigateNextQuest();
    const [activeItem, setActiveItem] = useState(FAVOURITE_CHARM_LIST[0]);
    const [activeItemIndex, setActiveItemIndex] = useState(0);

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

    useEffect(() => {
      setActiveItem(FAVOURITE_CHARM_LIST[activeItemIndex]);
    }, [activeItemIndex]);

    const onSubmit = useCallback(() => {
      dispatch(cacheSlice.actions.saveFavouriteCharmItem(activeItem));
      navigateToNextQuest();
    }, [activeItem, dispatch, navigateToNextQuest]);

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

            <FavouriteCharmCarousel
              data={FAVOURITE_CHARM_LIST}
              setIndex={setActiveItemIndex}
            />
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
