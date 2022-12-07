import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';

import { BACKGROUND_IMAGES } from '../../../../assets';
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
import { ILanguageSelectionScreenProps } from './LanguageSelection.types';
import { LANGUAGES } from '../../../../constants/languages';
import { styles } from './LanguageSelection.styles';
import { SVG } from '../../../../assets/svg';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

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
      <ImageBackground
        source={BACKGROUND_IMAGES.GENERIC_ONBOARDING}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <MainHeader
            leftIcon={<WhiteBackArrowIcon />}
            onLeftIconPress={navigation.goBack}
          />
          <BottomButtonView
            buttonTitle={t('buttons.select')}
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
      </ImageBackground>
    );
  };
