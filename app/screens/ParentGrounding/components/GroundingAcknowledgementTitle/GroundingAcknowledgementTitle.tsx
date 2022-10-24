import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground, SafeAreaView } from 'react-native';

import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../components';
import { IGroundingAcknowledgementTitleProps } from './GroundingAcknowledgementTitle.types';
import { styles } from './GroundingAcknowledgementTitle.styles';
import { generalStyles } from '../../../../utils/styles';
import { SVG } from '../../../../assets/svg';
import { useParsedJSXTextNickname } from '../../../../hooks';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const GroundingAcknowledgementTitle: React.FC<IGroundingAcknowledgementTitleProps> =
  ({
    title,
    subtitle,
    buttonTitle,
    Icon,
    backgroundImage,
    onNextRouteName,
  }) => {
    const navigation = useNavigation();

    const { t } = useTranslation();

    const onSubmit = useCallback(() => {
      navigation.navigate(onNextRouteName);
    }, [navigation, onNextRouteName]);

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
            isArrow={true}
            onSubmit={onSubmit}
            style={styles.container}>
            {Icon && <Icon />}
            <Title />
            <ExtendedText preset="secondary-text" style={styles.description}>
              {t(subtitle)}
            </ExtendedText>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
