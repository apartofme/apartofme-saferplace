import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { View, ViewStyle } from 'react-native';

import { ExtendedText } from '../../../ExtendedText';
import { styles } from './IconTitleDescription.styles';
import { CharmIllustrationsSvgKeys, SvgKeys } from '../../../../utils/types';
import { ICarouselItemProps, ICarouselItem } from '../../Carousel.types';
import { SVG, SVG_CHARM_ILLUSTRATIONS } from '../../../../assets/svg';
import { WINDOW_COEFFICIENT } from '../../../../constants/window';

export const IconTitleDescription: React.FC<ICarouselItemProps<ICarouselItem>> =
  ({ data, style }) => {
    const { t } = useTranslation();
    const Icon = useMemo(() => {
      if (data.iconKey in SVG) {
        return SVG[data.iconKey as SvgKeys];
      }
      if (data.iconKey in SVG_CHARM_ILLUSTRATIONS) {
        return SVG_CHARM_ILLUSTRATIONS[
          data.iconKey as CharmIllustrationsSvgKeys
        ];
      }
    }, [data.iconKey]);

    const titleIndent: ViewStyle = useMemo(() => {
      return {
        paddingTop:
          data.iconKey in SVG_CHARM_ILLUSTRATIONS ? 36 * WINDOW_COEFFICIENT : 0,
      };
    }, [data.iconKey]);

    return (
      <View style={[styles.container, style]}>
        {Icon && <Icon />}
        <View>
          {data.titleKey && (
            <ExtendedText
              preset="large-title"
              style={[styles.title, titleIndent]}>
              {t(data.titleKey)}
            </ExtendedText>
          )}
          {data.descriptionKey && (
            <ExtendedText preset="secondary-text" style={styles.subtitle}>
              {t(data.descriptionKey)}
            </ExtendedText>
          )}
        </View>
      </View>
    );
  };
