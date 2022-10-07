import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import { ExtendedButton, ExtendedText, MainHeader } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { settingsSlice } from '../../../redux/slices';
import { generalStyles } from '../../../utils/styles';
import { MenuSwitchRow } from '../components';
import { INotificationSettingsScreenProps } from './NotificationSettings.types';
import { styles } from './NotificationSettings.styles';
import { openDeviceNotificationSettings } from '../../../services/firebase';

export const NotificationSettingsScreen: React.FC<INotificationSettingsScreenProps> =
  ({ navigation }) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(
      useAppSelector(state => state.settings.settings.isNotificationsEnabled),
    );

    useEffect(() => {
      dispatch(
        settingsSlice.actions.setSettings({
          isNotificationsEnabled,
        }),
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isNotificationsEnabled]);

    const setNotificationEnabled = useCallback(() => {
      setIsNotificationsEnabled(!isNotificationsEnabled);
    }, [isNotificationsEnabled, setIsNotificationsEnabled]);

    return (
      <SafeAreaView style={generalStyles.flex}>
        <MainHeader
          // TODO: change to correct icon
          leftIcon={IMAGES.WHITE_BACK_ARROW}
          onLeftIconPress={navigation.goBack}
        />
        <View style={styles.container}>
          <ExtendedText style={styles.title}>
            {t('screens.menu.notification_settings.title')}
          </ExtendedText>

          <MenuSwitchRow
            title={t(
              'screens.menu.notification_settings.is_allow_notifications',
            )}
            isEnabled={isNotificationsEnabled}
            setIsEnabled={setNotificationEnabled}
          />
          <ExtendedButton
            title="To device settings"
            style={styles.button}
            onPress={openDeviceNotificationSettings}
          />
        </View>
      </SafeAreaView>
    );
  };
