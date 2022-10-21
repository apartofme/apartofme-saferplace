import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';
import { ICarouselInstance } from 'react-native-reanimated-carousel';

import {
  BottomButtonView,
  ExtendedButton,
  MainHeader,
  SoundCarousel,
} from '../../../components';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { generalStyles } from '../../../utils/styles';
import { SOUND_CAROUSEL } from './SelectSong.data';
import { styles } from './SelectSong.styles';
import { ISelectSoundScreenProps } from './SelectSong.types';
import {
  useAppDispatch,
  useNavigateNextQuest,
  useNavigatePrevQuest,
} from '../../../hooks';
import { cacheSlice } from '../../../redux/slices';
import { SVG_ICONS } from '../../../assets/svg';

export const SelectSoundScreen: React.FC<ISelectSoundScreenProps> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation();
  const { crossHeader, escapeMenuAlternativeNavigateTo } = route.params.data;

  const carouselRef = useRef<ICarouselInstance>(null);

  const dispatch = useAppDispatch();

  const [isPause, setIsPause] = useState(true);
  const [currentAudioName, setCurrentAudioName] = useState(
    SOUND_CAROUSEL[0].id,
  );
  const [isFinished, setIsFished] = useState(false);

  const navigatePrevQuest = useNavigatePrevQuest();

  const onBackArrowPress = useCallback(() => {
    AudioPlayerHelper.stop();
    navigatePrevQuest();
  }, [navigatePrevQuest]);

  const onCrossPress = useCallback(() => {
    navigation.navigate('EscapeMenu', {
      data: {
        escapeMenuAlternativeNavigateTo: escapeMenuAlternativeNavigateTo,
      },
    });
  }, [escapeMenuAlternativeNavigateTo, navigation]);

  const navigateNextQuest = useNavigateNextQuest();

  const onSubmit = useCallback(() => {
    AudioPlayerHelper.stop();
    dispatch(cacheSlice.actions.setSelectedSong(currentAudioName));
    navigateNextQuest();
  }, [currentAudioName, dispatch, navigateNextQuest]);

  const setSoundStatus = useCallback(() => {
    if (!isFinished && AudioPlayerHelper.filepath === currentAudioName) {
      if (!isPause) {
        AudioPlayerHelper.pause();
      } else {
        AudioPlayerHelper.start();
      }
    } else {
      AudioPlayerHelper.play(currentAudioName, setIsFished);
    }
    setIsPause(!isPause);
  }, [currentAudioName, isFinished, isPause]);

  const onNextPress = useCallback(() => {
    AudioPlayerHelper.stop();
    carouselRef.current?.next();
  }, []);

  const onPreviosPress = useCallback(() => {
    AudioPlayerHelper.stop();
    carouselRef.current?.prev();
  }, []);

  useEffect(() => {
    AudioPlayerHelper.stop();
    setIsPause(true);
  }, [currentAudioName]);

  const WhiteBackArrowIcon = SVG_ICONS.whiteBackArrowIcon;
  const WhiteCrossIcon = SVG_ICONS.whiteCrossIcon;

  const renderHeader = useCallback(() => {
    if (crossHeader) {
      return (
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={onBackArrowPress}
          rightIcon={<WhiteCrossIcon />}
          onRightIconPress={onCrossPress}
        />
      );
    }
    return (
      <MainHeader
        leftIcon={<WhiteBackArrowIcon />}
        onLeftIconPress={onBackArrowPress}
      />
    );
  }, [
    WhiteBackArrowIcon,
    WhiteCrossIcon,
    crossHeader,
    onBackArrowPress,
    onCrossPress,
  ]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      {renderHeader()}
      <BottomButtonView buttonTitle={t('buttons.select')} onSubmit={onSubmit}>
        <SoundCarousel
          data={SOUND_CAROUSEL}
          setCurrentSong={setCurrentAudioName}
          carouselRef={carouselRef}
        />
        <View style={styles.buttonsContainer}>
          <ExtendedButton title="<-" onPress={onPreviosPress} />
          <ExtendedButton title="|>/||" onPress={setSoundStatus} />
          <ExtendedButton title="->" onPress={onNextPress} />
        </View>
      </BottomButtonView>
    </SafeAreaView>
  );
};
