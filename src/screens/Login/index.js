import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Logo from '../../assets/FitHouse.png';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingRight: 300}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name={'arrow-back-outline'} size={40} color={'#ffffff'} />
        </TouchableOpacity>
      </View>
      <Image style={styles.image} source={Logo} />
      <View>
        <Text style={styles.text2}>Email:</Text>
        <TextInput style={styles.input} placeholder="example@gmail.com" />
      </View>
      <View>
        <Text style={styles.text2}>Senha:</Text>
        <TextInput style={styles.input} placeholder="Digite sua senha" />
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Fazer Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
