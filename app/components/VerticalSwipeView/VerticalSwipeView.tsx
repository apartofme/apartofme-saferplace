import React, { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
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
import { SVG } from '../../assets/svg';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;
const WhiteBottomArrowIcon = SVG.WhiteBottomArrowIcon;
const WhiteTopArrowIcon = SVG.WhiteTopArrowIcon;

export const VerticalSwipeView: React.FC<IVerticalSwipeViewProps> = ({
  titleKey,
  subtitleKey,
  aboutTitleKey,
  aboutSubtitleKey,
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
        style={[generalStyles.flex, styles.blackBackground]}>
        <SafeAreaView style={generalStyles.flex}>
          <FlingGestureHandler
            onEnded={setScrollPosition}
            direction={isTopPosition ? Directions.UP : Directions.DOWN}>
            <View style={generalStyles.flex} onLayout={onLayout}>
              <ScrollView
                scrollEnabled={false}
                ref={scrollViewRef}
                showsVerticalScrollIndicator={false}>
                <View
                  style={[
                    generalStyles.jcSpaceBtw,
                    { height: scrollViewHeight },
                  ]}>
                  <MainHeader
                    leftIcon={<WhiteBackArrowIcon />}
                    onLeftIconPress={navigation.goBack}
                  />
                  <View style={styles.topContentContainer}>
                    <ExtendedText
                      preset="large-title"
                      style={generalStyles.brilliantWhiteCenter}>
                      {t(titleKey)}
                    </ExtendedText>
                    {subtitleKey && (
                      <ExtendedText
                        preset="secondary-text"
                        style={[generalStyles.greyCenter, styles.topSubtitle]}>
                        {t(subtitleKey)}
                      </ExtendedText>
                    )}
                    <ExtendedButton
                      title={t('buttons.start')}
                      style={styles.submitButton}
                      onPress={onSubmit}
                    />
                    <TouchableOpacity
                      onPress={setScrollPosition}
                      style={generalStyles.asCenter}>
                      <ExtendedText
                        preset="secondary-text"
                        style={generalStyles.brilliantWhite}>
                        {t('buttons.learn_more').toUpperCase()}
                      </ExtendedText>
                      <View style={styles.learnMoreArrow}>
                        <WhiteBottomArrowIcon />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={[
                    styles.bottomContentContainer,
                    { height: scrollViewHeight },
                  ]}>
                  <TouchableOpacity
                    onPress={setScrollPosition}
                    style={generalStyles.asCenter}>
                    <View style={styles.backArrow}>
                      <WhiteTopArrowIcon />
                    </View>
                    <ExtendedText
                      preset="secondary-text"
                      style={generalStyles.brilliantWhite}>
                      {t('buttons.back').toUpperCase()}
                    </ExtendedText>
                  </TouchableOpacity>

                  {aboutTitleKey && (
                    <ExtendedText
                      preset="large-title"
                      style={styles.bottomTitle}>
                      {t(aboutTitleKey)}
                    </ExtendedText>
                  )}
                  <ScrollView showsVerticalScrollIndicator={false}>
                    {aboutSubtitleKey && (
                      <ExtendedText
                        preset="body-regular"
                        style={generalStyles.brilliantWhite}>
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
