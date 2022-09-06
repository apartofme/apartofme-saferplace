import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import { ExtendedButton, ExtendedText, MainHeader } from '../../../components';
import { ILanguageSettingsScreenProps } from './LanguageSettings.props';
import { styles } from './LanguageSettings.styles';

export const LanguageSettingsScreen: React.FC<ILanguageSettingsScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <MainHeader
          // TODO: add right icon
          leftIcon={IMAGES.WHITE_BACK_ARROW}
        />
        <ExtendedText style={styles.title}>
          {t('screens.menu.language_settings.title')}
        </ExtendedText>
        <ExtendedText style={styles.subtitle}>
          {t('screens.menu.language_settings.subtitle')}
        </ExtendedText>
      </View>

      <View>
        <ExtendedButton title={t('buttons.save')} />
        <ExtendedButton
          title={t('buttons.cancel')}
          onPress={navigation.goBack}
        />
      </View>
    </SafeAreaView>
  );
};
