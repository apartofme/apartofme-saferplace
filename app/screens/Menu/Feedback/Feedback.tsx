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

export const FeedbackScreen: React.FC<IFeedbackScreenProps> = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <BottomButtonView
        buttonTitle={t('buttons.submit')}
        onSubmit={function (): void {
          throw new Error('Function not implemented.');
        }}>
        <View style={styles.container}>
          <MainHeader leftIcon={IMAGES.WHITE_BACK_ARROW} />
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
