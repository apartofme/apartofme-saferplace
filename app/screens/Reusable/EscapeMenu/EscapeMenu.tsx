import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native';

import { IMAGES } from '../../../assets';
import { ExtendedButton, ExtendedText } from '../../../components';
import { styles } from './EscapeMenu.styles';
import { IEscapeMenuScreenProps } from './EscapeMenu.types';

export const EscapeMenuScreen: React.FC<IEscapeMenuScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Image source={IMAGES.WHITE_BACK_ARROW} style={styles.backArrowImage} />
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        <ExtendedText preset="heading" style={styles.title}>
          {t('screens.escape_menu.title')}
        </ExtendedText>
        <ExtendedText preset="secondary-text" style={styles.subtitle}>
          {t('screens.escape_menu.description')}
        </ExtendedText>
        {/* TODO: change */}
        <ExtendedButton title="sbutton" style={styles.button} />
        <ExtendedButton title="sbutton" style={styles.button} />
        <ExtendedButton title="sbutton" style={styles.button} />
      </View>
    </SafeAreaView>
  );
};
