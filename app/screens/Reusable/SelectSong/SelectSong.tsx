import _ from 'lodash';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';
import { ICarouselInstance } from 'react-native-reanimated-carousel';

import { IMAGES } from '../../../assets';
import {
  BottomButtonView,
  ExtendedButton,
  MainHeader,
  SongCarousel,
} from '../../../components';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { generalStyles } from '../../../utils/styles';
import { SONG_CAROUSEL } from './SelectSong.data';
import { styles } from './SelectSong.styles';
import { ISelectSongScreenProps } from './SelectSong.types';

export const SelectSongScreen: React.FC<ISelectSongScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const carouselRef = useRef<ICarouselInstance>(null);

  const [isPause, setIsPause] = useState(true);
  const [currentAudioName, setCurrentAudioName] = useState('0011993.mp3');
  const [duration, setDuration] = useState(0);
  const [isFinished, setIsFished] = useState(false);

  const setSongStatus = useCallback(() => {
    if (!isFinished && AudioPlayerHelper.filepath === currentAudioName) {
      if (!isPause) {
        AudioPlayerHelper.pause();
      } else {
        AudioPlayerHelper.start();
      }
    } else {
      AudioPlayerHelper.play(currentAudioName, setDuration, setIsFished);
    }
    setIsPause(!isPause);
  }, [currentAudioName, isFinished, isPause]);

  const onNextPress = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current?.next();
    }
  }, []);

  const onPreviosPress = useCallback(() => {
    carouselRef.current?.prev();
  }, []);

  useEffect(() => {
    AudioPlayerHelper.stop();
  }, [currentAudioName]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <BottomButtonView buttonTitle={t('buttons.select')} onSubmit={_.noop}>
        <SongCarousel
          data={SONG_CAROUSEL}
          setCurrentSong={setCurrentAudioName}
          carouselRef={carouselRef}
        />
        <View style={styles.buttonsContainer}>
          <ExtendedButton title="<-" onPress={onPreviosPress} />
          <ExtendedButton title="|>/||" onPress={setSongStatus} />
          <ExtendedButton title="->" onPress={onNextPress} />
        </View>
      </BottomButtonView>
    </SafeAreaView>
  );
};
