import _ from 'lodash';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { ExtendedText, MainHeader } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { settingsSlice } from '../../../redux/slices';
import { generalStyles } from '../../../utils/styles';
import { MenuSwitchRow } from '../components';
import { IAudioSettingsScreenProps } from './AudioSettings.types';
import { styles } from './AudioSettings.styles';
import { IAudioSettings } from '../../../redux/types';
import {
  AUDIO_SETTINGS_MENU,
  IAudioSettingsMenuItemType,
} from './AudioSettings.data';
import { SVG_ICONS } from '../../../assets/svg';
import { BACKGROUND_IMAGES } from '../../../assets';

const WhiteBackArrowIcon = SVG_ICONS.WhiteBackArrowIcon;

export const AudioSettingsScreen: React.FC<IAudioSettingsScreenProps> = ({
  navigation,
}) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const [audioSettings, setAudioSettings] = useState(
    useAppSelector(
      state => state.settings.settings.audioSettings as IAudioSettings,
    ),
  );

  const changeLocalNotificationSettings = useCallback(
    (itemId: IAudioSettingsMenuItemType) => {
      audioSettings &&
        setAudioSettings({
          ...audioSettings,
          [itemId]: !audioSettings[itemId],
        });
      dispatch(
        settingsSlice.actions.setSettings({
          audioSettings: { ...audioSettings, [itemId]: !audioSettings[itemId] },
        }),
      );
    },
    [audioSettings, setAudioSettings, dispatch],
  );

  return (
    <ImageBackground
      source={BACKGROUND_IMAGES.MENU_BACKGROUND}
      style={generalStyles.flex}>
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          leftIcon={<WhiteBackArrowIcon />}
          onLeftIconPress={navigation.goBack}
        />
        <View style={styles.container}>
          <ExtendedText style={styles.title} preset="large-title">
            {t('screens.menu.audio_settings.title')}
          </ExtendedText>

          <View>
            {_.map(AUDIO_SETTINGS_MENU, item => (
              <View
                style={styles.menuSwitchContainer}
                key={`menu-${item.type}`}>
                <MenuSwitchRow
                  title={item.title}
                  isEnabled={audioSettings[item.type]}
                  setIsEnabled={() =>
                    changeLocalNotificationSettings(item.type)
                  }
                />
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
