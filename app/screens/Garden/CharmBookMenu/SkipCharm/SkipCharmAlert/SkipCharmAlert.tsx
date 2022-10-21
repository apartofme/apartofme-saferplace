import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

import { ExtendedButton, ExtendedText } from '../../../../../components';
import { generalStyles } from '../../../../../utils/styles';
import { ISkipCharmAlertScreenProps } from './SkipCharmAlert.types';

export const SkipCharmAlertScreen: React.FC<ISkipCharmAlertScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const onSabmit = useCallback(() => {
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
    <SafeAreaView style={generalStyles.flex}>
      {/* // TODO: uncoment when icon will be done */}
      {/* <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        /> */}
      {/* // TODO: change to real image */}
      {/* <Image source={IMAGES.LOGO} /> */}
      <ExtendedText>{t('screens.skip-charm-alert.title')}</ExtendedText>
      <ExtendedText>{t('screens.skip-charm-alert.description')}</ExtendedText>
      <ExtendedButton title="buttons.skip" onPress={onSabmit} />
      <ExtendedButton title="buttons.back_clearing" onPress={goToGarden} />
    </SafeAreaView>
  );
};
