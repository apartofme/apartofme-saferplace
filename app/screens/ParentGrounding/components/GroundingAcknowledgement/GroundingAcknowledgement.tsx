import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground, SafeAreaView } from 'react-native';

import { BottomButtonView, MainHeader } from '../../../../components';
import { IGroundingAcknowledgementProps } from './GroundingAcknowledgement.types';
import { styles } from './GroundingAcknowledgement.styles';
import { generalStyles } from '../../../../utils/styles';
import { SVG } from '../../../../assets/svg';
import { useParsedJSXTextNickname } from '../../../../hooks';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const GroundingAcknowledgement: React.FC<IGroundingAcknowledgementProps> =
  ({
    title,
    subtitle,
    buttonTitle,
    isButtonArrow,
    backgroundImage,
    onSubmit,
  }) => {
    const navigation = useNavigation();
    const { t } = useTranslation();

    const Title = useParsedJSXTextNickname({
      text: t(title),
      textHasNickname: true,
      preset: 'title',
      style: styles.title,
    });

    const SubTitle = useParsedJSXTextNickname({
      text: t(subtitle),
      textHasNickname: true,
      style: styles.subtitle,
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
            isArrow={isButtonArrow}
            onSubmit={onSubmit}
            style={styles.container}>
            <Title />
            <SubTitle />
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
