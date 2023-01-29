import React from 'react';
import { Alert, StyleSheet, Text, ScrollView, SafeAreaView, View, Image, Pressable } from 'react-native';
import { DarkBlue, VeryDarkBlue, Blue, Grey, DarkGrey, BgColor, styles } from './Style';

// aplikacja
export default function Settings({ navigation }) {

    return (

        <SafeAreaView style={[styles.container, { alignContent: 'center', alignItems: 'center', flex: 1 }]}>
            
            <Text style={styles.h1}>Ustawienia</Text>
            <Pressable onPress={() => navigation.navigate('Lists')} style={styles.buttonSettings} ><Text style={[styles.buttonTextSettings, { color: "#333" }]}>Ustawienia lokalizacji</Text></Pressable>
            <Pressable onPress={() => navigation.navigate('Contact')} style={styles.buttonSettings} ><Text style={[styles.buttonTextSettings, { color: "#333" }]}>Kontakt</Text></Pressable>
            <Pressable onPress={() => Alert.alert("LINK DO STRONY WWW")} style={styles.buttonSettings} ><Text style={[styles.buttonTextSettings, { color: "#333" }]}>Regulamin</Text></Pressable>
            <Pressable onPress={() => navigation.navigate('Login')} style={[styles.buttonSettings, { borderBottomWidth: 0, }]}><Text style={[styles.buttonTextSettings, { color: "#f33" }]}>Wyloguj</Text></Pressable>
                
        </SafeAreaView>
    );
}


