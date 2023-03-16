import React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import Logo from '../../assets/FitHouse.png';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Training({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
         <TouchableOpacity
        style={styles.arrow}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name={'arrow-back-outline'} size={40} color={'#ffffff'} />
      </TouchableOpacity>
     <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>
          Treino A
        </Text>
      </TouchableOpacity>
     </View>
     <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>
          Treino B
        </Text>
      </TouchableOpacity>
     </View>
     <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>
          Treino C
        </Text>
      </TouchableOpacity>
     </View>
     <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>
          Treino D
        </Text>
      </TouchableOpacity>
     </View>
    </SafeAreaView>
  );
}
