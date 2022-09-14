import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { ExtendedText, Timer } from '../../../../../components';
import { ITitleProps } from './Title.types';
import { styles } from './Title.styles';
import { generalStyles } from '../../../../../utils/styles';

export const Title: React.FC<ITitleProps> = ({
  duration,
  onSubmit,
  titleKey,
}) => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={generalStyles.flex}>
      <View style={styles.container}>
        <Timer
          duration={duration}
          isStart={true}
          onAnimationComplete={onSubmit}
        />
        {!!titleKey && (
          <ExtendedText preset="large-title" style={styles.title}>
            {t(titleKey)}
          </ExtendedText>
        )}
      </View>
    </SafeAreaView>
  );
};
