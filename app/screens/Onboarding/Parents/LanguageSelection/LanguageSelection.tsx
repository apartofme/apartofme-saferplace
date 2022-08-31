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
  ({ navigation }) => {
    const { t } = useTranslation();

    return (
      <SafeAreaView style={generalStyles.whFlex}>
        <BottomButtonView buttonTitle={t('buttons.confim')} onSubmit={_.noop}>
          <MainHeader
            leftIcon={IMAGES.WHITE_BACK_ARROM}
            onLeftIconPress={navigation.goBack}
          />
          <RadioButtonList data={LANGUAGES} type={RadioButtonListType.Single} />
        </BottomButtonView>
      </SafeAreaView>
    );
  };
