import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

import { IMAGES } from '../../../../assets';
import {
  BottomButtonView,
  MainHeader,
  RadioButtonList,
  RadioButtonListType,
} from '../../../../components';
import { useAppDispatch } from '../../../../hooks';
import { settingsSlice } from '../../../../redux/slices/settingsSlice';
import { generalStyles } from '../../../../utils/styles';
import i18n from '../../../../services/localization';
import { LANGUAGES } from './LanguageSelection.data';
import { ILanguageSelectionScreenProps } from './LanguageSelection.props';

export const LanguageSelectionScreen: React.FC<ILanguageSelectionScreenProps> =
  ({ navigation }) => {
    const disptach = useAppDispatch();

    const [selectedLanguage, setSelectedLanguage] = useState<string[]>(['en']);

    const { t } = useTranslation();

    useEffect(() => {
      i18n.changeLanguage(selectedLanguage[0]);
      disptach(
        settingsSlice.actions.setLanguage({ language: selectedLanguage[0] }),
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedLanguage]);

    return (
      // TODO: remove noop to real function
      <SafeAreaView style={generalStyles.whFlex}>
        <BottomButtonView buttonTitle={t('buttons.confirm')} onSubmit={_.noop}>
          <MainHeader
            leftIcon={IMAGES.WHITE_BACK_ARROW}
            onLeftIconPress={navigation.goBack}
          />
          <RadioButtonList
            data={LANGUAGES}
            type={RadioButtonListType.Single}
            setSelected={setSelectedLanguage}
          />
        </BottomButtonView>
      </SafeAreaView>
    );
  };
