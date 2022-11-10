import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import { Linking } from 'react-native';

import { isIOS } from '../../utils';

const onDisplayNotification = async (
  notification: FirebaseMessagingTypes.Notification,
) => {
  // Request permissions (required for iOS)
  await notifee.requestPermission();

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'notifications',
    name: 'Notification Channel',
  });

  // Display a notification
  await notifee.displayNotification({
    title: notification.title,
    body: notification.body,
    android: {
      channelId,
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: 'default',
      },
    },
  });
};

export const openDeviceNotificationSettings = async () => {
  if (isIOS) {
    Linking.openURL('app-settings:');
  } else {
    await notifee.openNotificationSettings();
  }
};

const onMessageHandler = async (
  remoteMessage: FirebaseMessagingTypes.RemoteMessage,
) => {
  const { notification } = remoteMessage;
  await onDisplayNotification(
    notification as FirebaseMessagingTypes.Notification,
  );
};

export const getDeviceToken = async () => {
  try {
    const token = await messaging().getToken();
    return token;
  } catch (e) {
    return null;
  }
};

export const initPushNotifications = () => {
  messaging().setBackgroundMessageHandler(onMessageHandler);
  messaging().onMessage(onMessageHandler);
};
