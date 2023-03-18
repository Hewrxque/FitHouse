import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
export default function T_A({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
         <TouchableOpacity
        style={styles.arrow}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name={'arrow-back-outline'} size={40} color={'#ffffff'} />
      </TouchableOpacity>
    <View style={{padding: 50}}>
     <Text>Treino D</Text>
    </View>
  </SafeAreaView>
  );
}
