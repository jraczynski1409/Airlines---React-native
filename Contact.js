import React from 'react';
import { Alert, StyleSheet, Text, ScrollView, SafeAreaView, View, Image, Pressable } from 'react-native';
import { DarkBlue, VeryDarkBlue, Blue, Grey, DarkGrey, BgColor, styles } from './Style';
import { Linking } from 'react-native'
import "./global.js"
// aplikacja
export default function Contact({ navigation }) {

    return (
        <SafeAreaView style={[styles.container]}>
            <View style={[styles.mainTop, { flex: 2 }]}>
                <Text style={styles.h1}>Kontakt</Text>
                <Text style={styles.description}>Skontaktuj sie z nami przez popularne komunikatory lub przez e-mail'a</Text>
            </View>
            <View style={[styles.mainBottom, { flex: 5 }]}>
                <Pressable onPress={()=>{Linking.openURL(`whatsapp://send?phone=${+48883139682}`)}} style={[styles.button, { backgroundColor: '#25d366', borderColor: '#075e54', }]} ><Text style={[styles.buttonText, { color: "#fff" }]}>Whats Up</Text></Pressable>
                <Pressable onPress={()=>{Linking.openURL(`http://m.me/kuba.raczynski23`)}} style={[styles.button, { backgroundColor: '#00B2FF', borderColor: '#006AFF', }]}><Text style={[styles.buttonText, { color: "#fff" }]}>Messenger</Text></Pressable>
                <Pressable onPress={()=>{Linking.openURL(`mailto:jraczynski1409@gmail.com`)}} style={[styles.button, { backgroundColor: '#EA4335', borderColor: '#BB001B', }]}><Text style={[styles.buttonText, { color: "#fff" }]}>Mail</Text></Pressable>
            </View>  
        </SafeAreaView>
    );
}


