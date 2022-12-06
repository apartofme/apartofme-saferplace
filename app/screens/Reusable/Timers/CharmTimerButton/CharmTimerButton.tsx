import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import Lottie from 'lottie-react-native';

import { CHARMS_BACKGROUNDS } from '../../../../assets';
import { ANIMATIONS } from '../../../../assets/animations';
import { BottomButtonView, ExtendedText } from '../../../../components';
import { useNavigateNextQuest, useRenderQuestHeader } from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { styles } from './CharmTimerButton.styles';
import { ICharmTimerButtonScreenProps } from './CharmTimerButton.types';
import { AnimationsKeys } from '../../../../utils/types';

export const CharmTimerButtonScreen: React.FC<ICharmTimerButtonScreenProps> = ({
  route,
}) => {
  const { t } = useTranslation();
  const onSubmit = useNavigateNextQuest();

  const {
    title,
    buttonTitle,
    crossHeader,
    image,
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
        <View style={styles.headerContainer}>
          <Header />
        </View>
        <BottomButtonView
          buttonTitle={buttonTitle || t('buttons.next')}
          onSubmit={onSubmit}
          isArrow
          style={styles.container}>
          {image && (
            <Lottie
              source={ANIMATIONS[image as AnimationsKeys]}
              autoPlay
              loop
              style={styles.animation}
            />
          )}
          <View style={styles.readLoudContainer}>
            <ExtendedText
              preset="tertiary-text-medium"
              style={generalStyles.brilliantWhite}>
              {t('labels.read_out_loud')}
            </ExtendedText>
          </View>
          <ExtendedText preset="secondary-text" style={styles.title}>
            {title}
          </ExtendedText>
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
