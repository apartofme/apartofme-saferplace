import React, { useCallback } from 'react';

import { VerticalSwipeView } from '../../../../components';
import { IGroundingStartScreenProps } from './GroundingStart.types';

export const GroundingStartScreen: React.FC<IGroundingStartScreenProps> = ({
  navigation,
  route,
}) => {
  const {
    image,
    titleKey,
    subtitleKey,
    aboutTitleKey,
    aboutSubtitleKey,
    topBackground,
    bottomBackground,
    nextRouteName,
  } = route.params.data;

  const onSubmit = useCallback(() => {
    navigation.navigate(nextRouteName);
  }, [navigation, nextRouteName]);

  return (
    <VerticalSwipeView
      image={image}
      titleKey={titleKey}
      subtitleKey={subtitleKey}
      aboutTitleKey={aboutTitleKey}
      aboutSubtitleKey={aboutSubtitleKey}
      topBackground={topBackground}
      bottomBackground={bottomBackground}
      onSubmit={onSubmit}
    />
  );
};
