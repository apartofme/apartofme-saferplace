import React, { useCallback, useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';

import { IFavouriteCharmCarouselScreenProps } from './FavouriteCharmCarousel.types';
import { styles } from './FavouriteCharmCarousel.styles';
import { BottomButtonView, FavouriteCharmCarousel } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IMAGES } from '../../../assets';
import {
  useAppDispatch,
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks';
import { useTranslation } from 'react-i18next';
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
      // TODO: remove
      nicknameStyle: { color: '#00dbc0' },
    });

    const Header = useRenderQuestHeader(crossHeader ?? false);

    useEffect(() => {
      setActiveItem(FAVOURITE_CHARM_LIST[activeItemIndex]);
    }, [activeItemIndex]);

    const onSubmit = useCallback(() => {
      dispatch(cacheSlice.actions.saveFavouriteCharmItem(activeItem));
      navigateToNextQuest();
    }, [activeItem, dispatch, navigateToNextQuest]);

    return (
      <ImageBackground
        // TODO: change to real default image
        source={
          (backgroundImage && IMAGES[backgroundImage]) ?? {
            uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
          }
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
