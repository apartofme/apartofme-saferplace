import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import {
  Directions,
  FlingGestureHandler,
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';

import { ExtendedButton, ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IVerticalSwipeScreenProps } from './VerticalSwipe.types';
import { styles } from './VerticalSwipe.styles';
import { useNavigateNextQuest, useNavigatePrevQuest } from '../../../hooks';
import { IMAGES } from '../../../assets';

export const VerticalSwipeScreen: React.FC<IVerticalSwipeScreenProps> = ({
  route,
}) => {
  const {
    title,
    description,
    buttonTitle,
    backgroundImage,
    tellMoreTitle,
    tellMoreDescription,
    tellMoreBackground,
    crossHeader,
  } = route.params.data;

  const { t } = useTranslation();
  const scrollViewRef = useRef<ScrollView>(null);

  const [isTopPosition, setIsTopPosition] = useState(true);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);

  const goBack = useNavigatePrevQuest();
  const onSubmit = useNavigateNextQuest();

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

  const renderHeader = useCallback(() => {
    if (crossHeader) {
      return (
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={goBack}
          // TODO: change to real image & function
          rightIcon={IMAGES.WHITE_BACK_ARROW}
          onRightIconPress={goBack}
        />
      );
    } else {
      return (
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={goBack}
        />
      );
    }
  }, [crossHeader, goBack]);

  const imageBackground = useMemo(() => {
    if (isTopPosition && backgroundImage) {
      return IMAGES[backgroundImage];
    }

    if (!isTopPosition && tellMoreBackground) {
      return IMAGES[tellMoreBackground];
    }

    // TODO: change to real default image
    return {
      uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
    };
  }, [backgroundImage, isTopPosition, tellMoreBackground]);

  return (
    <ImageBackground source={imageBackground} style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <GestureHandlerRootView style={generalStyles.flex}>
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
                  {renderHeader()}
                  <View>
                    <ExtendedText preset="large-title" style={styles.topTitle}>
                      {title}
                    </ExtendedText>
                    <ExtendedText
                      preset="secondary-text"
                      style={styles.topSubtitle}>
                      {description}
                    </ExtendedText>
                    <ExtendedButton
                      title={buttonTitle ?? t('buttons.ready')}
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
                  <ExtendedText style={styles.bottomTitle}>
                    {tellMoreTitle}
                  </ExtendedText>
                  <ScrollView>
                    <ExtendedText style={styles.bottomsubtitle}>
                      {tellMoreDescription}
                    </ExtendedText>
                  </ScrollView>
                </View>
              </ScrollView>
            </View>
          </FlingGestureHandler>
        </GestureHandlerRootView>
      </SafeAreaView>
    </ImageBackground>
  );
};
