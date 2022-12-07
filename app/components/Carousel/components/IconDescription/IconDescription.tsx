import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { ELIXIR_SVG } from '../../../../assets/svg';
import { ExtendedText } from '../../../ExtendedText';
import { ICarouselItemProps, IIconDescription } from '../../Carousel.types';
import { styles } from './IconDescription.styles';

export const IconDescription: React.FC<ICarouselItemProps<IIconDescription>> =
  ({ data, style }) => {
    const { t } = useTranslation();
    const Icon = ELIXIR_SVG[data.iconKey];

    return (
      <View style={[styles.container, style]}>
        {!!Icon && <Icon />}
        {!!data.descriptionKey && (
          <ExtendedText preset="secondary-text" style={styles.subtitle}>
            {t(data.descriptionKey)}
          </ExtendedText>
        )}
      </View>
    );
  };
