import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { ExtendedText, Timer } from '../../../../components';
import { ITimerTitleScreenProps } from './TimerTitle.types';
import { styles } from './TimerTitle.styles';
import { generalStyles } from '../../../../utils/styles';

export const TimerTitleScreen: React.FC<ITimerTitleScreenProps> = ({
  route,
}) => {
  const { t } = useTranslation();

  const { duration, title } = route.params.data;

  return (
    <SafeAreaView style={generalStyles.flex}>
      <View style={styles.container}>
        <Timer duration={duration} isStart={true} />
        {!!title && (
          <ExtendedText preset="large-title" style={styles.title}>
            {t(title)}
          </ExtendedText>
        )}
      </View>
    </SafeAreaView>
  );
};
