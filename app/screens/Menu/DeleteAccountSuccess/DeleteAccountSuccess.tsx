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
import { IDeleteAccountSuccessScreenProps } from './DeleteAccountSuccess.types';
import { styles } from './DeleteAccountSuccess.styles';
import { SVG } from '../../../assets/svg';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;
const CelebrationGuideIcon = SVG.CelebrationGuideIcon;

export const DeleteAccountSuccessScreen: React.FC<IDeleteAccountSuccessScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    const onSubmit = useCallback(() => {
      navigation.navigate('ParentsOnboardingStack');
    }, [navigation]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.MENU}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <MainHeader
            leftIcon={<WhiteBackArrowIcon />}
            onLeftIconPress={navigation.goBack}
          />
          <BottomButtonView
            buttonTitle={t('buttons.next')}
            onSubmit={onSubmit}
            isArrow={true}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <CelebrationGuideIcon />
              </View>
              <ExtendedText style={styles.title} preset="large-title">
                {t('screens.menu.delete_account_success.title')}
              </ExtendedText>
              <ExtendedText style={styles.subtitle} preset="secondary-text">
                {t('screens.menu.delete_account_success.description')}
              </ExtendedText>
            </View>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };