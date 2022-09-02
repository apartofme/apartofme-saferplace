import React, { useCallback, useRef, useState } from 'react';
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
  const [isTopPosition, setIsTopPosition] = useState(true);

  const { t } = useTranslation();

  const scrollViewRef = useRef<ScrollView>(null);

  const setScrollPosition = useCallback(() => {
    if (isTopPosition) {
      scrollViewRef.current?.scrollToEnd();
      setIsTopPosition(false);
    } else {
      scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true });
      setIsTopPosition(true);
    }
  }, [isTopPosition]);

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
            <ExtendedButton title={t('buttons.ready')} />
            <ExtendedButton
              title={t('components.VerticalSwipeView.to_bottom')}
              onPress={setScrollPosition}
            />
          </View>
          <View style={styles.bottomContentContainer}>
            <ExtendedButton
              title={t('components.VerticalSwipeView.to_top')}
              onPress={setScrollPosition}
            />
            <ExtendedText>{t(aboutTitleKey)}</ExtendedText>
            <ExtendedText>{t(aboutSubtitleKey)}</ExtendedText>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
