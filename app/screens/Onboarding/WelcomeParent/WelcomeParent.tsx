import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomButtonView, ExtendedText } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IWelcomeParentScreenProps } from './WelcomeParent.props';

export const WelcomeParentScreen: React.FC<IWelcomeParentScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const onEnterPress = useCallback(() => {
    navigation.navigate('LanguageSelection');
  }, [navigation]);

  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <BottomButtonView
        buttonTitle={t('buttons.enter')}
        onSubmit={onEnterPress}>
        <ExtendedText>{t('screens.onboarding.welcome.title')}</ExtendedText>
      </BottomButtonView>
    </SafeAreaView>
  );
};
