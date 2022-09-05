import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';
import { IMAGES } from '../../../assets';

import { ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { MenuButton } from '../components';
import {
  GrownUpsGuideItemType,
  GROWN_UPS_GUIDE_ITEMS,
  IGrownUpsGuideItem,
} from './GrownUpsGuide.data';
import { IGrownUpsGuideScreenProps } from './GrownUpsGuide.props';
import { styles } from './GrownUpsGuide.styles';

export const GrownUpsGuideScreen: React.FC<IGrownUpsGuideScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const onMenuItemPress = useCallback((item: IGrownUpsGuideItem) => {
    switch (item.type) {
      case GrownUpsGuideItemType.AboutCharms:
        // navigation.navigate('')
        break;
      case GrownUpsGuideItemType.AboutCharms:
        // navigation.navigate('')
        break;
      case GrownUpsGuideItemType.AboutCharms:
        // navigation.navigate('')
        break;
      default:
        break;
    }
  }, []);

  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <MainHeader leftIcon={IMAGES.WHITE_BACK_ARROW} />
      <View style={styles.container}>
        <ExtendedText style={styles.title}>
          {t('screens.menu.grown_ups_guide.title')}
        </ExtendedText>
        <View>
          {_.map(GROWN_UPS_GUIDE_ITEMS, item => {
            return (
              <MenuButton
                title={item.title}
                onPress={() => onMenuItemPress(item)}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};
