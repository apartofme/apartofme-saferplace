import React from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';

import { IFavouriteCharmCarouselScreenProps } from './FavouriteCharmCarousel.types';
import { styles } from './FavouriteCharmCarousel.styles';
import { BottomButtonView, FavouriteCharmCarousel } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IMAGES } from '../../../assets';
import {
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../hooks';
import { useTranslation } from 'react-i18next';
import { FAVOURITE_CHARM_LIST } from './FavouriteCharmCarousel.data';

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
    const onSubmit = useNavigateNextQuest();

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      style: styles.title,
      preset: 'title',
      // TODO: remove
      nicknameStyle: { color: '#00dbc0' },
    });

    const Header = useRenderQuestHeader(crossHeader ?? false);

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
            <FavouriteCharmCarousel data={FAVOURITE_CHARM_LIST} />
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
