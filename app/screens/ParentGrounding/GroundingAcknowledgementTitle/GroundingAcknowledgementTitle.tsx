import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';

import { SVG } from '../../../assets/svg';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { useParsedJSXTextNickname } from '../../../hooks';
import { generalStyles } from '../../../utils/styles';
import { styles } from './GroundingAcknowledgementTitle.styles';
import { IGroundingAcknowledgementTitleScreenProps } from './GroundingAcknowledgementTitle.types';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const GroundingAcknowledgementTitleScreen: React.FC<IGroundingAcknowledgementTitleScreenProps> =
  ({ navigation, route }) => {
    const { t } = useTranslation();

    const { title, buttonTitle, Icon, backgroundImage, subtitle } =
      route.params.data;

    const onSubmit = useCallback(() => {
      navigation.push('StampFeet');
    }, [navigation]);

    const Title = useParsedJSXTextNickname({
      text: t(title),
      textHasNickname: true,
      preset: 'large-title',
      style: styles.title,
    });

    return (
      <ImageBackground source={backgroundImage} style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <MainHeader
            leftIcon={<WhiteBackArrowIcon />}
            onLeftIconPress={navigation.goBack}
          />
          <BottomButtonView
            buttonTitle={t(buttonTitle)}
            onSubmit={onSubmit}
            style={styles.container}>
            <Icon />
            <Title />
            <ExtendedText
              preset="secondary-text"
              style={generalStyles.greyCenter}>
              {t(subtitle)}
            </ExtendedText>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
