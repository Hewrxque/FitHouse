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
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [password1, setPassword1] = useState('');
  const [seePassword1, setSeePassword1] = useState(true);

  return (
    <ScrollView style={{height: '100%'}}>
      <SafeAreaView style={styles.container}>
        <Image style={styles.image} source={Logo} />
        <View style={{top: 50}}>
          <Text style={styles.text3}>DIGITE SUA NOVA SENHA</Text>

          <View style={{padding: 10}} />
          <Text style={styles.text2}>Senha:</Text>
          <View style={styles.wrapperInput}>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
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
          <View style={{padding: 10}} />
          <Text style={styles.text2}>Repita Senha:</Text>
          <View style={styles.wrapperInput}>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              value={password1}
              secureTextEntry={seePassword1}
              onChangeText={text => setPassword1(text)}
            />
            <TouchableOpacity
              style={styles.wrapperIcon}
              onPress={() => setSeePassword1(!seePassword1)}>
              <Icon
                name={seePassword1 ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color={'#ffffff'}
              />
            </TouchableOpacity>
          </View>
          <View style={{paddingTop: 100}}>
            <View style={{alignItems: 'center'}}>
              {password == '' || password1 == '' ? (
                <TouchableOpacity disabled style={styles.button}>
                  <Text style={styles.text}>CONFIRMAR</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.button2}
                  onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.text}>ATUALIZAR SENHA</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
