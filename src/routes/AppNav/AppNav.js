import React from 'react';
import Stack from '../StackScreens/StackScreens';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'react-native';
export default function AppNav() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={"#404040"}/>
      <Stack />
    </NavigationContainer>
  );
}