import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

import { IMAGES } from '../../../../assets';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
  RadioButtonList,
  RadioButtonListType,
} from '../../../../components';
import { useAppDispatch } from '../../../../hooks';
import { settingsSlice } from '../../../../redux/slices/settingsSlice';
import { generalStyles } from '../../../../utils/styles';
import i18n from '../../../../services/localization';
import { ILanguageSelectionScreenProps } from './LanguageSelection.props';
import { LANGUAGES } from '../../../../constants/languages';
import { styles } from './LanguageSelection.styles';

export const LanguageSelectionScreen: React.FC<ILanguageSelectionScreenProps> =
  ({ navigation }) => {
    const disptach = useAppDispatch();

    const [selectedLanguage, setSelectedLanguage] = useState<string[]>(['']);

    const { t } = useTranslation();

    const onSubmit = useCallback(() => {
      i18n.changeLanguage(selectedLanguage[0]);
      disptach(
        settingsSlice.actions.setSettings({
          language: selectedLanguage[0],
        }),
      );
      navigation.navigate('Acknowledgement');
    }, [disptach, navigation, selectedLanguage]);

    return (
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <BottomButtonView
          buttonTitle={t('buttons.confirm')}
          onSubmit={onSubmit}
          isDisabledButton={!selectedLanguage.length}
          style={styles.container}>
          <ExtendedText preset="large-title" style={styles.title}>
            {t('screens.onboarding.language_selection.title')}
          </ExtendedText>
          <RadioButtonList
            data={[...LANGUAGES]}
            type={RadioButtonListType.Single}
            setSelected={setSelectedLanguage}
          />
        </BottomButtonView>
      </SafeAreaView>
    );
  };
