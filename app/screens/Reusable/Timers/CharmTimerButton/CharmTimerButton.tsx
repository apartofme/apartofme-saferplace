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

  const { duration, subtitle } = route.params.data;

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
        // TODO: change to real function when adding logic
        onSubmit={_.noop}
        style={styles.container}>
        <ExtendedButton title={t('buttons.read_out')} />
        <Timer duration={duration} isStart={true} style={styles.timer} />
        <ExtendedText preset="secondary-text" style={styles.subtitle}>
          {t(subtitle)}
        </ExtendedText>
      </BottomButtonView>
    </SafeAreaView>
  );
};
