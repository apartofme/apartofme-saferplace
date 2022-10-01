import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground, TouchableOpacity } from 'react-native';

import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../components';
import { IMAGES } from '../../../../assets';
import { generalStyles } from '../../../../utils/styles';
import { styles } from './AcknowledgementSupport.styles';
import { IAcknowledgementSupportScreenProps } from './AcknowledgementSupport.types';
import { useNavigateNextQuest, useNavigatePrevQuest } from '../../../../hooks';

export const AcknowledgementSupportScreen: React.FC<IAcknowledgementSupportScreenProps> =
  ({ navigation, route }) => {
    const { titleKey, image, subtitleKey, images, backgroundImage } =
      route.params.data;

    const goBack = useNavigatePrevQuest();
    const onSubmit = useNavigateNextQuest();

    const { t } = useTranslation();

    const goToAlert = useCallback(() => {
      navigation.navigate('Alert');
    }, [navigation]);

    return (
      <ImageBackground source={backgroundImage} style={generalStyles.flex}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={goBack}
        />
        <BottomButtonView
          buttonTitle={t('buttons.next')}
          onSubmit={onSubmit}
          style={styles.container}>
          <ExtendedText preset="body-regular" style={styles.title}>
            {t(titleKey)}
          </ExtendedText>
          <Image source={image} style={styles.image} />
          <TouchableOpacity onPress={goToAlert}>
            <Image
              source={(images && IMAGES[images[0]]) ?? IMAGES.LOGO}
              style={styles.infoImage}
            />
          </TouchableOpacity>
          <ExtendedText preset="secondary-text" style={styles.title}>
            {t(subtitleKey)}
          </ExtendedText>
        </BottomButtonView>
      </ImageBackground>
    );
  };
