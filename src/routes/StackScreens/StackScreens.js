import React from 'react';

import Enter from '../../screens/setScreens/Enter';
import Login_Register from '../../screens/setScreens/Login';
import Login from '../../screens/setScreens/Login';
import Register from '../../screens/setScreens/Register';
import Check_Email from '../../screens/setScreens/Check_Email';
import Reset_Password from '../../screens/setScreens/Reset_Password';
import FAQ from '../../screens/setScreens/FAQ';

import Menu from '../../screens/Menu';
import IMC from '../../screens/UserScreens/IMC';
import DataB from '../../screens/UserScreens/DataB';

import Training from '../../screens/Trainings';
import T_A from '../../screens/Trainings/A';
import T_B from '../../screens/Trainings/B';
import T_C from '../../screens/Trainings/C';
import T_D from '../../screens/Trainings/D';

import BottomNav from '../BottomNav/BottomNav';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const { Navigator, Screen } = createNativeStackNavigator();



export default function StackScreen({ }) {
  return (
    <Navigator initialRouteName='Enter' screenOptions={{ headerShown: false }}>
       <Screen name="Enter" component={Enter} />
      <Screen name="Login_Register" component={Login_Register} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="Check_Email" component={Check_Email} />
      <Screen name="Reset_Password" component={Reset_Password} />
      <Screen name="FAQ" component={FAQ} />
      <Screen name="Menu" component={Menu} />
      <Screen name="IMC" component={IMC} />
      <Screen name="DataB" component={DataB} />
      <Screen name="Training" component={Training} />
      <Screen name="T_A" component={T_A} />
      <Screen name="T_B" component={T_B} />
      <Screen name="T_C" component={T_C} />
      <Screen name="T_D" component={T_D} />
      <Screen name="BottomNav" component={BottomNav} />
    </Navigator>
  );
}