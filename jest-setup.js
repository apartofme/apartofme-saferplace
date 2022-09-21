/* eslint-disable no-undef */

import * as ReactNative from 'react-native';
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

// notifee
jest.doMock('react-native', () => {
  return Object.setPrototypeOf(
    {
      Platform: {
        OS: 'android',
        select: () => {},
      },
      NativeModules: {
        ...ReactNative.NativeModules,
        NotifeeApiModule: {
          addListener: jest.fn(),
          eventsAddListener: jest.fn(),
          eventsNotifyReady: jest.fn(),
        },
      },
    },
    ReactNative,
  );
});
