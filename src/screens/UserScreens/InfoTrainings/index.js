import React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
export default function InfoTrainings({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Dados</Text>
      </View>
      <View style={styles.content1}>
       
          <Text style={styles.text1}>Nome</Text>
        
      
          <Text style={styles.text1}>Email:</Text>
        
      
          <Text style={styles.text1}>Peso:</Text>
      
        
          <Text style={styles.text1}>Altura:</Text>
          <View style={{marginLeft: '40%'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('FAQ')}>
              <Text style={styles.text3}>Info</Text>
            </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  );
}
