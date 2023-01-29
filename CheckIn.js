import React from 'react';
import { Alert, StyleSheet, Text, ScrollView, SafeAreaView, View, Image, Pressable, TextInput } from 'react-native';
import { DarkBlue, VeryDarkBlue, Blue, Grey, DarkGrey, BgColor, styles } from './Style';

// aplikacja
export default function Tickets({ navigation }) {

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={[styles.mainTop, { flex: 5 }]}>
                    <Text style={styles.h1}>Odprawa online</Text>
                    <Text style={styles.description}>Nie trac czasu na lotnisku. Przeprowadz swoja odprawe on-line</Text>
                    <View style={[styles.inputContainer, { height: 96 }]}>
                        <TextInput style={[styles.inputText, { borderTopWidth: 0 }]} placeholder="Numer rezerwacji" />
                        <TextInput style={styles.inputText} placeholder="Nazwisko pasazera" />

                    </View>
                    <Pressable onPress={() => Alert.alert("Odprawa sie powodla")} style={[styles.button, { backgroundColor: Blue, borderColor: DarkBlue, }]} ><Text style={[styles.buttonText, { color: "#fff" }]}>Dalej</Text></Pressable>
                    <Text style={{ textAlign: 'center' }}>LUB</Text>
                    <Pressable onPress={() => Alert.alert("Tu sie pojawi ten caly skaner QuR")} style={[styles.button, { backgroundColor: Blue, borderColor: DarkBlue, marginTop:10 }]} ><Text style={[styles.buttonText, { color: "#fff" }]}>Zeskanuj kod QR</Text></Pressable>
                </View>
           
            

                

            </ScrollView>

        </SafeAreaView>
    );
}


