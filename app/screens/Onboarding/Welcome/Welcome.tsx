import _ from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomButtonView, ExtendedText } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IWelcomeScreenProps } from './Welcome.props';

export const WelcomeScreen: React.FC<IWelcomeScreenProps> = ({}) => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <BottomButtonView buttonTitle={t('buttons.enter')} onSubmit={_.noop}>
        <ExtendedText>{t('screens.onboarding.welcome_to_a')}</ExtendedText>
      </BottomButtonView>
    </SafeAreaView>
  );
};
