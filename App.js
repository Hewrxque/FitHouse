import React from 'react';
import Enter from './src/screens/Enter';
import Login_Register from './src/screens/Login_Register';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Menu from './src/screens/Menu';
import Training from './src/screens/Training';
import IMC from './src/screens/IMC';
import FAQ from './src/screens/FAQ';
import DataB from './src/screens/DataB';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Enter">
        <Stack.Screen
          name="Enter"
          component={Enter}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login_Register"
          component={Login_Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
          <Stack.Screen
          name="FAQ"
          component={FAQ}
          options={{
            headerShown: false,
          }}
        />
          <Stack.Screen
          name="DataB"
          component={DataB}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
          <Stack.Screen
          name="IMC"
          component={IMC}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="Training"
          component={Training}
          options={{
            headerShown: false,
          }}
        />
          <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
