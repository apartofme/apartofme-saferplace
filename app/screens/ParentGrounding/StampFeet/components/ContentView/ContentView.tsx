import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';

import { IContentViewProps } from './ContentView.types';
import { styles } from './ContentView.styles';
import { SVG } from '../../../../../assets/svg';
import { useParsedJSXTextNickname } from '../../../../../hooks';
import { generalStyles } from '../../../../../utils/styles';
import { BottomButtonView, MainHeader } from '../../../../../components';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const ContentView: React.FC<IContentViewProps> = ({
  title,
  subtitle,
  buttonTitle,
  isButtonArrow,
  backgroundImage,
  onBackArrowPress,
  onSubmit,
}) => {
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
          onLeftIconPress={onBackArrowPress}
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
