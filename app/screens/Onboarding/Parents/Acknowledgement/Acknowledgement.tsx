import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomButtonView, ExtendedText } from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { IAcknowledgementScreenProps } from './Acknowledgement.props';

export const AcknowledgementScreen: React.FC<IAcknowledgementScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const onNextPress = useCallback(() => {
    navigation.navigate('OnboardingCarousel');
  }, [navigation]);

  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <BottomButtonView buttonTitle={t('buttons.next')} onSubmit={onNextPress}>
        <ExtendedText>
          {t('screens.onboarding.acknowledgement.title')}
        </ExtendedText>
        <ExtendedText>
          {t('screens.onboarding.acknowledgement.subtitle')}
        </ExtendedText>
      </BottomButtonView>
    </SafeAreaView>
  );
};
