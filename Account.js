import React from 'react';
import {TextInput, Alert, StyleSheet, Text, ScrollView, SafeAreaView, View, Image, Pressable } from 'react-native';
import { DarkBlue, VeryDarkBlue, Blue, Grey, DarkGrey, BgColor, styles } from './Style';

// aplikacja
export default function Account({ navigation }) {

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={[styles.mainTop, { flex: 5 }]}>
                    <Text style={styles.h1}>Odprawa online</Text>
                    <Text style={styles.description}>Nie trac czasu na lotnisku. Przeprowadz swoja odprawe on-line</Text>
                    <View style={[styles.inputContainer, { height: 196 }]}>
                        <TextInput style={[styles.inputText, { borderTopWidth: 0 }]} placeholder="Imie" />
                        <TextInput style={[styles.inputText, { borderTopWidth: 0 }]} placeholder="Nazwisko" />
                        <TextInput style={[styles.inputText, { borderTopWidth: 0 }]} placeholder="Mail" />
                        <TextInput style={[styles.inputText, { borderTopWidth: 0 }]} placeholder="Numer Telefonu" />

                    </View>
                    <Pressable onPress={() => Alert.alert("Odprawa sie powodla")} style={[styles.button, { backgroundColor: Blue, borderColor: DarkBlue, }]} ><Text style={[styles.buttonText, { color: "#fff" }]}>Aktualizuj dane</Text></Pressable>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
}


