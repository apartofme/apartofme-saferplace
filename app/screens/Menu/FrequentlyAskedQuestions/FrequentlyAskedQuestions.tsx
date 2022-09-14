import _ from 'lodash';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import { ExtendedText, MainHeader, SearchBox } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { FAQSectionList } from './components';
import { SEARCH_DEBOUNCE_DELAY } from './FrequentlyAskedQuestions.data';
import { IFrequentlyAskedQuestionsScreenProps } from './FrequentlyAskedQuestions.types';
import { styles } from './FrequentlyAskedQuestions.styles';

export const FrequentlyAskedQuestionsScreen: React.FC<IFrequentlyAskedQuestionsScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    const [searchText, setSearchText] = useState('');

    const delayedOnSearchChangeText = useMemo(
      () => _.debounce(setSearchText, SEARCH_DEBOUNCE_DELAY),
      [setSearchText],
    );

    return (
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
          title={t(
            'screens.menu.frequently_asked_questions_screen.header',
          ).toUpperCase()}
        />
        <View style={styles.container}>
          <ExtendedText style={styles.title}>
            {t('screens.menu.frequently_asked_questions_screen.title')}
          </ExtendedText>
          <View style={styles.searchBoxContainer}>
            <SearchBox onChangeText={delayedOnSearchChangeText} />
          </View>

          <View style={styles.listContainer}>
            <FAQSectionList filterValue={searchText} />
          </View>
        </View>
      </SafeAreaView>
    );
  };
