import React from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Logo from '../../assets/FitHouse.png';
import styles from './styles';
export default function Register() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding: 50}}>
        <Image style={styles.image} source={Logo} />
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 20}}>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.text2}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
