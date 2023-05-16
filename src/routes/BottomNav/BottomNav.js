import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//Telas para o usuário Utilizar
import DataB from '../../screens/UserScreens/DataB'
import IMC from '../../screens/UserScreens/IMC'
import Trainings from '../../screens/Trainings'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

/* const Lab = createMaterialTopTabNavigator(); */

const data = 'DataB';
const imc = 'IMC';
const trainings = 'Trainings';

const Tab = createBottomTabNavigator();
/* 
function TopTab({navigation}) {
  return (
    <Lab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { backgroundColor: '#00FF00' },
      tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#000000',
        tabBarIndicatorStyle: {backgroundColor: '#fff'},
        tabBarPressColor: '#000'
    }}
  >
      <Lab.Screen name="Player" component={Player} />
      <Lab.Screen name="Playlist" component={MusicsPlaylist} />
    </Lab.Navigator>
  );
}
 */
export default function BottomTab({navigation}) {
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
            iconName = focused ? 'headphones' : 'headphones';
          } else if (rn === data) {
            iconName = focused ? 'music-box-multiple' : 'music-box-multiple';
          } else if (rn === trainings) {
            iconName = focused ? 'playlist-play' : 'playlist-play';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveTintColor: '#00FF00',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarLabel: '',
      })}>
      <Tab.Screen name="DataB" component={DataB} />
      <Tab.Screen name="IMC" component={IMC} />
      <Tab.Screen name="Trainings" component={Trainings} />
    </Tab.Navigator>
  );
}