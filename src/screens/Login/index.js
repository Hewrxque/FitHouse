import React from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity, TextInput} from 'react-native';
import Logo from '../../assets/FitHouse.png';
import styles from './styles';

export default function Login(){
    return(
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source = {Logo}/>
            <View>
            <Text style={styles.text2}>Email:</Text>
            <TextInput style={styles.input} placeholder='example@gmail.com'/>
            </View>
            <View>
            <Text style={styles.text2}>Senha:</Text>
            <TextInput style={styles.input} placeholder='Digite sua senha'/>
            </View>
            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Fazer Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}