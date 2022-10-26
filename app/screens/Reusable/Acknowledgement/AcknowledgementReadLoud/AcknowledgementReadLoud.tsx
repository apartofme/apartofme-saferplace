import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { BottomButtonView, ExtendedText } from '../../../../components';
import { BACKGROUND_IMAGES } from '../../../../assets';
import { generalStyles } from '../../../../utils/styles';
import { styles } from './AcknowledgementReadLoud.styles';
import { IAcknowledgementReadLoudScreenProps } from './AcknowledgementReadLoud.types';
import {
  useNavigateNextQuest,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
} from '../../../../hooks';

export const AcknowledgementReadLoudScreen: React.FC<IAcknowledgementReadLoudScreenProps> =
  ({ route }) => {
    const { t } = useTranslation();

    const {
      title,
      titleHasNickname,
      crossHeader,
      buttonTitle,
      backgroundImage,
      escapeMenuAlternativeNavigateTo,
    } = route.params.data;

    const onSubmit = useNavigateNextQuest();

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'body-regular',
      style: styles.title,
    });

    const Header = useRenderQuestHeader({
      crossHeader: crossHeader ?? false,
      escapeMenuAlternativeNavigateTo,
    });

    return (
      // TODO: change to correct backgroundImage
      <ImageBackground
        source={backgroundImage ?? BACKGROUND_IMAGES.CALM_DEFAULT_BACKGROUND}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <Header />
          <BottomButtonView
            buttonTitle={buttonTitle || t('button.next')}
            isArrow={!buttonTitle}
            onSubmit={onSubmit}
            style={styles.container}>
            <View style={styles.readLoudContainer}>
              <ExtendedText
                preset="tertiary-text-medium"
                style={generalStyles.brilliantWhite}>
                {t('Read out loud')}
              </ExtendedText>
            </View>
            <Title />
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
