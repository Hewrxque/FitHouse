import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Logo from '../../assets/FitHouse.png';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Register({navigation}) {
  return (
    <ScrollView style={{height: '100%'}}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name={'arrow-back-outline'} size={40} color={'#ffffff'} />
        </TouchableOpacity>

        <Image style={styles.image} source={Logo} />
        <View style={{paddingTop: 100}}>
          <View>
            <Text style={styles.text2}>Nome de Usuário</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite um nome de usuário"
            />
          </View>
          <View>
            <Text style={styles.text2}>Email:</Text>
            <TextInput style={styles.input} placeholder="example@gmail.com" />
          </View>
          <View>
            <Text style={styles.text2}>Senha:</Text>
            <TextInput style={styles.input} placeholder="Digite sua senha" />
          </View>
          <View style={{paddingTop: 100}}>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Fazer Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
