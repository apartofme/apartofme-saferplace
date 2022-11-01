import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';
import _ from 'lodash';

import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../../components';
import { generalStyles } from '../../../../../utils/styles';
import { ISelectUserScreenProps } from './SelectUser.types';
import { SVG } from '../../../../../assets/svg';
import { styles } from './SelectUser.styles';
import { BACKGROUND_IMAGES } from '../../../../../assets';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const SelectUserScreen: React.FC<ISelectUserScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  return (
    <ImageBackground source={BACKGROUND_IMAGES.MENU} style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={navigation.goBack}
        />
        <BottomButtonView
          buttonTitle={t('buttons.manage_profiles')}
          onSubmit={_.noop}
          preset="border"
          style={styles.container}>
          <ExtendedText
            preset="large-title"
            style={generalStyles.brilliantWhite}>
            {t('screens.onboarding.select_user.title')}
          </ExtendedText>
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
