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
  SoundCarousel,
} from '../../../components';
import { AudioPlayerHelper } from '../../../services/helpers/AudioPlayerHelper';
import { generalStyles } from '../../../utils/styles';
import { SOUND_CAROUSEL } from './SelectSound.data';
import { styles } from './SelectSong.styles';
import { ISelectSoundScreenProps } from './SelectSong.types';

export const SelectSoundScreen: React.FC<ISelectSoundScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const carouselRef = useRef<ICarouselInstance>(null);

  const [isPause, setIsPause] = useState(true);
  const [currentAudioName, setCurrentAudioName] = useState('sound_two.mp3');
  const [duration, setDuration] = useState(0);
  const [isFinished, setIsFished] = useState(false);

  const setSoundStatus = useCallback(() => {
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

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <BottomButtonView buttonTitle={t('buttons.select')} onSubmit={_.noop}>
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
