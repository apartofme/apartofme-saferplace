import 'react-native-gesture-handler';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';

import RootNavigator from './app/navigation/rootNavigator';
import { persistor, store } from './app/redux';
import { PersistGate } from 'redux-persist/integration/react';
import { initPushNotifications } from './app/services/firebase';
import { I18nextProvider } from 'react-i18next';
import i18n from './app/services/localization';

enableScreens();
initPushNotifications();

const App: React.FC = () => (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  </I18nextProvider>
);

export default App;
