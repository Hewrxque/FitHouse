import React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import Logo from '../../assets/FitHouse.png';
import styles from './styles';
export default function Enter({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={Logo} />
      <View style={{padding: 10}}/>
        <TouchableOpacity onPress={() => navigation.navigate('Training')} style={styles.button}>
          <Text style={styles.text}>COMEÇAR</Text>
        </TouchableOpacity>
    
      </View>
    </SafeAreaView>
  );
}
