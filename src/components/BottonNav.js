import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function BottomNav({activepage, navigation}) {
  console.log(activepage);
  return (
    <View style={styles.container}>
      {activepage == 'DataB' ? (
        <Icon
          name="account-box-multiple-outline"
          size={50}
          color={'#000'}
          style={styles.iconActivate}
        />
      ) : (
        <Icon
          name="account-box-multiple-outline"
          size={50}
          color={'#000'}
          style={styles.icon}
          onPress={() => navigation.navigate('DataB')}
        />
      )}
      {activepage == 'Training' ? (
        <Icon
          name="fire"
          size={50}
          color={'#000'}
          style={styles.iconActivate}
       />
      ) : (
        <Icon
          name="fire"
          size={50}
          color={'#000'}
          style={styles.icon}
          onPress={() => navigation.navigate('Training')}
        />
      )}

      {activepage == 'IMC' ? (
        <Icon
          name="calculator"
          size={50}
          color={'#000'}
          style={styles.iconActivate}
        />
      ) : (
        <Icon
          name="calculator"
          size={50}
          color={'#000'}
          style={styles.icon}
          onPress={() => navigation.navigate('IMC')}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,padding: 10,
  },
  icon: {
    color: '#000',
    marginHorizontal: 100,
  },
  iconActivate: {
    color: '#F20000',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    bottom: 15,
    position: 'absolute',
    padding: 20,
    left: '41%',
    elevation: 5,
   
  },
});