import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//Telas para o usuário Utilizar
import DataB from '../../screens/UserScreens/DataB'
import IMC from '../../screens/UserScreens/IMC'
import Trainings from '../../screens/Trainings'
import InfoTrainings from '../../screens/UserScreens/InfoTrainings'
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

/* const Lab = createMaterialTopTabNavigator(); */

const data = 'DataB';
const imc = 'IMC';
const training = 'Training';

const Tab = createBottomTabNavigator();
const Lab = createMaterialTopTabNavigator();
function Training({navigation}) {
  return (
    <Lab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { backgroundColor: '#FFFFFF' },
      tabBarActiveTintColor: '#FF0000',
        tabBarInactiveTintColor: '#000000',
        tabBarIndicatorStyle: {backgroundColor: '#FF0000'},
        tabBarPressColor: '#000'
    }}
  >
      <Lab.Screen name="Trainings" component={Trainings} />
      <Lab.Screen name="InfoTrainings" component={InfoTrainings} />
    </Lab.Navigator>
  );
}

export default function BottomNav({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName={Trainings}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {backgroundColor: '#FFFFFF'},
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;
          if (rn === imc) {
            iconName = focused ? 'calculator' : 'calculator';
          } else if (rn === data) {
            iconName = focused ? 'address-book' : 'address-book';
          } else if (rn === training) {
            iconName = focused ? 'fire-alt' : 'fire-alt';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveTintColor: '#F20000',
        tabBarInactiveTintColor: '#000000',
        tabBarLabel: '',
      })}>
      <Tab.Screen name="DataB" component={DataB} />
      <Tab.Screen name="IMC" component={IMC} />
      <Tab.Screen name="Training" component={Training} />
    </Tab.Navigator>
  );
}