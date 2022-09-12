import _ from 'lodash';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import { ExtendedText, MainHeader } from '../../../components';
import { NavigationRouteNames } from '../../../navigation/stacks/mergedParams';
import { generalStyles } from '../../../utils/styles';
import { MenuButton } from '../components';
import { GROWN_UP_GUIDE_ITEMS } from './GrownUpsGuide.data';
import { IGrownUpsGuideScreenProps } from './GrownUpsGuide.types';
import { styles } from './GrownUpsGuide.styles';

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
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <View style={styles.container}>
        <ExtendedText style={styles.title}>
          {t('screens.menu.grown_ups_guide.title')}
        </ExtendedText>
        <View>
          {_.map(GROWN_UP_GUIDE_ITEMS, item => {
            return (
              <MenuButton
                key={`main-menu-${item.route}`}
                title={item.titleKey}
                onPress={() => onMenuItemPress(item.route)}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};
