import React, { useCallback } from 'react';
import { IMAGES } from '../../../assets';

import { VerticalSwipeView } from '../../../components';
import { IGroundingStartScreenProps } from './GroundingStart.types';

export const GroundingStartScreen: React.FC<IGroundingStartScreenProps> = ({
  navigation,
}) => {
  const onSubmit = useCallback(() => {
    navigation.navigate('GroundingInstruction');
  }, [navigation]);

  return (
    <VerticalSwipeView
      image={IMAGES.LOGO}
      titleKey={'screens.parent_grounding_exercise.grounding_start.title'}
      subtitleKey={'screens.parent_grounding_exercise.grounding_start.subtitle'}
      aboutTitleKey={
        'screens.parent_grounding_exercise.grounding_start.about_title'
      }
      aboutSubtitleKey={
        'screens.parent_grounding_exercise.grounding_start.about_subtitle'
      }
      topBackground={{
        uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
      }}
      bottomBackground={{
        uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
      }}
      onSubmit={onSubmit}
    />
  );
};
