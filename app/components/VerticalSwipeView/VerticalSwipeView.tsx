import React, { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, ScrollView, View } from 'react-native';

import { generalStyles } from '../../utils/styles';
import { ExtendedButton } from '../ExtendedButton';
import { ExtendedText } from '../ExtendedText';
import { IVerticalSwipeViewProps } from './VerticalSwipeView.props';
import { styles } from './VerticalSwipeView.styles';

export const VerticalSwipeView: React.FC<IVerticalSwipeViewProps> = ({
  titleKey,
  subtitleKey,
  aboutTitleKey,
  aboutSubtitleKey,
  image,
}) => {
  const { t } = useTranslation();

  const scrollViewRef = useRef<ScrollView>(null);

  const onDownPress = useCallback(() => {
    scrollViewRef.current?.scrollToEnd();
  }, []);

  const onUpPress = useCallback(() => {
    scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true });
  }, []);

  return (
    <View style={generalStyles.flex}>
      <ImageBackground source={image} style={generalStyles.flex}>
        <ScrollView
          scrollEnabled={false}
          ref={scrollViewRef}
          style={styles.scrollView}>
          <View style={styles.topContentContainer}>
            <ExtendedText>{t(titleKey)}</ExtendedText>
            <ExtendedText>{t(subtitleKey)}</ExtendedText>
            <ExtendedButton title={t('buttons.ready')} onPress={onDownPress} />
            <ExtendedButton
              title={t('components.VerticalSwipeView.to_bottom')}
              onPress={onDownPress}
            />
          </View>
          <View style={styles.bottomContentContainer}>
            <ExtendedButton
              title={t('components.VerticalSwipeView.to_top')}
              onPress={onUpPress}
            />
            <ExtendedText>{t(aboutTitleKey)}</ExtendedText>
            <ExtendedText>{t(aboutSubtitleKey)}</ExtendedText>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
