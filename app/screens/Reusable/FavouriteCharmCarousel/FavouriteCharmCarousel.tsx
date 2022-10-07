import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { IFavouriteCharmCarouselScreenProps } from './FavouriteCharmCarousel.types';
import { styles } from './FavouriteCharmCarousel.styles';
import { FavouriteCharmCarousel } from '../../../components';
import { generalStyles } from '../../../utils/styles';

export const FavouriteCharmCarouselScreen: React.FC<IFavouriteCharmCarouselScreenProps> =
  ({ route }) => {
    return <SafeAreaView style={generalStyles.flex}></SafeAreaView>;
  };
