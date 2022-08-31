import _ from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomButtonView, ExtendedText } from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { IAcknowledgementScreenProps } from './Acknowledgement.props';

export const AcknowledgementScreen: React.FC<IAcknowledgementScreenProps> =
  () => {
    const { t } = useTranslation();

    return (
      <SafeAreaView style={generalStyles.whFlex}>
        <BottomButtonView buttonTitle={t('buttons.next')} onSubmit={_.noop}>
          <ExtendedText>
            {t('screens.onboarding.acknowledgement.title')}
          </ExtendedText>
          <ExtendedText>
            {t('screens.onboarding.acknowledgement.subTitle')}
          </ExtendedText>
        </BottomButtonView>
      </SafeAreaView>
    );
  };
