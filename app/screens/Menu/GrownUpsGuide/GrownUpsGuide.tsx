import _ from 'lodash';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { ExtendedText, MainHeader } from '../../../components';
import { NavigationRouteNames } from '../../../navigation/stacks/mergedParams';
import { generalStyles } from '../../../utils/styles';
import { MenuButton } from '../components';
import { GROWN_UP_GUIDE_ITEMS } from './GrownUpsGuide.data';
import { IGrownUpsGuideScreenProps } from './GrownUpsGuide.types';
import { styles } from './GrownUpsGuide.styles';
import { SVG_ICONS } from '../../../assets/svg';
import { BACKGROUND_IMAGES } from '../../../assets';

const WhiteBackArrowIcon = SVG_ICONS.WhiteBackArrowIcon;

export const GrownUpsGuideScreen: React.FC<IGrownUpsGuideScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const onMenuItemPress = useCallback(
    (item: NavigationRouteNames) => {
      navigation.navigate(item);
    },
    [navigation],
  );

  return (
    <ImageBackground source={BACKGROUND_IMAGES.MENU} style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={navigation.goBack}
        />
        <View style={styles.container}>
          <ExtendedText preset="large-title" style={styles.title}>
            {t('screens.menu.grown_ups_guide.title')}
          </ExtendedText>
          <View>
            {_.map(GROWN_UP_GUIDE_ITEMS, item => (
              <View
                style={styles.menuButtonContainer}
                key={`grown-ups-${item.route}`}>
                <MenuButton
                  title={item.titleKey}
                  onPress={() => onMenuItemPress(item.route)}
                />
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
