import React, { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, View } from 'react-native';
import {
  Directions,
  FlingGestureHandler,
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';

import { ExtendedButton, ExtendedText } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IVerticalSwipeScreenProps } from './VerticalSwipe.types';
import { styles } from './VerticalSwipe.styles';

export const VerticalSwipeScreen: React.FC<IVerticalSwipeScreenProps> = ({
  route,
}) => {
  const {
    titleKey,
    subtitleKey,
    onSubmit,
    tellMoreTitleKey,
    tellMoreSubtitleKey,
    backgroundImage,
    tellMoreBackgroundImage,
  } = route.params.data;

  const { t } = useTranslation();
  const scrollViewRef = useRef<ScrollView>(null);

  const [isTopPosition, setIsTopPosition] = useState(true);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);

  const setScrollPosition = useCallback(() => {
    if (isTopPosition) {
      scrollViewRef.current?.scrollToEnd();
    } else {
      scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true });
    }
    setIsTopPosition(!isTopPosition);
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
          <ImageBackground
            source={isTopPosition ? backgroundImage : tellMoreBackgroundImage}
            style={generalStyles.flex}>
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
                  onPress={onSubmit}
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
                  {t(tellMoreTitleKey)}
                </ExtendedText>
                <ScrollView>
                  <ExtendedText style={styles.bottomsubtitle}>
                    {t(tellMoreSubtitleKey)}
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
