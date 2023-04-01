import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  SafeAreaView,
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
        <View style={{padding: 50}} />
        <Image style={styles.image} source={Logo} resizeMode="contain" />
        <View style={{padding: 30}}>
         
          <View style={{top: 30}}>
            <TouchableOpacity onPress={() => setQuestion1(!question1)}>
              <Text style={styles.text1}>O QUE É?</Text>
            </TouchableOpacity>
            {question1 && <Text style={styles.text2}>O FitHouse é um aplicativo com o objetivo de ajudar as pessoas a alcançar seus objetivos de condicionamento físico e saúde por meio de programas de exercícios personalizados e acompanhamento de progresso.</Text>}
          </View>
          <View style={{top: 40}}>
            <TouchableOpacity  onPress={() => setQuestion2(!question2)}>
              <Text style={styles.text1}>O CONTEÚDO É GRATUITO?</Text>
            </TouchableOpacity>
            {question2 && (
              <Text style={styles.text2}>
                Sim, todo o conteúdo é gratuito e pode pode ser customizado pelo
                próprio usuário.
              </Text>
            )}
          </View>
          <View style={{top: 50}}>
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
          <Text style={styles.text3}>
            Todos os direitos reservados a Hewrxque
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
