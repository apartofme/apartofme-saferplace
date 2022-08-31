import _ from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IMAGES } from '../../../../assets';

import {
  BottomButtonView,
  MainHeader,
  RadioButtonList,
  RadioButtonListType,
} from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { LANGUAGES } from './LanguageSelection.data';
import { ILanguageSelectionScreenProps } from './LanguageSelection.props';

export const LanguageSelectionScreen: React.FC<ILanguageSelectionScreenProps> =
  ({}) => {
    const { t } = useTranslation();

    return (
      <SafeAreaView style={generalStyles.whFlex}>
        <MainHeader leftIcon={IMAGES.LOGO} />
        <BottomButtonView buttonTitle={t('buttons.confim')} onSubmit={_.noop}>
          <RadioButtonList data={LANGUAGES} type={RadioButtonListType.Single} />
        </BottomButtonView>
      </SafeAreaView>
    );
  };
