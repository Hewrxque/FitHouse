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
import Logo from '../../../assets/FitWorkout.png';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Login({navigation}) {
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [password1, setPassword1] = useState('');
  const [seePassword1, setSeePassword1] = useState(true);

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
       
      <View style={styles.contentImage}>
          <Image style={styles.image} source={Logo} />
        </View>
      

        <View style={styles.content1}>
          <Text style={styles.textTitle}>DIGITE SUA NOVA SENHA</Text>

          <Text style={styles.textPassword}>Senha:</Text>
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

          <Text style={styles.textRepeat}>Repita sua Senha:</Text>
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
        </View>
        <View style={styles.content2}>
          <View style={{alignItems: 'center'}}>
            {password == '' || password1 == '' ? (
              <TouchableOpacity disabled style={styles.buttonInactive}>
                <Text style={styles.textButton}>CONFIRMAR</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.buttonActive}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textButton}>ATUALIZAR SENHA</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
