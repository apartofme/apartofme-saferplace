import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { IMAGES } from '../../../assets';
import { ExtendedText, MainHeader } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { settingsSlice } from '../../../redux/slices';
import { generalStyles } from '../../../utils/styles';
import { MenuSwitch } from '../components';
import { INotificationSettingsScreenProps } from './NotificationSettings.props';
import { styles } from './NotificationSettings.styles';

export const NotificationSettingsScreen: React.FC<INotificationSettingsScreenProps> =
  () => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const [isNotificationAllow, setIsNotificationAllow] = useState(
      useAppSelector(state => state.settings.isNotificationAllow),
    );

    const setNotificationAllow = useCallback(() => {
      setIsNotificationAllow(!isNotificationAllow);
      dispatch(
        settingsSlice.actions.setNotificationAllow({
          isNotificationAllow: !isNotificationAllow,
        }),
      );
    }, [isNotificationAllow, setIsNotificationAllow, dispatch]);

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

          <MenuSwitch
            title={t('screens.menu.notification_settings.allow_notifications')}
            isEnabled={isNotificationAllow}
            setIsEnabled={setNotificationAllow}
          />
        </View>
      </SafeAreaView>
    );
  };
