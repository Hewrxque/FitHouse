import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Switch,
  Alert,
  StatusBar,
} from 'react-native';
import styles from './styles';
import BottomNav from '../../components/BottonNav';
import Icon from 'react-native-vector-icons/Ionicons';

export default function IMC({navigation}) {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [genero, setGenero] = useState(false);
  const toglleSwitch = () => setGenero(previousState => !previousState);
  //Calculo IMC
  const handleCalcular = () => {
    const height = parseFloat(altura) / 100;
    const weight = parseFloat(peso);

    const imc = weight / (height * height);

    if (genero) {
      if (imc < 20.7)
        return Alert.alert(
          'Abaixo do peso!',
          `Seu IMC é de ${imc.toFixed(2)}, está abaixo do peso`,
        );
      if (imc > 20.7 && imc < 26.4)
        return Alert.alert(
          'Peso normal!',
          `Seu IMC é de ${imc.toFixed(2)}, está normal`,
        );
      if (imc > 26.4 && imc < 27.8)
        return Alert.alert(
          'Pouco acima do peso!',
          `Seu IMC é de ${imc.toFixed(2)}, está um pouco acima do peso`,
        );
      if (imc > 27.8 && imc < 31.1)
        return Alert.alert(
          'Acima do peso!',
          `Seu IMC é de ${imc.toFixed(2)}, está acima do peso`,
        );
      if (imc > 31.1)
        return Alert.alert(
          'Obesidade!',
          `Seu IMC é de ${imc.toFixed(2)}, está na taxa de obesidade`,
        );
    } else {
      if (imc < 19.1)
        return Alert.alert(
          'Abaixo do peso!',
          `Seu IMC é de ${imc.toFixed(2)}, está abaixo do peso`,
        );
      if (imc > 19.1 && imc < 25.6)
        return Alert.alert(
          'Peso normal!',
          `Seu IMC é de ${imc.toFixed(2)}, está normal`,
        );
      if (imc > 25.6 && imc < 27.3)
        return Alert.alert(
          'Pouco acima do peso!',
          `Seu IMC é de ${imc.toFixed(2)}, está um pouco acima do peso`,
        );
      if (imc > 27.3 && imc < 32.3)
        return Alert.alert(
          'Acima do peso!',
          `Seu IMC é de ${imc.toFixed(2)}, está acima do peso`,
        );
      if (imc > 32.3)
        return Alert.alert(
          'Obesidade!',
          `Seu IMC é de ${imc.toFixed(2)}, está na taxa de obesidade`,
        );
    }
  };
  return (
    <ScrollView style={{height: '100%'}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text1}>Calcule seu IMC</Text>
        </View>
        <View style={styles.content1}>
          <View style={styles.grouprow}>
            <Text style={styles.text2}>Feminino</Text>
            <Switch
              trackColor={{false: '#f257e8', true: '#5649e6'}}
              thumbColor={genero ? '#5649e6' : '#f257e8'}
              ios_backgroundColor="#3d543d"
              onValueChange={toglleSwitch}
              value={genero}
            />
            <Text style={styles.text2}>Masculino</Text>
          </View>
          <Text style={styles.text3}>Digite sua altura:</Text>
          <TextInput
            keyboardType="number-pad"
            style={styles.input}
            placeholder="ex: 179"
            value={altura}
            onChangeText={text => setAltura(text.replace(/\D/g, ''))}
          />

          <Text style={styles.text3}>Digite seu peso:</Text>
          <TextInput
            keyboardType="number-pad"
            style={styles.input}
            placeholder="ex: 69"
            value={peso}
            onChangeText={text => setPeso(text.replace(/\D/g, ''))}
          />
        </View>
        <View style={styles.content2}>
          <TouchableOpacity onPress={handleCalcular} style={styles.button}>
            <Text style={styles.text}>Calcule</Text>
          </TouchableOpacity>
        </View>
        <View>
          <BottomNav activepage={'IMC'} navigation={navigation} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
