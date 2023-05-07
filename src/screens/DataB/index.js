import React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNav from '../../components/BottonNav';
import styles from './styles';
export default function DataB({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Dados</Text>
      </View>
      <View style={styles.content1}>
        <View style={{padding: 10}}>
          <Text style={styles.text1}>Nome</Text>
        </View>
        <View style={{padding: 10}}>
          <Text style={styles.text1}>Email:</Text>
        </View>
        <View style={{padding: 10}}>
          <Text style={styles.text1}>Peso:</Text>
        </View>
        <View style={{padding: 10}}>
          <Text style={styles.text1}>Altura:</Text>
        </View>
      </View>
      <View>
          <BottomNav activepage={'DataB'} navigation={navigation} />
        </View>
    </SafeAreaView>
  );
}
