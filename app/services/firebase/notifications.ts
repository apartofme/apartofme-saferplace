import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import PushNotification from 'react-native-push-notification';

const onDisplayNotification = async (
  notification: FirebaseMessagingTypes.Notification,
) => {
  // Request permissions (required for iOS)
  await PushNotification.requestPermissions();

  // // Create a channel (required for Android)
  // const channelId = await notifee.createChannel({
  //   id: 'notifications',
  //   name: 'Notification Channel',
  // });

  // Display a notification
  PushNotification.localNotification({
    message: notification?.body as string,
    title: notification?.title,
    // channelId,
  });

  // PushNotification.presentLocalNotification({
  //   message: notification.body as string,
  //   title: notification.title,
  //   channelId,
  // });
};

const onMessageHandler = async (
  remoteMessage: FirebaseMessagingTypes.RemoteMessage,
) => {
  const { notification } = remoteMessage;
  console.log(notification);
  await onDisplayNotification(
    notification as FirebaseMessagingTypes.Notification,
  );
};

export const getDeviceToken = async () => {
  try {
    const token = await messaging().getToken();
    console.log(token);
    return token;
  } catch (e) {
    console.error(e);
    return null;
  }
};

// const getPushData = async (message: FirebaseMessagingTypes.RemoteMessage) => {
// PushNotification.localNotification({
//   message: message.notification?.body,
//   title: message.notification?.title,
// });
// };

export const initPushNotifications = () => {
  // requestFCMPermission();
  messaging().onMessage(onMessageHandler);
  messaging().setBackgroundMessageHandler(onMessageHandler);
  // const unsubMessaging = messaging().onMessage(onMessageHandler);
  // return unsubMessaging();
};
//   PushNotification.configure({
//     onNotification: notification => {
//       notification?.finish(PushNotificationIOS.FetchResult.NewData);
//     },
//     onRegistrationError: function (err) {
//       console.error(err.message, err);
//     },
//     // Permissions iOS only
//     permissions: {
//       alert: true,
//       badge: true,
//       sound: true,
//     },
//     requestPermissions: true,
//   });

// messaging().onMessage(getPushData);
// messaging().setBackgroundMessageHandler(getPushData);

export const requestUserPermission = async () => {
  await messaging().requestPermission();
};
