import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Directions,
  FlingGestureHandler,
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';
import moment from 'moment';

import { ExtendedButton, ExtendedText } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IVerticalSwipeScreenProps } from './VerticalSwipe.types';
import { styles } from './VerticalSwipe.styles';
import {
  useAppSelector,
  useMount,
  useNavigateNextQuest,
  useRenderQuestHeader,
} from '../../../hooks';
import { CHARMS_BACKGROUNDS } from '../../../assets';
import { CHARMS_SVG, SVG } from '../../../assets/svg';
import { trackEvent } from '../../../services/firebase/analytics';
import { FirebaseAnalyticsEventsType } from '../../../services/firebase/types';
import { JOINT_GROUNDING_EXERCISE_ID } from '../../../constants/quest';
import { CharmsSvgKeys } from '../../../utils/types';

const WhiteBottomArrowIcon = SVG.WhiteBottomArrowIcon;
const WhiteTopArrowIcon = SVG.WhiteTopArrowIcon;

export const VerticalSwipeScreen: React.FC<IVerticalSwipeScreenProps> = ({
  route,
}) => {
  const {
    title,
    description,
    buttonTitle,
    image,
    backgroundImage,
    tellMoreTitle,
    tellMoreDescription,
    tellMoreBackground,
    crossHeader,
    escapeMenuAlternativeNavigateTo,
  } = route.params.data;

  const { t } = useTranslation();
  const scrollViewRef = useRef<ScrollView>(null);

  const [isTopPosition, setIsTopPosition] = useState(true);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);

  const email = useAppSelector(state => state.user.parent?.email);
  const { isFirstTimeGrounding, currentQuestLine } = useAppSelector(
    state => state.quest,
  );

  const isFirstGrounding = useMemo(
    () =>
      currentQuestLine?.id === JOINT_GROUNDING_EXERCISE_ID &&
      isFirstTimeGrounding,

    [currentQuestLine?.id, isFirstTimeGrounding],
  );

  useMount(() => {
    trackEvent(FirebaseAnalyticsEventsType.CharmStarted, {
      name: title,
      email: email ?? '',
      datetime: moment().format('d-m-Y H:i:s'),
    });
  });

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

  const imageBackground = useMemo(() => {
    if (isTopPosition && backgroundImage) {
      return CHARMS_BACKGROUNDS[backgroundImage];
    }

    if (!isTopPosition && tellMoreBackground) {
      return CHARMS_BACKGROUNDS[tellMoreBackground];
    }

    return CHARMS_BACKGROUNDS.GUIDE_ROOTS_STARS_BACKGROUND;
  }, [backgroundImage, isTopPosition, tellMoreBackground]);

  const Header = useRenderQuestHeader({
    crossHeader: crossHeader ?? false,
    escapeMenuAlternativeNavigateTo,
  });

  const Icon = CHARMS_SVG[image as CharmsSvgKeys];

  return (
    <GestureHandlerRootView style={generalStyles.flex}>
      <ImageBackground
        source={imageBackground}
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
                  {isFirstGrounding || crossHeader ? (
                    <Header />
                  ) : (
                    <View style={styles.emptyView} />
                  )}
                  <View style={styles.topContentContainer}>
                    <View style={styles.iconContainer}>
                      {image && <Icon />}
                    </View>
                    <ExtendedText
                      preset="large-title"
                      style={generalStyles.brilliantWhiteCenter}>
                      {title}
                    </ExtendedText>
                    <ExtendedText
                      preset="secondary-text"
                      style={[generalStyles.greyCenter, styles.topSubtitle]}>
                      {description}
                    </ExtendedText>
                    <ExtendedButton
                      title={buttonTitle ?? t('buttons.start')}
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

                  <ExtendedText preset="large-title" style={styles.bottomTitle}>
                    {tellMoreTitle}
                  </ExtendedText>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <ExtendedText
                      preset="body-regular"
                      style={generalStyles.brilliantWhite}>
                      {tellMoreDescription}
                    </ExtendedText>
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
