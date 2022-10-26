import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, ImageBackground, SafeAreaView, View } from 'react-native';

import { ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { FAQListItem } from './components';
import { IFrequentlyAskedQuestionsScreenProps } from './FrequentlyAskedQuestions.types';
import { styles } from './FrequentlyAskedQuestions.styles';
import { SVG } from '../../../assets/svg';
import { BACKGROUND_IMAGES } from '../../../assets';
import { ASKED_QUESTIONS, IMenuItem } from './FrequentlyAskedQuestions.data';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const FrequentlyAskedQuestionsScreen: React.FC<IFrequentlyAskedQuestionsScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    const renderItem = useCallback(({ item }: { item: IMenuItem }) => {
      return <FAQListItem data={item} />;
    }, []);

    return (
      <ImageBackground
        source={BACKGROUND_IMAGES.MENU}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <MainHeader
            leftIcon={<WhiteBackArrowIcon />}
            onLeftIconPress={navigation.goBack}
          />
          <View style={styles.container}>
            <ExtendedText style={styles.title} preset="large-title">
              {t('screens.menu.frequently_asked_questions.title')}
            </ExtendedText>

            <FlatList
              data={ASKED_QUESTIONS}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              style={generalStyles.flex}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  };
