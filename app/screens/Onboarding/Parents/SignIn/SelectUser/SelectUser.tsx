import _ from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../../components';
import { IMAGES } from '../../../../../assets';
import { generalStyles } from '../../../../../utils/styles';
import { ISelectUserScreenProps } from './SelectUser.props';
import { trackButtonPress } from '../../../../../services/firebase';

export const SelectUserScreen: React.FC<ISelectUserScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      {/* // TODO: add content */}
      <BottomButtonView
        buttonTitle={t('buttons.manage_profiles')}
        // TODO: change noop to real function
        onSubmit={() => {
          trackButtonPress('manage');
        }}>
        <ExtendedText>{t('screens.onboarding.select_user.title')}</ExtendedText>
      </BottomButtonView>
    </SafeAreaView>
  );
};
