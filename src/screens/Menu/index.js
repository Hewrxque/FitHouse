import React from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity, TextInput} from 'react-native';
import Logo from '../../assets/FitHouse.png';
import styles from './styles';

export default function Menu(){
    return(
        <SafeAreaView style={styles.container}>
           <View style={{alignItems: "center", textAlign: 'center'}}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text2}>Treinos</Text>
            </TouchableOpacity>
           </View>
        </SafeAreaView>
    )
}