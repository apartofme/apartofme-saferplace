import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { ExtendedText, Timer } from '../../../../components';
import { ITimerTitleScreenProps } from './TimerTitle.types';
import { styles } from './TimerTitle.styles';
import { generalStyles } from '../../../../utils/styles';

export const TimerTitleScreen: React.FC<ITimerTitleScreenProps> = ({
  route,
}) => {
  const { duration, title } = route.params.data;

  return (
    <SafeAreaView style={generalStyles.flex}>
      <View style={styles.container}>
        <Timer duration={duration} isStart={true} />
        {title && (
          <ExtendedText preset="large-title" style={styles.title}>
            {title}
          </ExtendedText>
        )}
      </View>
    </SafeAreaView>
  );
};
