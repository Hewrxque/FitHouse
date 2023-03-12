import React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import Logo from '../../assets/FitHouse.png';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Training({navigation}) {
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
       <Text >Em construçao</Text>
      </View>
    </SafeAreaView>
  );
}
