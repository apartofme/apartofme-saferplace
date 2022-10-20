import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { FAQSectionList } from './components';
import { IFrequentlyAskedQuestionsScreenProps } from './FrequentlyAskedQuestions.types';
import { styles } from './FrequentlyAskedQuestions.styles';
import { SVG_ICONS } from '../../../assets/svg';
import { BACKGROUND_IMAGES } from '../../../assets';

const WhiteBackArrowIcon = SVG_ICONS.WhiteBackArrowIcon;

export const FrequentlyAskedQuestionsScreen: React.FC<IFrequentlyAskedQuestionsScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

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

            <View style={styles.listContainer}>
              <FAQSectionList />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  };
