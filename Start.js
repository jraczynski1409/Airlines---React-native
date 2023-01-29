import React from 'react';
import { Alert, StyleSheet, Text, ScrollView, SafeAreaView, View, Image, Pressable } from 'react-native';
import { DarkBlue, VeryDarkBlue, Blue, Grey, DarkGrey, BgColor, styles } from './Style';

// aplikacja
export default function Start({ navigation }){

    return (

        <SafeAreaView style={styles.container} >
            <View style={[styles.mainTop, {flex:5}]}>
                <Image
                    style={styles.bigLogo}
                    source={require('./images/Logo.png')}
                />
            </View>
            <View style={[styles.mainBottom, { flex: 3 }]}>
                <Text style={styles.description}>Zaloguj sie lub zaloz konto i w pelni korzystaj z mozliwosci aplikacji</Text>
                <Pressable onPress={() => navigation.navigate('Login')} style={[styles.button, { backgroundColor: Grey, borderColor: DarkGrey, }]} ><Text style={styles.buttonText}>Zaloguj sie</Text></Pressable>
                <Pressable onPress={() => navigation.navigate('Register')} style={[styles.button, { backgroundColor: Blue, borderColor: DarkBlue, }]} ><Text style={[styles.buttonText, { color: "#fff" }]}>Zarejestruj sie</Text></Pressable>
                <Pressable onPress={() => navigation.navigate('Main')} style={[styles.button, { borderWidth: 0, }]} ><Text style={[styles.buttonText, { color: DarkBlue, textDecorationLine: "underline", }]}>Kontynuuj bez rejestracji</Text></Pressable>

            </View>
        </SafeAreaView>
    );
}


