import React, {useState} from 'react';
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
export default function Check_Email({navigation}) {
  const [email, setEmail] = useState('');
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };
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
        <View style={{paddingTop: 80}} />
        <View>
          <Text style={styles.text3}>
            VOCÊ RECEBERÁ UM LINK POR EMAIL PARA CONFIRMAR SUA NOVA SENHA
          </Text>
        </View>
        <View style={{paddingTop: 20}} />
        <View>
          <Text style={styles.text2}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="example@gmail.com"
            value={email}
            onChangeText={handleCheckEmail}
          />
        </View>
        {checkValidEmail ? (
          <Text style={{color: 'red'}}>Digite um email válido</Text>
        ) : (
          <Text style={{color: 'red'}}></Text>
        )}
        <View style={{paddingTop: 100}}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.button}
              onPress={() => {
                navigation.navigate('Reset_Password');
              }}>
              <Text style={styles.text}>ENVIAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
