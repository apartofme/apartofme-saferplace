import analytics from '@react-native-firebase/analytics';

import { FirebaseAnalyticsEventsType } from './types';

export const trackButtonPress = (buttonName: string) => {
  analytics().logEvent(FirebaseAnalyticsEventsType.ButtonPress, {
    button_name: buttonName,
  });
};

export const trackScreenView = (screenName: string, screenClass: string) => {
  analytics().logScreenView({
    screen_name: screenName,
    screen_class: screenClass,
  });
};

export const trackEvent = (
  eventName: string,
  payload: Record<string, string>,
) => {
  analytics().logEvent(eventName, payload);
};
