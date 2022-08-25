import 'react-native-gesture-handler';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';

import RootNavigator from './app/navigation/rootNavigator';
import { persistor, store } from './app/redux';
import { PersistGate } from 'redux-persist/integration/react';

enableScreens();

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RootNavigator />
    </PersistGate>
  </Provider>
);

export default App;
