import _ from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';
import { IMAGES } from '../../../assets';

import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IFeedbackSuccessScreenProps } from './FeedbackSuccess.props';
import { styles } from './FeedbackSuccess.styles';

export const FeedbackSuccessScreen: React.FC<IFeedbackSuccessScreenProps> =
  () => {
    const { t } = useTranslation();

    return (
      <SafeAreaView style={generalStyles.whFlex}>
        <MainHeader leftIcon={IMAGES.WHITE_BACK_ARROW} />
        {/* // TODO: change for correct function */}
        <BottomButtonView buttonTitle={t('buttons.back')} onSubmit={_.noop}>
          <View style={styles.container}>
            <ExtendedText style={styles.title}>
              {t('screens.menu.feedback_success.title')}
            </ExtendedText>
            <ExtendedText style={styles.subTitle}>
              {t('screens.menu.feedback_success.subtitle')}
            </ExtendedText>
          </View>
        </BottomButtonView>
      </SafeAreaView>
    );
  };
