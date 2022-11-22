import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  SafeAreaView,
  View,
  ImageBackground,
  SectionList,
  SectionListData,
  SectionListRenderItem,
} from 'react-native';

import { ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { IFurtherSupportScreenProps } from './FurtherSupport.types';
import { styles } from './FurtherSupport.styles';
import {
  FURTHER_SUPPORT_MENU_ITEMS,
  IFurtherSupportMenuItem,
} from './FurtherSupport.data';
import { SVG } from '../../../assets/svg';
import { BACKGROUND_IMAGES } from '../../../assets';
import { FAQListItem, IMenuItem } from '../FrequentlyAskedQuestions';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

export const FurtherSupportScreen: React.FC<IFurtherSupportScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const renderItem: SectionListRenderItem<IMenuItem, IFurtherSupportMenuItem> =
    useCallback(({ item }) => {
      return <FAQListItem data={item} />;
    }, []);

  const renderSectionHeader = useCallback(
    ({
      section,
    }: {
      section: SectionListData<IMenuItem, IFurtherSupportMenuItem>;
    }) => {
      return (
        <ExtendedText preset="body-bold" style={styles.sectionTitle}>
          {section.titleKey}
        </ExtendedText>
      );
    },
    [],
  );

  return (
    <ImageBackground source={BACKGROUND_IMAGES.MENU} style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={navigation.goBack}
        />
        <View style={styles.container}>
          <ExtendedText style={styles.title} preset="large-title">
            {t('screens.menu.further_support.title')}
          </ExtendedText>

          <SectionList
            sections={FURTHER_SUPPORT_MENU_ITEMS}
            renderSectionHeader={renderSectionHeader}
            renderItem={renderItem}
            style={styles.list}
            stickySectionHeadersEnabled={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
