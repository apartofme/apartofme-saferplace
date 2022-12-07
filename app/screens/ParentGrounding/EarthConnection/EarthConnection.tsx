import React, { useCallback } from 'react';

import { BACKGROUND_IMAGES } from '../../../assets';
import { GroundingAcknowledgement } from '../components';
import { IEarthConnectionScreenProps } from './EarthConnection.types';

export const EarthConnectionScreen: React.FC<IEarthConnectionScreenProps> = ({
  navigation,
}) => {
  const onSubmit = useCallback(() => {
    navigation.push('BringingRoots');
  }, [navigation]);

  return (
    <GroundingAcknowledgement
      title={'screens.parent_grounding_exercise.earth_connection.title'}
      buttonTitle={'buttons.start_timer'}
      backgroundImage={BACKGROUND_IMAGES.PARENT_GROUNDING_EARTH_CONNECTION}
      onSubmit={onSubmit}
      subtitle={
        'screens.parent_grounding_exercise.earth_connection.description'
      }
    />
  );
};
