import React from 'react';
import Enter from './src/screens/Enter';
import Login_Register from './src/screens/Login_Register';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Menu from './src/screens/Menu';
import Training from './src/screens/Training';
import IMC from './src/screens/IMC';
import FAQ from './src/screens/FAQ';
import Check_Email from './src/screens/Check_Email';
import Reset_Password from './src/screens/Reset_Password';
import DataB from './src/screens/DataB';
import T_A from './src/screens/Trainings/A';
import T_B from './src/screens/Trainings/B';
import T_C from './src/screens/Trainings/C';
import T_D from './src/screens/Trainings/D';
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
            headerShown: true,
            headerTransparent: true,
            title: '',
            headerTintColor: '#00FF19',
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: '',
            headerTintColor: '#00FF19',
          }}
        />
        <Stack.Screen
          name="Check_Email"
          component={Check_Email}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: '',
            headerTintColor: '#00FF19',
          }}
        />
        <Stack.Screen
          name="Reset_Password"
          component={Reset_Password}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: '',
            headerTintColor: '#00FF19',
          }}
        />
        <Stack.Screen
          name="FAQ"
          component={FAQ}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: '',
            headerTintColor: '#00FF19',
          }}
        />
        <Stack.Screen
          name="DataB"
          component={DataB}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: '',
            headerTintColor: '#00FF19',
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: '',
            headerTintColor: '#00FF19',
          }}
        />
        <Stack.Screen
          name="IMC"
          component={IMC}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: '',
            headerTintColor: '#00FF19',
          }}
        />
        <Stack.Screen
          name="Training"
          component={Training}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: '',
            headerTintColor: '#00FF19',
          }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="T_A"
          component={T_A}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: '',
            headerTintColor: '#00FF19',
          }}
        />
        <Stack.Screen
          name="T_B"
          component={T_B}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: '',
            headerTintColor: '#00FF19',
          }}
        />
        <Stack.Screen
          name="T_C"
          component={T_C}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: '',
            headerTintColor: '#00FF19',
          }}
        />
        <Stack.Screen
          name="T_D"
          component={T_D}
          options={{
            headerShown: true,
            headerTransparent: true,
            title: '',
            headerTintColor: '#00FF19',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
