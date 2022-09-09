import _ from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
  MultilineTextInput,
} from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IFeedbackScreenProps } from './Feedback.props';
import { styles } from './Feedback.styles';

export const FeedbackScreen: React.FC<IFeedbackScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <BottomButtonView buttonTitle={t('buttons.submit')} onSubmit={_.noop}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <View style={styles.container}>
          <ExtendedText style={styles.title}>
            {t('screens.menu.feedback.title')}
          </ExtendedText>
          <ExtendedText style={styles.subtitle}>
            {t('screens.menu.feedback.subtitle')}
          </ExtendedText>
          <View style={styles.inputContainer}>
            <MultilineTextInput />
          </View>
        </View>
      </BottomButtonView>
    </SafeAreaView>
  );
};
