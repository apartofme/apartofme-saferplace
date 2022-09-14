import _ from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

import { IMAGES } from '../../../../assets';
import {
  BottomButtonView,
  ExtendedButton,
  ExtendedText,
  MainHeader,
  Timer,
} from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { styles } from './CharmTimerButton.styles';
import { ICharmTimerButtonScreenProps } from './CharmTimerButton.types';

export const CharmTimerButtonScreen: React.FC<ICharmTimerButtonScreenProps> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation();

  const {
    duration,
    onSubmit = _.noop,
    onButtonPress = _.noop,
    subtitleKey = '',
  } = route.params?.data;

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
        // TODO: change icon
        rightIcon={IMAGES.WHITE_BACK_ARROW}
      />
      <BottomButtonView
        buttonTitle={t('buttons.next')}
        onSubmit={onSubmit}
        style={styles.container}>
        <ExtendedButton title={t('buttons.read_out')} onPress={onButtonPress} />
        <Timer duration={duration} isStart={true} style={styles.timer} />
        <ExtendedText preset="secondary-text" style={styles.subtitle}>
          {t(subtitleKey)}
        </ExtendedText>
      </BottomButtonView>
    </SafeAreaView>
  );
};
