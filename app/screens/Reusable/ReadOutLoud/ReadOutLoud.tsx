import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground } from 'react-native';

import { IMAGES } from '../../../assets';
import {
  BottomButtonView,
  ExtendedButton,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { useNavigateNextQuest, useNavigatePrevQuest } from '../../../hooks';
import { generalStyles } from '../../../utils/styles';
import { styles } from './ReadOutLoud.styles';
import { IReadOutLoudScreenProps } from './ReadOutLoud.types';

export const ReadOutLoudScreen: React.FC<IReadOutLoudScreenProps> = () => {
  // const { title, description, image, buttonTitle, backgroundImage } = route.params.data;

  const { t } = useTranslation();

  const goBack = useNavigatePrevQuest();
  const onSubmit = useNavigateNextQuest();

  const title = 'title',
    description = 'some',
    image = ['LOGO'],
    buttonTitle = 'some',
    backgroundImage = IMAGES.WHITE_BACK_ARROW;

  return (
    <ImageBackground source={backgroundImage} style={generalStyles.flex}>
      <MainHeader leftIcon={IMAGES.WHITE_BACK_ARROW} onLeftIconPress={goBack} />
      <BottomButtonView
        buttonTitle={buttonTitle}
        onSubmit={onSubmit}
        style={styles.container}>
        <ExtendedButton title={t('buttons.read_out')} />
        {image && <Image source={IMAGES[image[0]]} style={styles.image} />}
        <ExtendedText preset="body-regular" style={styles.title}>
          {title}
        </ExtendedText>
        <ExtendedText preset="tertiary-text-regular" style={styles.subtitle}>
          {description}
        </ExtendedText>
      </BottomButtonView>
    </ImageBackground>
  );
};
