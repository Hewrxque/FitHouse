import React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import Logo from '../../assets/FitHouse.png';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Training({navigation}) {
  return (
    //Treinos
    <SafeAreaView style={styles.container}>
         <TouchableOpacity
        style={styles.arrow}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name={'arrow-back-outline'} size={40} color={'#ffffff'} />
      </TouchableOpacity>

      <View><Text style={styles.text1}>Qual o treino de hoje meu nobre?</Text></View>
        <View style={{padding: 20}}></View>
     <View>
      <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate('T_A')}>
        <Text style={styles.text}>
          Treino A
        </Text>
      </TouchableOpacity>
     </View>
     <View>
      <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate('T_B')}>
        <Text style={styles.text}>
          Treino B
        </Text>
      </TouchableOpacity>
     </View>
     <View>
      <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate('T_C')}>
        <Text style={styles.text}>
          Treino C
        </Text>
      </TouchableOpacity>
     </View>
     <View>
      <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate('T_D')}>
        <Text style={styles.text}>
          Treino D
        </Text>
      </TouchableOpacity>
     </View>
    </SafeAreaView>
  );
}
