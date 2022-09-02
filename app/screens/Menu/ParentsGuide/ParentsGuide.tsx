import _ from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native';

import { IMAGES } from '../../../assets';
import { MainHeader, SearchBox } from '../../../components';
import { FAQSectionList } from './components';
import { SEARCH_DEBOUNCE_DELAY } from './ParentsGuide.data';
import { IParentsGuideScreenProps } from './ParentsGuide.props';

export const ParentsGuideScreen: React.FC<IParentsGuideScreenProps> = ({
  navigation,
}) => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // TODO: filter logic for FAQ questions
    console.log('here we are!', searchText);
  }, [searchText]);

  const delayedOnSearchChangeText = useMemo(
    () => _.debounce(setSearchText, SEARCH_DEBOUNCE_DELAY),
    [setSearchText],
  );

  return (
    <SafeAreaView>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />

      <SearchBox onChangeText={delayedOnSearchChangeText} />

      <FAQSectionList filterValue={searchText} />
    </SafeAreaView>
  );
};
