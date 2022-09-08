import React, { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, View } from 'react-native';
import {
  Directions,
  FlingGestureHandler,
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';

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

  const [scrollViewHeight, setScrollViewHeight] = useState(0);

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

  const onLayout = useCallback(event => {
    const { height } = event.nativeEvent.layout;
    setScrollViewHeight(height);
  }, []);

  return (
    <GestureHandlerRootView style={generalStyles.flex}>
      <FlingGestureHandler
        onEnded={setScrollPosition}
        direction={isTopPosition ? Directions.UP : Directions.DOWN}>
        <View style={generalStyles.flex} onLayout={onLayout}>
          <ImageBackground source={image} style={generalStyles.flex}>
            <ScrollView scrollEnabled={false} ref={scrollViewRef}>
              <View
                style={[
                  styles.topContentContainer,
                  { height: scrollViewHeight },
                ]}>
                <ExtendedText style={styles.topTitle}>
                  {t(titleKey)}
                </ExtendedText>
                <ExtendedText style={styles.topSubtitle}>
                  {t(subtitleKey)}
                </ExtendedText>
                <ExtendedButton
                  title={t('buttons.ready')}
                  style={styles.submitButton}
                />
                <ExtendedButton
                  title={t('components.VerticalSwipeView.to_bottom')}
                  onPress={setScrollPosition}
                />
              </View>
              <View
                style={[
                  styles.bottomContentContainer,
                  { height: scrollViewHeight },
                ]}>
                <ExtendedButton
                  title={t('components.VerticalSwipeView.to_top')}
                  onPress={setScrollPosition}
                />
                <ExtendedText style={styles.bottomTitle}>
                  {t(aboutTitleKey)}
                </ExtendedText>
                <ScrollView>
                  <ExtendedText style={styles.bottomsubtitle}>
                    {t(aboutSubtitleKey)}
                  </ExtendedText>
                </ScrollView>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      </FlingGestureHandler>
    </GestureHandlerRootView>
  );
};
