import React from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Logo from '../../../assets/FitWorkout.png';
import styles from './styles';
export default function Login_Register({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={Logo} />
        </View>
        <View style={styles.content1}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.button}>
          <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={styles.button2}>
          <Text style={styles.text2}>CADASTRAR</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
}
