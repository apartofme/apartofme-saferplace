import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground, SafeAreaView } from 'react-native';

import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../components';
import { IGroundingAcknowledgementTitleProps } from './GroundingAcknowledgementTitle.types';
import { styles } from './GroundingAcknowledgementTitle.styles';
import { useNavigation } from '@react-navigation/native';
import { generalStyles } from '../../../../utils/styles';
import { IMAGES } from '../../../../assets';

export const GroundingAcknowledgementTitle: React.FC<IGroundingAcknowledgementTitleProps> =
  ({
    title,
    subtitle,
    buttonTitle,
    image,
    backgroundImage,
    onNextRouteName,
  }) => {
    const navigation = useNavigation();

    const { t } = useTranslation();

    const onSubmit = useCallback(() => {
      navigation.navigate(onNextRouteName);
    }, [navigation, onNextRouteName]);

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
