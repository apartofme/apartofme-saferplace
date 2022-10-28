import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import { ICarouselInstance } from 'react-native-reanimated-carousel';

import {
  BottomButtonView,
  ExtendedText,
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
  useAppState,
  useNavigateNextQuest,
  useNavigatePrevQuest,
} from '../../../hooks';
import { cacheSlice } from '../../../redux/slices';
import { SVG } from '../../../assets/svg';
import { CHARMS_BACKGROUNDS } from '../../../assets';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;
const WhiteCrossIcon = SVG.WhiteCrossIcon;
const RoundPauseButtonIcon = SVG.RoundPauseButtonIcon;
const RoundTriangleButtonIcon = SVG.RoundTriangleButtonIcon;
const SkipPreviousIcon = SVG.SkipPreviousIcon;
const SkipNextIcon = SVG.SkipNextIcon;

export const SelectSoundScreen: React.FC<ISelectSoundScreenProps> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation();
  const {
    title,
    description,
    crossHeader,
    escapeMenuAlternativeNavigateTo,
    backgroundImage,
  } = route.params.data;

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

  const appStatus = useAppState();

  useEffect(() => {
    if (appStatus !== 'active') {
      setIsPause(true);
      AudioPlayerHelper.pause();
    }
  }, [appStatus]);

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
  }, [crossHeader, onBackArrowPress, onCrossPress]);

  const StartButton = useMemo(() => {
    if (isPause) {
      return RoundTriangleButtonIcon;
    }
    return RoundPauseButtonIcon;
  }, [isPause]);

  return (
    <ImageBackground
      source={
        CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
      }
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        {renderHeader()}
        <BottomButtonView buttonTitle={t('buttons.select')} onSubmit={onSubmit}>
          <View style={styles.titleContainer}>
            <ExtendedText preset="title" style={styles.title}>
              {title}
            </ExtendedText>
            <ExtendedText preset="secondary-text" style={generalStyles.grey}>
              {description}
            </ExtendedText>
          </View>
          <SoundCarousel
            data={SOUND_CAROUSEL}
            setCurrentSong={setCurrentAudioName}
            carouselRef={carouselRef}
          />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={onPreviosPress}>
              <SkipPreviousIcon />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={setSoundStatus}
              style={styles.startButtonContainer}>
              <StartButton />
            </TouchableOpacity>
            <TouchableOpacity onPress={onNextPress}>
              <SkipNextIcon />
            </TouchableOpacity>
          </View>
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
