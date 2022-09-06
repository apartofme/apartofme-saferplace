import _ from 'lodash';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';
import { IMAGES } from '../../../assets';

import { ExtendedText, MainHeader } from '../../../components';
import { generalStyles } from '../../../utils/styles';
import { MenuButton } from '../components';
import { IButtonsMenuItem } from './ButtonsMenu.data';
import { IButtonsMenuScreenProps } from './ButtonsMenu.props';
import { styles } from './ButtonsMenu.styles';

export const ButtonsMenuScreen: React.FC<IButtonsMenuScreenProps> = ({
  navigation,
  route,
}) => {
  const { data, titleKey, subtitleKey } = route.params;

  const { t } = useTranslation();

  // TODO: change
  const onMenuItemPress = useCallback((item: IButtonsMenuItem) => {}, []);

  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <View style={styles.container}>
        <ExtendedText style={styles.title}>{t(titleKey)}</ExtendedText>
        {subtitleKey && <ExtendedText>{t(subtitleKey)}</ExtendedText>}
        <View>
          {_.map(data, item => {
            return (
              <MenuButton
                key={`main-menu-${item.type}`}
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
