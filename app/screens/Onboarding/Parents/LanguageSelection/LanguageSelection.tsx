import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IMAGES } from '../../../../assets';

import {
  BottomButtonView,
  MainHeader,
  RadioButtonList,
  RadioButtonListType,
} from '../../../../components';
import { useAppDispatch } from '../../../../hooks';
import { settingsSlice } from '../../../../redux/slices/settingsSlice';
import i18n from '../../../../services/localization';
import { generalStyles } from '../../../../utils/styles';
import { LANGUAGES } from './LanguageSelection.data';
import { ILanguageSelectionScreenProps } from './LanguageSelection.props';

export const LanguageSelectionScreen: React.FC<ILanguageSelectionScreenProps> =
  ({ navigation }) => {
    const disptach = useAppDispatch();

    const [correctLanguage, setCorrectLanguage] = useState<string[]>(['en']);

    const { t } = useTranslation();

    useEffect(() => {
      i18n.changeLanguage(correctLanguage[0]);
      disptach(
        settingsSlice.actions.setLanguage({ language: correctLanguage[0] }),
      );
    }, [correctLanguage, disptach]);

    return (
      <SafeAreaView style={generalStyles.whFlex}>
        <BottomButtonView buttonTitle={t('buttons.confirm')} onSubmit={_.noop}>
          <MainHeader
            leftIcon={IMAGES.WHITE_BACK_ARROM}
            onLeftIconPress={navigation.goBack}
          />
          <RadioButtonList
            data={LANGUAGES}
            type={RadioButtonListType.Single}
            setSelected={setCorrectLanguage}
          />
        </BottomButtonView>
      </SafeAreaView>
    );
  };
