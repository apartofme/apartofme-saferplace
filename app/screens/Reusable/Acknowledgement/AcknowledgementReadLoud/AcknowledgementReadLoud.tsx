import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { BottomButtonView, ExtendedText } from '../../../../components';
import { CHARMS_BACKGROUNDS } from '../../../../assets';
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
      description,
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
      <ImageBackground
        source={
          CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
        }
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <Header />
          <BottomButtonView
            buttonTitle={buttonTitle || t('buttons.next')}
            isArrow={!buttonTitle}
            onSubmit={onSubmit}
            style={styles.container}>
            <View style={styles.readLoudContainer}>
              <ExtendedText
                preset="tertiary-text-medium"
                style={generalStyles.brilliantWhite}>
                {t('labels.read_out_loud')}
              </ExtendedText>
            </View>

            <View>
              <Title />
              {!!description && (
                <ExtendedText
                  preset="tertiary-text-regular"
                  style={generalStyles.brilliantWhiteCenter}>
                  {description}
                </ExtendedText>
              )}
            </View>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
