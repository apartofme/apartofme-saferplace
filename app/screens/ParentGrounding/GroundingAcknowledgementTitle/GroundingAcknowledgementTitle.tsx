import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground, SafeAreaView } from 'react-native';

import { IMAGES } from '../../../assets';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { styles } from './GroundingAcknowledgementTitle.styles';
import { IGroundingAcknowledgementTitleScreenProps } from './GroundingAcknowledgementTitle.types';

export const GroundingAcknowledgementTitleScreen: React.FC<IGroundingAcknowledgementTitleScreenProps> =
  ({ navigation, route }) => {
    const { t } = useTranslation();

    const { title, buttonTitle, image, backgroundImage, subtitle } =
      route.params.data;

    const onSubmit = useCallback(() => {
      navigation.push('StampFeet');
    }, [navigation]);

    return (
      <ImageBackground
        // TODO: change to the real image
        source={backgroundImage}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <MainHeader
            leftIcon={IMAGES.WHITE_BACK_ARROW}
            onLeftIconPress={navigation.goBack}
          />
          <BottomButtonView
            buttonTitle={t(buttonTitle)}
            onSubmit={onSubmit}
            style={styles.container}>
            <Image source={image} style={styles.image} />
            <ExtendedText style={styles.title}>{t(title)}</ExtendedText>
            <ExtendedText>{t(subtitle)}</ExtendedText>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
