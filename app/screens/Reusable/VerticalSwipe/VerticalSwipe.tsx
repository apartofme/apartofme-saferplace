import React, { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground, SafeAreaView, View } from 'react-native';
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
  navigation,
}) => {
  const {
    titleKey,
    subtitleKey,
    nextRouteParams,
    tellMoreTitleKey,
    tellMoreSubtitleKey,
    backgroundImage,
    tellMoreBackgroundImage,
    image,
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

  const onSubmit = useCallback(() => {
    navigation.navigate(nextRouteParams);
  }, [navigation, nextRouteParams]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <GestureHandlerRootView style={generalStyles.flex}>
        <FlingGestureHandler
          onEnded={setScrollPosition}
          direction={isTopPosition ? Directions.UP : Directions.DOWN}>
          <View style={generalStyles.flex} onLayout={onLayout}>
            <ScrollView scrollEnabled={false} ref={scrollViewRef}>
              <ImageBackground
                source={backgroundImage}
                style={generalStyles.flex}>
                <View
                  style={[
                    styles.topContentContainer,
                    { height: scrollViewHeight },
                  ]}>
                  {image && (
                    <View style={generalStyles.centered}>
                      <Image source={image} />
                    </View>
                  )}
                  <ExtendedText style={styles.topTitle}>
                    {t(titleKey)}
                  </ExtendedText>
                  {subtitleKey && (
                    <ExtendedText style={styles.topSubtitle}>
                      {t(subtitleKey)}
                    </ExtendedText>
                  )}
                  <ExtendedButton
                    title={t('buttons.next')}
                    style={styles.submitButton}
                    onPress={onSubmit}
                  />
                  <ExtendedButton
                    title={t('components.vertical_swipe_view.tell_more')}
                    onPress={setScrollPosition}
                  />
                </View>
              </ImageBackground>
              <ImageBackground
                source={tellMoreBackgroundImage}
                style={generalStyles.flex}>
                <View
                  style={[
                    styles.bottomContentContainer,
                    { height: scrollViewHeight },
                  ]}>
                  <ExtendedButton
                    title={t('components.vertical_swipe_view.back')}
                    onPress={setScrollPosition}
                  />
                  {tellMoreTitleKey && (
                    <ExtendedText style={styles.bottomTitle}>
                      {t(tellMoreTitleKey)}
                    </ExtendedText>
                  )}
                  {tellMoreSubtitleKey && (
                    <ScrollView>
                      <ExtendedText style={styles.bottomsubtitle}>
                        {t(tellMoreSubtitleKey)}
                      </ExtendedText>
                    </ScrollView>
                  )}
                </View>
              </ImageBackground>
            </ScrollView>
          </View>
        </FlingGestureHandler>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};
