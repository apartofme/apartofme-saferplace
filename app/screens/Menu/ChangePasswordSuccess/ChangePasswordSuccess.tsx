import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground, SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IChangePasswordSuccessScreenProps } from './ChangePasswordSuccess.types';
import { styles } from './ChangePasswordSuccess.styles';

export const ChangePasswordSuccessScreen: React.FC<IChangePasswordSuccessScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    const onSubmit = useCallback(() => {
      navigation.navigate('ManageAccountMenu');
    }, [navigation]);

    return (
      <ImageBackground
        source={IMAGES.MENU_BACKGROUND}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.whFlex}>
          <MainHeader
            leftIcon={IMAGES.WHITE_BACK_ARROW}
            onLeftIconPress={navigation.goBack}
          />
          <BottomButtonView buttonTitle={t('buttons.back')} onSubmit={onSubmit}>
            <View style={styles.container}>
              <Image source={IMAGES.CELEBRATION_GUIDE} style={styles.image} />
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
