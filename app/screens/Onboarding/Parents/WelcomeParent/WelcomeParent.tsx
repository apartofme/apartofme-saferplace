import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import {
  BottomButtonView,
  ExtendedButton,
  ExtendedText,
} from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { IWelcomeParentScreenProps } from './WelcomeParent.types';
import { styles } from './WelcomeParent.styles';

export const WelcomeParentScreen: React.FC<IWelcomeParentScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const onSignUpPress = useCallback(() => {
    navigation.navigate('LanguageSelection');
  }, [navigation]);

  const onLoginPress = useCallback(() => {
    navigation.navigate('RecognitionStack');
  }, [navigation]);

  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <BottomButtonView
        buttonTitle={t('buttons.log_in')}
        onSubmit={onLoginPress}
        style={styles.container}>
        <View>
          <ExtendedText preset="secondary-text" style={styles.title}>
            {t('screens.onboarding.welcome.title').toUpperCase()}
          </ExtendedText>
          {/* // TODO: add the logo image */}
        </View>
        <ExtendedButton
          onPress={onSignUpPress}
          title={t('buttons.signup')}
          style={styles.button}
        />
      </BottomButtonView>
    </SafeAreaView>
  );
};
