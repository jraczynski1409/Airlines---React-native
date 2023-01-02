import React from 'react';
import { CheckBox } from 'react-native-elements';
import { StyleSheet, Text, ScrollView, SafeAreaView, View, Image, Pressable, TextInput } from 'react-native';
import { DarkBlue, VeryDarkBlue, Blue, Grey, DarkGrey, BgColor, styles } from './Style';


// kolorki


// aplikacja
export default function Register({navigation}){
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
                    <Text style={styles.h1}>Zarejestruj sie</Text>
                    <Text style={styles.description}>W ten sposob uzyskasz dostep do pelnej wersji aplikacji. Zaloz konto.</Text>
                    <View style={[styles.inputContainer, {  height: 144 }]}>
                        <TextInput style={[styles.inputText, {borderTopWidth: 0 }]} placeholder="E-mail" />
                        <TextInput style={styles.inputText} placeholder="Haslo" />
                        <TextInput style={styles.inputText} placeholder="Numer telefonu" />
                        
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox containerStyle={styles.checkboxContent} title={"Zapoznalem sie z regulaminem"} />
                        <CheckBox containerStyle={styles.checkboxContent} title={"Chce otrzymywac maile zwiazane z uslugami partnerow AirPolKet S.A." }/>

                    </View>
                </View>
            </ScrollView>
                <View style={[styles.mainBottom]}>
                
                <Pressable onPress={() => navigation.navigate('Lists')} style={[styles.button, { backgroundColor: Blue, borderColor: DarkBlue, }]} ><Text style={[styles.buttonText, { color: "#fff" }]}>Dalej</Text></Pressable>
                <Pressable onPress={() => navigation.navigate('Login')} style={[styles.button, { borderWidth: 0, }]} ><Text style={[styles.buttonText, { color: DarkBlue, textDecorationLine: "underline", }]}>Masz juz konto?</Text></Pressable>

                </View>
            
        </SafeAreaView>
    );
}






















