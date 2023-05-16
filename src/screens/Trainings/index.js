import React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import Logo from '../../assets/FitHouse.png';
import styles from './styles';
import BottomNav from '../../components/BottonNav';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Training({navigation}) {
  return (
    //Treinos
    <SafeAreaView style={styles.container}>
      <View style={styles.content1}>
      <Text style={styles.text1}>Qual o treino de hoje meu nobre?</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('T_A')}>
          <Text style={styles.text}>Treino A</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('T_B')}>
          <Text style={styles.text}>Treino B</Text>
        </TouchableOpacity>
    
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('T_C')}>
          <Text style={styles.text}>Treino C</Text>
        </TouchableOpacity>
      
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('T_D')}>
          <Text style={styles.text}>Treino D</Text>
        </TouchableOpacity>

      </View>
      <View>
          <BottomNav activepage={'Training'} navigation={navigation} />
        </View>
    </SafeAreaView>
  );
}
