import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import { ExtendedText, MainHeader } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { settingsSlice } from '../../../redux/slices';
import { generalStyles } from '../../../utils/styles';
import { MenuSwitchRow } from '../components';
import { INotificationSettingsScreenProps } from './NotificationSettings.types';
import { styles } from './NotificationSettings.styles';

export const NotificationSettingsScreen: React.FC<INotificationSettingsScreenProps> =
  () => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(
      useAppSelector(state => state.settings.settings.isNotificationsEnabled),
    );

    const setNotificationEnabled = useCallback(() => {
      setIsNotificationsEnabled(!isNotificationsEnabled);
      dispatch(
        settingsSlice.actions.setSettings({
          isNotificationsEnabled,
        }),
      );
    }, [isNotificationsEnabled, setIsNotificationsEnabled, dispatch]);

    return (
      <SafeAreaView style={generalStyles.whFlex}>
        <MainHeader
          // TODO: change to correct icon
          rightIcon={IMAGES.WHITE_BACK_ARROW}
        />
        <View style={styles.container}>
          <ExtendedText style={styles.title}>
            {t('screens.menu.notification_settings.title')}
          </ExtendedText>

          <MenuSwitchRow
            title={t(
              'screens.menu.notification_settings.is_notifications_enabled',
            )}
            isEnabled={!isNotificationsEnabled}
            setIsEnabled={setNotificationEnabled}
          />
        </View>
      </SafeAreaView>
    );
  };
