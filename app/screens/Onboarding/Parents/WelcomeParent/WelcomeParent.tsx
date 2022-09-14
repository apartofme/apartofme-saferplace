import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import {
  BottomButtonView,
  ExtendedButton,
  ExtendedText,
} from '../../../../components';
import { trackButtonPress } from '../../../../services/firebase';
import { generalStyles } from '../../../../utils/styles';
import { IWelcomeParentScreenProps } from './WelcomeParent.types';
import { styles } from './WelcomeParent.styles';
import { useMount } from '../../../../hooks';
import Api from '../../../../services/graphql';
import { questsToDictionary } from '../../../../utils';

export const WelcomeParentScreen: React.FC<IWelcomeParentScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const onSignUpPress = useCallback(() => {
    navigation.navigate('LanguageSelection');
  }, [navigation]);

  const onLoginPress = useCallback(() => {
    navigation.navigate('Login');
    trackButtonPress('Login');
  }, [navigation]);

  // TODO: remove
  const goToMenuStack = useCallback(() => {
    navigation.navigate('MenuStack');
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
          onPress={goToMenuStack}
          title="Dummy button for navigation to menu"
        />
        <ExtendedButton
          onPress={onSignUpPress}
          title={t('buttons.signup')}
          style={styles.button}
        />
      </BottomButtonView>
    </SafeAreaView>
  );
};
