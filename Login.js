import React from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView, View, Image, Pressable, TextInput } from 'react-native';
import { DarkBlue, VeryDarkBlue, Blue, Grey, DarkGrey, BgColor, styles} from './Style';

// kolorki


// aplikacja
export default function Login({navigation}){
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={[styles.LogoTop, {flex:1}]}>
                    <Image
                        style={styles.smallLogo}
                        source={require('./images/Logo.png')}
                    />
                </View>
            
                <View style={[styles.mainTop, { flex: 5 }]}>
                    <Text style={styles.h1}>Zaloguj sie</Text>
                    <Text style={styles.description}>W ten sposob uzyskasz dostep do swoich rezerwacji. Wprowadz dane do zalogowania i kozystaj z mozliwosci aplikacji</Text>
                    <View style={[styles.inputContainer, {  height: 96 }]}>
                        <TextInput style={[styles.inputText, {borderTopWidth: 0 }]} placeholder="E-mail" />
                        <TextInput style={styles.inputText} placeholder="Haslo" />
                    </View>
                </View>
            </ScrollView>
                <View style={[styles.mainBottom]}>
                
                <Pressable onPress={() => navigation.navigate('Main')} style={[styles.button, { backgroundColor: Blue, borderColor: DarkBlue, }]} ><Text style={[styles.buttonText, { color: "#fff" }]}>Zaloguj sie</Text></Pressable>
                <Pressable onPress={() => navigation.navigate('Register')} style={[styles.button, { borderWidth: 0, }]} ><Text style={[styles.buttonText, { color: DarkBlue, textDecorationLine: "underline", }]}>Zaloz konto</Text></Pressable>

                </View>
            
        </SafeAreaView>
    );
}






















