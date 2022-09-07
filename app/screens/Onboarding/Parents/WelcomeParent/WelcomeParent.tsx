import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import {
  BottomButtonView,
  ExtendedButton,
  ExtendedText,
} from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { IWelcomeParentScreenProps } from './WelcomeParent.props';
import { styles } from './WelcomeParent.styles';

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
        buttonTitle={t('buttons.log_in')}
        onSubmit={onEnterPress}
        style={styles.container}>
        <View>
          <ExtendedText preset="secondary-text" style={styles.title}>
            {t('screens.onboarding.welcome.title').toUpperCase()}
          </ExtendedText>
          {/* // TODO: add the logo image */}
        </View>
        <ExtendedButton title={t('buttons.signup')} style={styles.button} />
      </BottomButtonView>
    </SafeAreaView>
  );
};
