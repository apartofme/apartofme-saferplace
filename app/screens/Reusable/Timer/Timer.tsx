import _ from 'lodash';
import React, { useMemo } from 'react';

import { ITimerScreenProps, TimerType } from './Timer.types';
import { TitleButton } from './components/TitleButton/TitleButton';
import { ImageBackground } from 'react-native';
import { generalStyles } from '../../../utils/styles';

export const TimerScreen: React.FC<ITimerScreenProps> = ({ route }) => {
  const {
    backgroundImage,
    duration,
    type,
    onSubmit = _.noop,
    titleKey = '',
  } = route.params?.data;

  const TimerItem = useMemo(() => {
    switch (type) {
      case TimerType.TitleButton:
        return (
          <TitleButton
            duration={duration}
            onSubmit={onSubmit}
            titleKey={titleKey}
          />
        );

      default:
        return TitleButton;
    }
  }, [duration, onSubmit, titleKey, type]);

  return (
    <ImageBackground style={generalStyles.flex} source={backgroundImage}>
      {TimerItem}
    </ImageBackground>
  );
};
