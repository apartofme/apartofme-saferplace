import React, { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground, SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Directions,
  FlingGestureHandler,
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';

import { generalStyles } from '../../utils/styles';
import { ExtendedButton } from '../ExtendedButton';
import { ExtendedText } from '../ExtendedText';
import { IVerticalSwipeViewProps } from './VerticalSwipeView.types';
import { styles } from './VerticalSwipeView.styles';
import { MainHeader } from '../MainHeader';
import { IMAGES } from '../../assets';

export const VerticalSwipeView: React.FC<IVerticalSwipeViewProps> = ({
  titleKey,
  subtitleKey,
  aboutTitleKey,
  aboutSubtitleKey,
  image,
  topBackground,
  bottomBackground,
  onSubmit,
}) => {
  const [isTopPosition, setIsTopPosition] = useState(true);

  const navigation = useNavigation();

  const [scrollViewHeight, setScrollViewHeight] = useState(0);

  const { t } = useTranslation();

  const scrollViewRef = useRef<ScrollView>(null);

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
      <ImageBackground
        source={isTopPosition ? topBackground : bottomBackground}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <FlingGestureHandler
            onEnded={setScrollPosition}
            direction={isTopPosition ? Directions.UP : Directions.DOWN}>
            <View style={generalStyles.flex} onLayout={onLayout}>
              <ScrollView scrollEnabled={false} ref={scrollViewRef}>
                <View
                  style={[
                    styles.topContentContainer,
                    { height: scrollViewHeight },
                  ]}>
                  <MainHeader
                    leftIcon={IMAGES.WHITE_BACK_ARROW}
                    onLeftIconPress={navigation.goBack}
                  />
                  <View>
                    {image && (
                      <View style={generalStyles.aiCenter}>
                        <Image source={image} style={styles.image} />
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
                      title={t('buttons.ready')}
                      style={styles.submitButton}
                      onPress={onSubmit}
                    />
                    <ExtendedButton
                      title={t('components.vertical_swipe_view.tell_more')}
                      onPress={setScrollPosition}
                    />
                  </View>
                </View>
                <View
                  style={[
                    styles.bottomContentContainer,
                    { height: scrollViewHeight },
                  ]}>
                  <ExtendedButton
                    title={t('components.vertical_swipe_view.back')}
                    onPress={setScrollPosition}
                  />
                  {aboutTitleKey && (
                    <ExtendedText style={styles.bottomTitle}>
                      {t(aboutTitleKey)}
                    </ExtendedText>
                  )}
                  <ScrollView>
                    {aboutSubtitleKey && (
                      <ExtendedText style={styles.bottomsubtitle}>
                        {t(aboutSubtitleKey)}
                      </ExtendedText>
                    )}
                  </ScrollView>
                </View>
              </ScrollView>
            </View>
          </FlingGestureHandler>
        </SafeAreaView>
      </ImageBackground>
    </GestureHandlerRootView>
  );
};
