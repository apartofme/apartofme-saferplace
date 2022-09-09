import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IMAGES } from '../../../../assets';

import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { IAcknowledgementScreenProps } from './Acknowledgement.props';
import { styles } from './Acknowledgement.styles';

export const AcknowledgementScreen: React.FC<IAcknowledgementScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const onNextPress = useCallback(() => {
    navigation.navigate('OnboardingCarousel');
  }, [navigation]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <BottomButtonView
        buttonTitle={t('buttons.next')}
        onSubmit={onNextPress}
        style={styles.container}>
        {/* // TODO: add the image */}
        <ExtendedText preset="body-regular" style={styles.title}>
          {t('screens.onboarding.acknowledgement.title')}
        </ExtendedText>
      </BottomButtonView>
    </SafeAreaView>
  );
};
