import analytics from '@react-native-firebase/analytics';

import { FirebaseAnalyticsEventsType } from './types';

export const trackButtonPress = (buttonName: string) => {
  analytics().logEvent(FirebaseAnalyticsEventsType.ButtonPress, {
    button_name: buttonName,
  });
};
