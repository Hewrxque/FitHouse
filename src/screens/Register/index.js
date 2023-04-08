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
export default function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
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
        <View style={styles.content}>
          <Image style={styles.image} source={Logo} />
        </View>
        <View style={styles.content1}>
          <TextInput style={styles.input} placeholder="Nome" />

          <View style={{padding: 10}} />

          <View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={handleCheckEmail}
            />
          </View>
          {checkValidEmail ? (
            <Text style={{color: 'red'}}>Digite um email válido</Text>
          ) : (
            <Text style={{color: 'red'}}></Text>
          )}
          <View style={styles.wrapperInput}>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={password}
              secureTextEntry={seePassword}
              onChangeText={text => setPassword(text)}
            />
          <TouchableOpacity
            style={styles.wrapperIcon}
            onPress={() => setSeePassword(!seePassword)}>
            <Icon
              name={seePassword ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color={'#ffffff'}
            />
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.content2}>
          <View style={{alignItems: 'center'}}>
            {email == '' || password == '' || checkValidEmail == true ? (
              <TouchableOpacity disabled style={styles.button}>
                <Text style={styles.text}>CADASTRAR</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.button2}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.text3}>CONCLUIR CADASTRO</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
