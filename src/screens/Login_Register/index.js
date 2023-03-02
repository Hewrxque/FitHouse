import React from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Logo from '../../assets/FitHouse.png';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
export default function Login_Register({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
       <View style={{ paddingRight: 300 }}>
          <TouchableOpacity onPress={() => {
            navigation.goBack();
          }}>
            <Icon
              name={'arrow-back-outline'}
              size={40}
              color={'#ffffff'}
            />
          </TouchableOpacity>
        </View>
      <View style={{padding: 50}}>
        <Image style={styles.image} source={Logo} />
      </View>
      
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.button2}>
          <Text style={styles.text2}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
