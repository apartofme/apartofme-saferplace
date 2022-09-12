import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View, FlatList } from 'react-native';

import { IMAGES } from '../../../assets';
import { ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { MenuButton } from '../components';
import { IHelpSupportScreenProps } from './HelpSupport.types';
import { styles } from './HelpSupport.styles';
import { useSpecificKeyExtractor } from '../../../hooks';
import { IButtonsMenuItem } from '../components/MenuButton/MenuButton.data';
import { HELP_SUPPORT_MENU_ITEM } from './HelpSupport.data';

export const HelpSupportScreen: React.FC<IHelpSupportScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const renderItem = useCallback(
    ({ item }: { item: IButtonsMenuItem }) => {
      const onMenuItemPress = () => {
        navigation.navigate(item.route);
      };
      return <MenuButton title={item.titleKey} onPress={onMenuItemPress} />;
    },
    [navigation],
  );

  const keyExtractor = useSpecificKeyExtractor<IButtonsMenuItem>(
    'post-thread-list-child-key',
    'route',
  );

  return (
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <View style={styles.container}>
        <ExtendedText style={styles.title}>
          {t('screens.menu.help_support.title')}
        </ExtendedText>

        <FlatList
          style={styles.list}
          data={HELP_SUPPORT_MENU_ITEM}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
