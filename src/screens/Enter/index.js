import React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import Logo from '../../assets/FitHouse.png';
import styles from './styles';
export default function Enter({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding: 50}}>
        <Image style={styles.image} source={Logo} />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Login_Register')} style={styles.button}>
          <Text style={styles.text}>COMEÇAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
