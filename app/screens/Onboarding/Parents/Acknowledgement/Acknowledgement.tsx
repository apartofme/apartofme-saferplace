import React, { useCallback } from 'react';

import { IMAGES } from '../../../../assets';
import { VerticalSwipeView } from '../../../../components';
import { IAcknowledgementScreenProps } from './Acknowledgement.types';

export const AcknowledgementScreen: React.FC<IAcknowledgementScreenProps> = ({
  navigation,
}) => {
  const onNextPress = useCallback(() => {
    navigation.navigate('OnboardingCarousel');
  }, [navigation]);

  return (
    // TODO: change to correct background
    <VerticalSwipeView
      image={IMAGES.LOGO}
      titleKey="screens.onboarding.acknowledgement.title"
      topBackground={{
        uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
      }}
      bottomBackground={{
        uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
      }}
      onSubmit={onNextPress}
    />
  );
};
