import _ from 'lodash';
import React from 'react';

import { IMAGES } from '../../../assets';
import { VerticalSwipeView } from '../../../components';
import { IGroundingStartScreenProps } from './GroundingStart.types';

export const GroundingStartScreen: React.FC<IGroundingStartScreenProps> =
  ({}) => {
    return (
      // TODO: change to correct background
      <VerticalSwipeView
        image={IMAGES.LOGO}
        titleKey="screens.parent_grounding_exercise.grounding_start.title"
        subtitleKey="screens.parent_grounding_exercise.grounding_start.subtitle"
        aboutTitleKey="screens.parent_grounding_exercise.grounding_start.about_title"
        aboutSubtitleKey="screens.parent_grounding_exercise.grounding_start.about_subtitle"
        buttonTitleKey="buttons.start"
        topBackground={{
          uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
        }}
        bottomBackground={{
          uri: 'https://i0.wp.com/artisthue.com/wp-content/uploads/2020/12/Aesthetic-Full-Moon-Wallpaper.jpg?resize=576%2C1024&ssl=1',
        }}
        onSubmit={_.noop}
      />
    );
  };
