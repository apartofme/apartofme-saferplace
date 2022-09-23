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
    <VerticalSwipeView
      image={IMAGES.LOGO}
      titleKey="screens.onboarding.acknowledgement.title"
      topBackground={IMAGES.WHITE_BACK_ARROW}
      bottomBackground={IMAGES.WHITE_PENCIL}
      onSubmit={onNextPress}
    />
  );
};
