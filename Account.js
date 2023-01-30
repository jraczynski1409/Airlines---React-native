import React,{useState} from 'react';
import {TextInput, Alert, StyleSheet, Text, ScrollView, SafeAreaView, View, Image, Pressable } from 'react-native';
import { DarkBlue, VeryDarkBlue, Blue, Grey, DarkGrey, BgColor, styles } from './Style';
import "./global.js"
// aplikacja


const dodajDane = (imie,nazwisko) => {
	var data = {
		mail:global.mail,
		imie:imie,
		nazwisko:nazwisko,
	}
	
	fetch('https://jakub-raczynski.pl/mobilne/updateDane.php', {
			method: 'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then((response)=>response.json())
		.then((response)=>{
				alert(response[0].mess);
			
		})
		.catch((error)=>{
			alert("Error"+error);
		})
		
}

export default function Account({ navigation }) {

	const [imie, setImie] = useState('');
	const [nazwisko, setNazwisko] = useState('');
			
    return (

        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={[styles.mainTop, { flex: 5 }]}>
                    <Text style={styles.h1}>Konto</Text>
                    <Text style={styles.description}>Tu mozesz dodac dane o sobie</Text>
                    <View style={[styles.inputContainer, { height: 100 }]}>
                        <TextInput onChangeText={newImie => setImie(newImie)} defaultValue={imie} style={[styles.inputText, { borderTopWidth: 0 }]} placeholder="Imie" />
                        <TextInput onChangeText={newNazwisko => setNazwisko(newNazwisko)} defaultValue={nazwisko} style={[styles.inputText, { borderTopWidth: 0 }]} placeholder="Nazwisko" />

                    </View>
                    <Pressable onPress={() => {dodajDane(imie,nazwisko)}} style={[styles.button, { backgroundColor: Blue, borderColor: DarkBlue, }]} ><Text style={[styles.buttonText, { color: "#fff" }]}>Aktualizuj dane</Text></Pressable>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
}


