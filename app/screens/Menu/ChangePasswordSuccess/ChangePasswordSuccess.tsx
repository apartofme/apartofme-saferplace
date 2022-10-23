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
import { IChangePasswordSuccessScreenProps } from './ChangePasswordSuccess.types';
import { styles } from './ChangePasswordSuccess.styles';
import { SVG } from '../../../assets/svg';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;
const CelebrationGuideIcon = SVG.CelebrationGuideIcon;

export const ChangePasswordSuccessScreen: React.FC<IChangePasswordSuccessScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    const onSubmit = useCallback(() => {
      navigation.navigate('ManageAccountMenu');
    }, [navigation]);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.MENU}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.whFlex}>
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
                {t('screens.menu.change_password.success.title')}
              </ExtendedText>
              <ExtendedText style={styles.subtitle} preset="secondary-text">
                {t('screens.menu.change_password.success.description')}
              </ExtendedText>
            </View>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
