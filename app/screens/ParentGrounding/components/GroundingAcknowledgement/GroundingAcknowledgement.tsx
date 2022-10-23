import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../components';
import { IGroundingAcknowledgementProps } from './GroundingAcknowledgement.types';
import { styles } from './GroundingAcknowledgement.styles';
import { generalStyles } from '../../../../utils/styles';
import { SVG } from '../../../../assets/svg';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const GroundingAcknowledgement: React.FC<IGroundingAcknowledgementProps> =
  ({ title, buttonTitle, image, backgroundImage, onSubmit }) => {
    const navigation = useNavigation();

    const { t } = useTranslation();

    return (
      <ImageBackground
        // TODO: change to the real image
        source={backgroundImage}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <MainHeader
            leftIcon={<WhiteBackArrowIcon />}
            onLeftIconPress={navigation.goBack}
          />
          <BottomButtonView
            buttonTitle={t(buttonTitle)}
            onSubmit={onSubmit}
            style={styles.container}>
            <Image source={image} style={styles.image} />
            <ExtendedText style={styles.title}>{t(title)}</ExtendedText>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
