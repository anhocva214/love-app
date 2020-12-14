/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screen
import Login from './Components/Screens/Login'
import MapContainer from './Components/Screens/Map'

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="MapScreen" component={MapContainer} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};


export default App;
