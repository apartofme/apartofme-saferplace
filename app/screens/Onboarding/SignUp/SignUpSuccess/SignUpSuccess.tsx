import _ from 'lodash';
import React, { useMemo } from 'react';
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

  const getCorrectLocalizationPath = useMemo(() => {
    if (isChild) {
      return 'screens.onboarding.sign_up_success.child';
    } else {
      return 'screens.onboarding.sign_up_success.parent';
    }
  }, [isChild]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <BottomButtonView
        buttonTitle={t('buttons.next')}
        // TODO: change to correct function
        onSubmit={_.noop}
        style={styles.container}>
        {/* // TODO: uncomment when user avatar logic is added */}
        {/*<Image
          source={ avatar }
          style={ styles.mt113 }
        />*/}
        <ExtendedText preset="large-title" style={styles.title}>
          {t(`${getCorrectLocalizationPath}.title`)}
        </ExtendedText>
        <ExtendedText preset="secondary-text" style={styles.subtitle}>
          {t(`${getCorrectLocalizationPath}.subtitle`)}
        </ExtendedText>
      </BottomButtonView>
    </SafeAreaView>
  );
};
