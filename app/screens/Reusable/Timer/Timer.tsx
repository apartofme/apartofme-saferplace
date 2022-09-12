import _ from 'lodash';
import React, { useMemo } from 'react';

import { ITimerScreenProps, TimerType } from './Timer.types';
import { ImageBackground } from 'react-native';
import { generalStyles } from '../../../utils/styles';
import { Title, TitleButton } from './components';

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
      case TimerType.Title:
        return (
          <Title duration={duration} onSubmit={onSubmit} titleKey={titleKey} />
        );
      case TimerType.TitleButton:
        return (
          <TitleButton
            duration={duration}
            onSubmit={onSubmit}
            titleKey={titleKey}
          />
        );
      default:
        return <></>;
    }
  }, [duration, onSubmit, titleKey, type]);

  return (
    <ImageBackground style={generalStyles.flex} source={backgroundImage}>
      {TimerItem}
    </ImageBackground>
  );
};
