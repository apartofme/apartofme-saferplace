import _ from 'lodash';
import React, { useCallback } from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { IRecognitionAcknowledgementScreenProps } from './RecognitionAcknowledgement.types';
import { styles } from './RecognitionAcknowledgement.styles';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { BACKGROUND_IMAGES } from '../../../assets';
import { RECOGNITION_ACKNOWLEDGEMENT_DATA } from './RecognitionAcknowledgement.data';
import { useParsedJSXTextNickname } from '../../../hooks';
import { SPIRIT_INTRO_DIALOG } from '../RecognitionDialog/RecognitionDialog.data';
import { SVG } from '../../../assets/svg';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;
const WhiteCrossIcon = SVG.WhiteCrossIcon;
const CompassionateGuideIcon = SVG.CompassionateGuideIcon;

export const RecognitionAcknowledgementScreen: React.FC<IRecognitionAcknowledgementScreenProps> =
  ({ navigation, route }) => {
    const { type } = route.params.data;

    const { t } = useTranslation();

    const findedTitle =
      _.find(RECOGNITION_ACKNOWLEDGEMENT_DATA, item => item.type === type)
        ?.title ?? '';

    const Title = useParsedJSXTextNickname({
      text: t(findedTitle),
      preset: 'title',
      textHasNickname: true,
      style: styles.title,
    });

    const onSubmitPress = useCallback(() => {
      navigation.push('RecognitionDialog', {
        data: {
          speech: SPIRIT_INTRO_DIALOG,
          nextRoute: 'ElixirCarousel',
        },
      });
    }, [navigation]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <MainHeader
            leftIcon={<WhiteBackArrowIcon />}
            onLeftIconPress={navigation.goBack}
            rightIcon={<WhiteCrossIcon />}
          />
          <BottomButtonView
            buttonTitle={t('buttons.next')}
            onSubmit={onSubmitPress}
            isArrow={true}>
            <View style={styles.container}>
              <CompassionateGuideIcon />
              <Title />
              <ExtendedText style={styles.subtitle} preset="secondary-text">
                {t(
                  _.find(
                    RECOGNITION_ACKNOWLEDGEMENT_DATA,
                    item => item.type === type,
                  )?.subtitle ?? '',
                )}
              </ExtendedText>
            </View>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
