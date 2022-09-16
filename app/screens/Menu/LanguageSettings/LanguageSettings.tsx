import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import {
  ExtendedButton,
  ExtendedText,
  MainHeader,
  RadioButtonList,
  RadioButtonListType,
} from '../../../components';
import { LANGUAGES } from '../../../constants/languages';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { settingsSlice } from '../../../redux/slices';
import i18n from '../../../services/localization';
import { ILanguageSettingsScreenProps } from './LanguageSettings.types';
import { styles } from './LanguageSettings.styles';

export const LanguageSettingsScreen: React.FC<ILanguageSettingsScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const disptach = useAppDispatch();

  const [selectedLanguage, setSelectedLanguage] = useState([
    useAppSelector(state => state.settings.settings.language),
  ]);

  const onSubmit = useCallback(() => {
    i18n.changeLanguage(selectedLanguage[0]);
    disptach(
      settingsSlice.actions.setSettings({ language: selectedLanguage[0] }),
    );
  }, [disptach, selectedLanguage]);

  return (
    <SafeAreaView style={styles.container}>
      <MainHeader
        // TODO: add right icon
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <View style={styles.contentContainer}>
        <ExtendedText style={styles.title}>
          {t('screens.menu.language_settings.title')}
        </ExtendedText>
        <ExtendedText style={styles.subtitle}>
          {t('screens.menu.language_settings.description')}
        </ExtendedText>
        <View style={styles.listContainer}>
          <RadioButtonList
            data={LANGUAGES}
            type={RadioButtonListType.Single}
            setSelected={setSelectedLanguage}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <ExtendedButton title={t('buttons.save')} onPress={onSubmit} />
        <ExtendedButton
          style={styles.cancelButton}
          title={t('buttons.cancel')}
          onPress={navigation.goBack}
        />
      </View>
    </SafeAreaView>
  );
};
