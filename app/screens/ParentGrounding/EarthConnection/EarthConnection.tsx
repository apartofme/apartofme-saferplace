import React, { useCallback } from 'react';

import { IMAGES } from '../../../assets';
import { GroundingAcknowledgement } from '../components';
import { IEarthConnectionScreenProps } from './EarthConnection.types';

export const EarthConnectionScreen: React.FC<IEarthConnectionScreenProps> = ({
  navigation,
}) => {
  const onSubmit = useCallback(() => {
    navigation.push('GroundingTimer', { nextRouteName: 'ImagineTreeRoot' });
  }, [navigation]);

  return (
    <GroundingAcknowledgement
      title={'screens.parent_grounding_exercise.earth_connection.title'}
      buttonTitle={'buttons.start_timer'}
      image={IMAGES.LOGO}
      backgroundImage={IMAGES.WHITE_PENCIL}
      onSubmit={onSubmit}
    />
  );
};
