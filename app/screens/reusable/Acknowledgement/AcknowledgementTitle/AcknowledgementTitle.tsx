import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground } from 'react-native';

import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../components';
import { IMAGES } from '../../../../assets';
import { generalStyles } from '../../../../utils/styles';
import { styles } from './AcknowledgementTitle.styles';
import { IAcknowledgementTitleScreenProps } from './AcknowledgementTitle.props';

export const AcknowledgementTitleScreen: React.FC<IAcknowledgementTitleScreenProps> =
  ({ navigation, route }) => {
    const { titleKey, image, backgroundImage, onSubmit } = route.params.data;
    const { t } = useTranslation();

    return (
      <ImageBackground source={backgroundImage} style={generalStyles.flex}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <BottomButtonView
          buttonTitle={t('buttons.next')}
          onSubmit={onSubmit}
          style={styles.container}>
          <Image source={image} />
          <ExtendedText preset="body-regular" style={styles.title}>
            {t(titleKey)}
          </ExtendedText>
        </BottomButtonView>
      </ImageBackground>
    );
  };
