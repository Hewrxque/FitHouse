import React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
export default function T_B({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
    <View style={{padding: 50}}>
     <Text>Treino B</Text>
    </View>
  </SafeAreaView>
  );
}
