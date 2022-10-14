import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground } from 'react-native';

import { IMAGES } from '../../../assets';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { styles } from './GroundingAcknowledgement.styles';
import { IGroundingAcknowledgementScreenProps } from './GroundingAcknowledgement.types';

export const GroundingAcknowledgementScreen: React.FC<IGroundingAcknowledgementScreenProps> =
  ({ navigation, route }) => {
    const { t } = useTranslation();

    const { title, buttonTitle, image, backgroundImage, onNextRouteName } =
      route.params.data;

    const onSubmit = useCallback(() => {
      navigation.navigate(onNextRouteName);
    }, [navigation, onNextRouteName]);

    return (
      <ImageBackground
        // TODO: change to the real image
        source={backgroundImage}
        style={generalStyles.flex}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <BottomButtonView
          buttonTitle={buttonTitle}
          onSubmit={onSubmit}
          style={styles.container}>
          <Image source={image} style={styles.image} />
          <ExtendedText style={styles.title}>{t(title)}</ExtendedText>
        </BottomButtonView>
      </ImageBackground>
    );
  };
