import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { BACKGROUND_IMAGES } from '../../../assets';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IFeedbackSuccessScreenProps } from './FeedbackSuccess.types';
import { styles } from './FeedbackSuccess.styles';
import { SVG } from '../../../assets/svg';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;
const CelebrationGuideIcon = SVG.CelebrationGuideIcon;

export const FeedbackSuccessScreen: React.FC<IFeedbackSuccessScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const onSubmit = useCallback(() => {
    navigation.navigate('GrownUpsGuide');
  }, [navigation]);

  return (
    <ImageBackground source={BACKGROUND_IMAGES.MENU} style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={navigation.goBack}
        />
        <BottomButtonView buttonTitle={t('buttons.back')} onSubmit={onSubmit}>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <CelebrationGuideIcon />
            </View>
            <ExtendedText style={styles.title} preset="large-title">
              {t('screens.menu.feedback.success.title')}
            </ExtendedText>
            <ExtendedText style={styles.subtitle} preset="secondary-text">
              {t('screens.menu.feedback.success.description')}
            </ExtendedText>
          </View>
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
