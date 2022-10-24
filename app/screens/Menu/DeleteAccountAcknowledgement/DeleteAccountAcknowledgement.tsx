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
import { IDeleteAccountAcknowledgementScreenProps } from './DeleteAccountAcknowledgement.types';
import { styles } from './DeleteAccountAcknowledgement.styles';
import { SVG } from '../../../assets/svg';
import { useAppSelector } from '../../../hooks';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;
const CelebrationGuideIcon = SVG.CelebrationGuideIcon;

export const DeleteAccountAcknowledgementScreen: React.FC<IDeleteAccountAcknowledgementScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    const onSubmit = useCallback(() => {
      navigation.navigate('DeleteAccount');
    }, [navigation]);

    const nickname = useAppSelector(state => state.user.parent?.nickname);

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
            buttonTitle={t('buttons.delete_account')}
            onSubmit={onSubmit}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <CelebrationGuideIcon />
              </View>
              <View style={generalStyles.row}>
                <ExtendedText style={styles.nickname} preset="large-title">
                  {nickname}
                </ExtendedText>
                <ExtendedText style={styles.title} preset="large-title">
                  {t('screens.menu.delete_account_acknowledgement.title')}
                </ExtendedText>
              </View>
              <ExtendedText style={styles.subtitle} preset="secondary-text">
                {t('screens.menu.delete_account_acknowledgement.description')}
              </ExtendedText>
            </View>
          </BottomButtonView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
