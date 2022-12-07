import React, { useCallback, useMemo, useState } from 'react';

import { BACKGROUND_IMAGES } from '../../../assets';
import { TWENTY_SECONDS } from '../../../constants/time';
import { ContentView } from './components';
import { FEET_EXERCISE_ITEMS } from './StampFeet.data';
import { IStampFeetScreenProps } from './StampFeet.types';

export const StampFeetScreen: React.FC<IStampFeetScreenProps> = ({
  navigation,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSubmitPress = useCallback(() => {
    if (currentIndex < 2) {
      return setCurrentIndex(() => currentIndex + 1);
    }
    navigation.push('GroundingTimerInstruction', {
      data: {
        titleKey:
          'screens.parent_grounding_exercise.first_timer_instruction.title',
        subtitleKey:
          'screens.parent_grounding_exercise.first_timer_instruction.description',
        acknowledgementTitleKey:
          'screens.parent_grounding_exercise.first_timer_acknowledgement.title',
        acknowledgementSubtitleKey:
          'screens.parent_grounding_exercise.first_timer_acknowledgement.description',
        nextRouteName: 'MinuteTimerInstruction',
        duration: TWENTY_SECONDS,
      },
    });
  }, [currentIndex, navigation]);

  const onBackArrowPress = useCallback(() => {
    if (currentIndex > 0) {
      return setCurrentIndex(() => currentIndex - 1);
    }
    navigation.goBack();
  }, [currentIndex, navigation]);

  const data = useMemo(() => FEET_EXERCISE_ITEMS[currentIndex], [currentIndex]);

  return (
    <ContentView
      title={data.title}
      subtitle={data.subtitle}
      isButtonArrow
      buttonTitle={data.buttonTitle}
      backgroundImage={BACKGROUND_IMAGES[data.background]}
      onBackArrowPress={onBackArrowPress}
      onSubmit={onSubmitPress}
    />
  );
};
