import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';

import { BottomButtonView, ExtendedText } from '../../../../components';
import { CHARMS_BACKGROUNDS } from '../../../../assets';
import {
  usePositiveNavigateTo,
  useParsedJSXTextNickname,
  useRenderQuestHeader,
  useNegativeNavigateTo,
} from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { IAcknowledgementSuccessivelyDoubleButtonScreenProps } from './AcknowledgementSuccessivelyDoubleButton.types';
import { styles } from './AcknowledgementSuccessivelyDoubleButton.styles';
import { CHARMS_SVG } from '../../../../assets/svg';

export const AcknowledgementSuccessivelyDoubleButtonScreen: React.FC<IAcknowledgementSuccessivelyDoubleButtonScreenProps> =
  ({ route }) => {
    const {
      title,
      description,
      buttonTitle,
      image,
      backgroundImage,
      tellMoreTitle,
      crossHeader,
      positiveNavigatesTo,
      negativeNavigatesTo,
      titleHasNickname,
      escapeMenuAlternativeNavigateTo,
    } = route.params.data;

    const { t } = useTranslation();
    const negativeNavigate = useNegativeNavigateTo(negativeNavigatesTo, true);
    const onSubmit = usePositiveNavigateTo(positiveNavigatesTo);

    const Title = useParsedJSXTextNickname({
      text: title,
      textHasNickname: titleHasNickname ?? true,
      preset: 'large-title',
      style: styles.title,
    });

    const Header = useRenderQuestHeader({
      crossHeader: crossHeader ?? false,
      escapeMenuAlternativeNavigateTo,
    });

    const Icon = image && CHARMS_SVG[image];

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
            {Icon && <Icon />}
            <Title />
            <ExtendedText preset="secondary-text" style={styles.description}>
              {description}
            </ExtendedText>
          </BottomButtonView>
          <TouchableOpacity
            onPress={negativeNavigate}
            style={styles.bottomButton}>
            <ExtendedText preset="secondary-text" style={styles.bottomButton}>
              {tellMoreTitle}
            </ExtendedText>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    );
  };
