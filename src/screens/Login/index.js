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
export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(false);
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
  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password must not contain Whitespaces.';
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return 'Password must have at least one Uppercase Character.';
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return 'Password must have at least one Lowercase Character.';
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return 'Password must contain at least one Digit.';
    }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return 'Password must be 8-16 Characters Long.';
    }
    return null;
  };
  const handleLogin = () => {
    const checkPassowrd = checkPasswordValidity(password);
    if (!checkPassowrd) {
      user_login({
        email: email.toLocaleLowerCase(),
        password: password,
      })
        .then(result => {
          if (result.status == 200) {
            AsyncStorage.setItem('AccessToken', result.data.token);
            navigation.replace('Home');
          }
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      alert(checkPassowrd);
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
        <View style={{paddingTop: 100}}>
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
            <Text style={{color: 'red'}}>Email não encontrado</Text>
          ) : (
            <Text style={{color: 'red'}}></Text>
          )}
          <Text style={styles.text2}>Senha:</Text>
          <View style={styles.wrapperInput}>
            <TextInput
              style={styles.input}
              placeholder="Digite sua Senha"
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
          
          <View style={{paddingTop: 100}}>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Menu')}
                style={styles.button}
                onPress2={handleLogin}>
                <Text style={styles.text}>Fazer Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
