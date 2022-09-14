import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import { ExtendedText, MainHeader } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { settingsSlice } from '../../../redux/slices';
import { generalStyles } from '../../../utils/styles';
import { MenuSwitchRow } from '../components';
import { IAudioSettingsScreenProps } from './AudioSettings.types';
import { styles } from './AudioSettings.styles';
import _ from 'lodash';
import { IAudioSettings } from '../../../redux/types';
import {
  AUDIO_SETTINGS_MENU,
  IAudioSettingsMenuItemType,
} from './AudioSettings.data';

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
    <SafeAreaView style={generalStyles.flex}>
      <MainHeader
        leftIcon={IMAGES.WHITE_BACK_ARROW}
        onLeftIconPress={navigation.goBack}
      />
      <View style={styles.container}>
        <ExtendedText style={styles.title}>
          {t('screens.menu.audio_settings.title')}
        </ExtendedText>

        <View>
          {_.map(AUDIO_SETTINGS_MENU, item => (
            <View style={styles.menuSwitchContainer} key={`menu-${item.type}`}>
              <MenuSwitchRow
                title={item.title}
                isEnabled={audioSettings[item.type]}
                setIsEnabled={() => changeLocalNotificationSettings(item.type)}
              />
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};