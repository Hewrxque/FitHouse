import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {getTrainingA} from '../../../services/Api'

export default function T_A({navigation}) {

    const [training, setTraining] = useState([]);
  
  
    const getTraining = async () => {
      const response = await getTrainingA();
      if (response && response.data) {
        setTraining(response.data);
        console.log(response.data);
      } else {
        // Handle the case when response or response.data is undefined
      }
    };
  useEffect(() => {
    getTraining();
  }, []);


  return (
    <SafeAreaView style={styles.container}>
    <View style={{padding: 50}}>
   
    {training.map(item => (<Text key={item.id}>{item.tipo_exercicio}</Text>))
}
    </View>
  </SafeAreaView>
  );
}
