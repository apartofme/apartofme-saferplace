import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { ExtendedText, MainHeader } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { settingsSlice } from '../../../redux/slices';
import { generalStyles } from '../../../utils/styles';
import { MenuSwitchRow } from '../components';
import { INotificationSettingsScreenProps } from './NotificationSettings.types';
import { styles } from './NotificationSettings.styles';
import { openDeviceNotificationSettings } from '../../../services/firebase';
import { SVG } from '../../../assets/svg';
import { BACKGROUND_IMAGES } from '../../../assets';

const WhiteBackArrowIcon = SVG.WhiteBackArrowIcon;

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
      <ImageBackground
        source={BACKGROUND_IMAGES.MENU}
        style={generalStyles.flex}>
        <SafeAreaView style={generalStyles.flex}>
          <MainHeader
            leftIcon={<WhiteBackArrowIcon />}
            onLeftIconPress={navigation.goBack}
          />
          <View style={styles.container}>
            <ExtendedText style={styles.title} preset="large-title">
              {t('screens.menu.notification_settings.title')}
            </ExtendedText>

            <View style={styles.menuSwitchContainer}>
              <MenuSwitchRow
                title={t(
                  'screens.menu.notification_settings.is_allow_notifications',
                )}
                isEnabled={isNotificationsEnabled}
                setIsEnabled={setNotificationEnabled}
              />
              <ExtendedText style={styles.subtitle} preset="secondary-text">
                {t('screens.menu.notification_settings.description')}
              </ExtendedText>
              <ExtendedText
                preset="secondary-text"
                style={[generalStyles.boldText, generalStyles.primaryOrange]}
                onPress={openDeviceNotificationSettings}>
                {t('labels.system_settings')}
              </ExtendedText>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  };
