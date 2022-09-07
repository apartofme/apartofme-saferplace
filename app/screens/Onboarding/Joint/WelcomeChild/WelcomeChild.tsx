import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomButtonView, ExtendedText } from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { IWelcomeChildScreenProps } from './WelcomeChild.props';
import { styles } from './WelcomeChild.styles';

export const WelcomeChildScreen: React.FC<IWelcomeChildScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const goToSidekickIntro = useCallback(() => {
    navigation.navigate('SidekickIntro');
  }, [navigation]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <BottomButtonView
        style={styles.container}
        buttonTitle={t('buttons.enter')}
        onSubmit={goToSidekickIntro}>
        <ExtendedText preset="secondary-text" style={styles.title}>
          {t('screens.onboarding.welcome.title').toUpperCase()}
        </ExtendedText>
        {/* // TODO: add the logo image */}
      </BottomButtonView>
    </SafeAreaView>
  );
};
