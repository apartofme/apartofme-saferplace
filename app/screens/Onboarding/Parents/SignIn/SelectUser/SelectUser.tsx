import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';
import _ from 'lodash';

import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../../components';
import { generalStyles } from '../../../../../utils/styles';
import { ISelectUserScreenProps } from './SelectUser.types';
import { SVG_ICONS } from '../../../../../assets/svg';

const WhiteBackArrowIcon = SVG_ICONS.WhiteBackArrowIcon;

export const SelectUserScreen: React.FC<ISelectUserScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <MainHeader
        leftIcon={<WhiteBackArrowIcon />}
        onLeftIconPress={navigation.goBack}
      />
      {/* // TODO: add content */}
      <BottomButtonView
        buttonTitle={t('buttons.manage_profiles')}
        // TODO: change noop to real function
        onSubmit={_.noop}>
        <ExtendedText>{t('screens.onboarding.select_user.title')}</ExtendedText>
      </BottomButtonView>
    </SafeAreaView>
  );
};
