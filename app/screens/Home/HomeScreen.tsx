import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { VerticalSwipeView } from '../../components';
import { generalStyles } from '../../utils/styles';
import { IHomeScreenProps } from './HomeScreen.props';

export const HomeScreen: React.FC<IHomeScreenProps> = () => {
  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <VerticalSwipeView
        titleKey={'1fsdfsd'}
        subtitleKey={'2fdsfsd'}
        aboutTitleKey={'3fsdfsdf'}
        aboutSubtitleKey={'4fsdfdsfsd'}
        image={0}
      />
    </SafeAreaView>
  );
};
