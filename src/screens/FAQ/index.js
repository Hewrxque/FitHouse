import React, {useState} from 'react';
import {
  Button,
  Image,
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import styles from './styles';
import Logo from '../../assets/FitHouse.png';
import Icon from 'react-native-vector-icons/Ionicons';

export default function FAQ({navigation}) {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);

  const handlePressJose = () => {
    Linking.openURL(
      'https://www.linkedin.com/in/josé-henrique-vieira-da-cruz-b2a6021b9/',
    );
  };
  
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name={'arrow-back-outline'} size={40} color={'#ffffff'} />
        </TouchableOpacity>
        <View style={{paddingTop: 100}} />
        <Image style={styles.image} source={Logo} resizeMode="contain" />
        <View style={{padding: 10}}>
          <Text style={styles.text}>FAQ</Text>
          <View style={{padding: 10}}>
            <TouchableOpacity onPress={() => setQuestion1(!question1)}>
              <Text style={styles.text1}>O QUE É?</Text>
            </TouchableOpacity>
            {question1 && <Text style={styles.text2}>O FitHouse é...</Text>}
          </View>
          <View style={{padding: 10}}>
            <TouchableOpacity onPress={() => setQuestion2(!question2)}>
              <Text style={styles.text1}>O CONTEÚDO É GRATUITO?</Text>
            </TouchableOpacity>
            {question2 && (
              <Text style={styles.text2}>
                Sim, todo o conteúdo é gratuito e pode pode ser customizado pelo
                próprio usuário.
              </Text>
            )}
          </View>
          <View style={{padding: 10}}>
            <TouchableOpacity onPress={() => setQuestion3(!question3)}>
              <Text style={styles.text1}>QUEM FORAM SEUS DESENVOLVEDORES?</Text>
            </TouchableOpacity>
            {question3 && (
              <Text style={styles.text2}>
                José Henrique Vieira da Cruz{'\n'}
                {'\n'}
                <Text style={styles.text2} onPress={handlePressJose}>
                  https://www.linkedin.com/in/josé-henrique-vieira-da-cruz/
                </Text>
              </Text>
            )}
          </View>
        </View>
        <View
          style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
          <Text style={styles.text2}>
            Todos os direitos reservados a Hewrxque
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
