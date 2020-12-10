/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
} from 'react-native';
import {Provider} from 'react-redux'
import {store} from './Store/configureStore'
import { NavigationContainer } from '@react-navigation/native';
import {WelcomeScreen} from './Screens/WelcomeScreen'

const App = () => {
  return (
    <Provider store={store}>
        <NavigationContainer>
            <StatusBar barStyle="dark-content" />
            <WelcomeScreen/> 
        </NavigationContainer>
    </Provider>
  );
};



export default App;
