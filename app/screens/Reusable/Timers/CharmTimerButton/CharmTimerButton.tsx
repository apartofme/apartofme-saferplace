import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView } from 'react-native';

import {
  BottomButtonView,
  ExtendedButton,
  ExtendedText,
  Timer,
} from '../../../../components';
import { useNavigateNextQuest, useRenderQuestHeader } from '../../../../hooks';
import { generalStyles } from '../../../../utils/styles';
import { styles } from './CharmTimerButton.styles';
import { ICharmTimerButtonScreenProps } from './CharmTimerButton.types';

export const CharmTimerButtonScreen: React.FC<ICharmTimerButtonScreenProps> = ({
  route,
}) => {
  const { t } = useTranslation();
  const onSubmit = useNavigateNextQuest();

  const { title, buttonTitle, crossHeader, duration } = route.params.data;

  const Header = useRenderQuestHeader(crossHeader ?? false);

  return (
    <ImageBackground
      // TODO: change to the real image
      source={{
        uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
      }}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <Header />
        <BottomButtonView
          buttonTitle={buttonTitle ?? t('buttons.next')}
          // TODO: change to real function when adding logic
          onSubmit={onSubmit}
          style={styles.container}>
          <ExtendedButton title={t('buttons.read_out')} />
          <Timer
            duration={duration ?? 10}
            isStart={true}
            style={styles.timer}
          />
          <ExtendedText preset="secondary-text" style={styles.subtitle}>
            {title}
          </ExtendedText>
        </BottomButtonView>
      </SafeAreaView>
    </ImageBackground>
  );
};
