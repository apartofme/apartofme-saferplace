import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, View } from 'react-native';

import { ExtendedText } from '../../../ExtendedText';
import { IImageTitleSubTitleProps } from './ImageTitleSubTitle.props';
import { styles } from './ImageTitleSubTitle.styles';

export const ImageTitleSubTitle: React.FC<IImageTitleSubTitleProps> = ({
  data,
  style,
}) => {
  const { t } = useTranslation();
  return (
    <View style={[styles.container, style]}>
      {data.image && <Image source={data.image} />}
      <View>
        {data.titleKey && (
          <ExtendedText preset="large-title" style={styles.title}>
            {t(data.titleKey)}
          </ExtendedText>
        )}
        {data.subtitleKey && (
          <ExtendedText preset="secondary-text" style={styles.subtitle}>
            {t(data.subtitleKey)}
          </ExtendedText>
        )}
      </View>
    </View>
  );
};
