import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import NavigationScreen from './src/navigator/StackNavigation';
import {Provider} from 'react-redux';
import store from './src/store/index';
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
