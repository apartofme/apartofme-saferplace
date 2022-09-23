import React, { useCallback } from 'react';
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
import { useNavigateNextQuest, useNavigatePrevQuest } from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { styles } from './CharmTimerButton.styles';
import { ICharmTimerButtonScreenProps } from './CharmTimerButton.types';

export const CharmTimerButtonScreen: React.FC<ICharmTimerButtonScreenProps> = ({
  route,
}) => {
  const { t } = useTranslation();
  const goBack = useNavigatePrevQuest();
  const onSubmit = useNavigateNextQuest();

  const { title, buttonTitle, crossHeader, duration } = route.params.data;

  const renderHeader = useCallback(() => {
    if (crossHeader) {
      return (
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={goBack}
          // TODO: change to real image & function
          rightIcon={IMAGES.WHITE_BACK_ARROW}
          onRightIconPress={goBack}
        />
      );
    } else {
      return (
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={goBack}
        />
      );
    }
  }, [crossHeader, goBack]);

  return (
    <SafeAreaView style={generalStyles.flex}>
      {renderHeader()}
      <BottomButtonView
        buttonTitle={buttonTitle ?? t('buttons.next')}
        // TODO: change to real function when adding logic
        onSubmit={onSubmit}
        style={styles.container}>
        <ExtendedButton title={t('buttons.read_out')} />
        <Timer duration={duration ?? 10} isStart={true} style={styles.timer} />
        <ExtendedText preset="secondary-text" style={styles.subtitle}>
          {title}
        </ExtendedText>
      </BottomButtonView>
    </SafeAreaView>
  );
};
