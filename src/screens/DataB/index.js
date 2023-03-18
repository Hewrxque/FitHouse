import React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
export default function DataB({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      
      <TouchableOpacity
          style={styles.arrow}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name={'arrow-back-outline'} size={40} color={'#ffffff'} />
        </TouchableOpacity>
   <View style={{bottom: 260}}>
     <Text style={styles.text} >Dados</Text>
    
     </View>
   <View  style={{padding: 10}}>
    <Text  style={styles.text1}>Nome</Text>
   </View>
   <View  style={{padding: 10}}>
   <Text style={styles.text1}>Email:</Text>
   </View>
   <View  style={{padding: 10}}>
   <Text  style={styles.text1}>Peso:</Text>
   </View>
   <View  style={{padding: 10}}>
   <Text  style={styles.text1}>Altura:</Text>
   </View>
  
  </SafeAreaView>
  );
}
