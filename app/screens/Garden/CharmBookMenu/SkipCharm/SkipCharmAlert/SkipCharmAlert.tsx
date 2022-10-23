import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';

import { BACKGROUND_IMAGES } from '../../../../../assets';
import { AVATARS_SVG, SVG } from '../../../../../assets/svg';
import {
  BottomButtonView,
  ExtendedButton,
  ExtendedText,
  MainHeader,
} from '../../../../../components';
import { useAppSelector } from '../../../../../hooks';
import { generalStyles } from '../../../../../utils/styles';
import { AvatarsNameType } from '../../../../../utils/types';
import { styles } from './SkipCharmAlert.styles';
import { ISkipCharmAlertScreenProps } from './SkipCharmAlert.types';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const SkipCharmAlertScreen: React.FC<ISkipCharmAlertScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();
  const parentAvatar =
    useAppSelector(state => state.user.parent?.avatar) ??
    `Circle${AvatarsNameType.Rabbit}`;

  const AvatarIcon = AVATARS_SVG[parentAvatar];

  const onSubmit = useCallback(() => {
    navigation.push('SkipCharmAcknowledgement', {
      isFirst: true,
    });
  }, [navigation]);

  const goToGarden = useCallback(() => {
    navigation.push('GardenStack', {
      screen: 'Garden',
      params: {
        isFirstTime: false,
        isPlanting: false,
        isFirstTimeGarden: false,
      },
    });
  }, [navigation]);

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.ALTERNATIVE_GARDEN_BACKGROUND}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={navigation.goBack}
        />
        <BottomButtonView
          buttonTitle={t('buttons.skip')}
          onSubmit={onSubmit}
          style={styles.container}>
          <AvatarIcon />
          <ExtendedText preset="large-title" style={styles.title}>
            {t('screens.skip_charm_alert.title')}
          </ExtendedText>
          <ExtendedText
            preset="secondary-text"
            style={generalStyles.greyCenter}>
            {t('screens.skip_charm_alert.description')}
          </ExtendedText>
        </BottomButtonView>
        <ExtendedButton
          preset="border"
          title={t('buttons.back_to_clearing')}
          onPress={goToGarden}
          style={styles.bottomButton}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};
