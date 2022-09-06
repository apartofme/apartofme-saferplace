import _ from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

import { IMAGES } from '../../../../assets';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../../components';
import { useAppSelector } from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { ISignUpSuccessScreenProps } from './SignUpSuccess.props';

export const SignUpSuccessScreen: React.FC<ISignUpSuccessScreenProps> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation();
  const isChild = route.params?.isChild;
  const childAvatar = useAppSelector(state => state.cache.auth.child?.avatar);
  const parentAvatar = useAppSelector(state => state.cache.auth.parent?.avatar);

  const getTextType = () =>
    isChild
      ? 'screens.onboarding.sign_up_success.child'
      : 'screens.onboarding.sign_up_success.parent';

  return (
    <SafeAreaView style={generalStyles.whFlex}>
      {/* // TODO: change to correct function */}
      <BottomButtonView buttonTitle={t('buttons.next')} onSubmit={_.noop}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        {/* // TODO: uncomment when user avatar logic is added */}
        {/*<Image
          source={isChild ? childAvatar : parentAvatar}
          style={{ width: 50, height: 50 }}
        />*/}
        <ExtendedText>{t(`${getTextType()}.title`)}</ExtendedText>
        <ExtendedText>{t(`${getTextType()}.subtitle`)}</ExtendedText>
      </BottomButtonView>
    </SafeAreaView>
  );
};
