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
import { ISignUpSuccessScreenProps } from './SignUpSuccess.props';
import { styles } from './SignUpSuccess.styles';

export const SignUpSuccessScreen: React.FC<ISignUpSuccessScreenProps> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation();
  const isChild = route.params?.isChild;
  const avatar = useAppSelector(
    state => state.cache.auth[isChild ? 'child' : 'parent']?.avatar,
  );

  const getCorrectLocalizationPath = () => {
    if (isChild) {
      return 'screens.onboarding.sign_up_success.child';
    } else {
      return 'screens.onboarding.sign_up_success.parent';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* // TODO: change to correct function */}
      <BottomButtonView buttonTitle={t('buttons.next')} onSubmit={_.noop}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        {/* // TODO: uncomment when user avatar logic is added */}
        {/*<Image
          source={ avatar }
          style={ styles.mt113 }
        />*/}
        <ExtendedText style={styles.title}>
          {t(`${getCorrectLocalizationPath()}.title`)}
        </ExtendedText>
        <ExtendedText style={styles.subtitle}>
          {t(`${getCorrectLocalizationPath()}.subtitle`)}
        </ExtendedText>
      </BottomButtonView>
    </SafeAreaView>
  );
};
