import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
const DATA = [
  {
    name: 'Treinos',
    icon: 'fire',
    page: 'Training'
  },
  {
    name: 'Dados',
    icon: 'address-book',
    page: 'DataB'
  },
  {
    name: 'IMC',
    icon: 'calculator',
    page: 'IMC'
  },
  {
    name: 'F.A.Q',
    icon: 'file-alt',
    page: 'FAQ'
  },
];
export default function Menu({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.contentTitle}>
        <Text style={styles.text}>Bom Treino</Text>
        </View>
        <View style={styles.content}>
      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <View style={{padding: 10}}>
              <TouchableOpacity style={styles.button}
               onPress={() => {
                navigation.navigate(item.page);
              }}>
                <Icon name={item.icon} size={40} color={'#FFFFFF'} />
                <Text style={styles.text2}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      </View>
    </SafeAreaView>
  );
}
