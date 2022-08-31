import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomButtonView, ExtendedText } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IWelcomeScreenProps } from './Welcome.props';

export const WelcomeScreen: React.FC<IWelcomeScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const goToLanguageSelection = useCallback(() => {
    navigation.navigate('LanguageSelection');
  }, [navigation]);

  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <BottomButtonView
        buttonTitle={t('buttons.enter')}
        onSubmit={goToLanguageSelection}>
        <ExtendedText>{t('screens.onboarding.welcome.title')}</ExtendedText>
      </BottomButtonView>
    </SafeAreaView>
  );
};
