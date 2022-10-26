import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import { CHARMS_BACKGROUNDS } from '../../../../assets';

import { BottomButtonView, ExtendedText, Timer } from '../../../../components';
import { useNavigateNextQuest, useRenderQuestHeader } from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { styles } from './CharmTimerButton.styles';
import { ICharmTimerButtonScreenProps } from './CharmTimerButton.types';

export const CharmTimerButtonScreen: React.FC<ICharmTimerButtonScreenProps> = ({
  route,
}) => {
  const { t } = useTranslation();
  const onSubmit = useNavigateNextQuest();

  const {
    title,
    buttonTitle,
    crossHeader,
    duration,
    escapeMenuAlternativeNavigateTo,
    backgroundImage,
  } = route.params.data;

  const Header = useRenderQuestHeader({
    crossHeader: crossHeader ?? false,
    escapeMenuAlternativeNavigateTo,
  });

  return (
    <ImageBackground
      source={
        CHARMS_BACKGROUNDS[backgroundImage ?? 'ALTERNATIVE_GARDEN_BACKGROUND']
      }
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <Header />
        <BottomButtonView
          buttonTitle={buttonTitle || t('buttons.next')}
          onSubmit={onSubmit}
          isArrow
          style={styles.container}>
          <View style={styles.readLoudContainer}>
            <ExtendedText
              preset="tertiary-text-medium"
              style={generalStyles.brilliantWhite}>
              {t('Read out loud')}
            </ExtendedText>
          </View>
          <Timer
            duration={duration ?? 10}
            isStart={true}
            style={styles.timer}
          />
          <ExtendedText
            preset="secondary-text"
            style={generalStyles.greyCenter}>
            {title}
          </ExtendedText>
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
