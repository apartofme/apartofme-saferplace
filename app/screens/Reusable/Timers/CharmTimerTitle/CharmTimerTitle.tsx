import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

import { IMAGES } from '../../../../assets';
import {
  BottomButtonView,
  ExtendedText,
  MainHeader,
  Timer,
} from '../../../../components';
import { generalStyles } from '../../../../utils/styles';
import { styles } from './CharmTimerTitle.styles';
import { ICharmTimerTitleScreenProps } from './CharmTimerTitle.types';

export const CharmTimerTitleScreen: React.FC<ICharmTimerTitleScreenProps> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation();

  const data = route.params.data;

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
        onSubmit={data && data.onSubmit}
        style={styles.container}>
        <ExtendedText preset="title" style={styles.title}>
          {t(data && data.titleKey)}
        </ExtendedText>
        <Timer
          duration={data && data.duration}
          isStart={true}
          style={styles.timer}
        />
        <ExtendedText preset="secondary-text" style={styles.subtitle}>
          {t(data && data.subtitleKey)}
        </ExtendedText>
      </BottomButtonView>
    </SafeAreaView>
  );
};