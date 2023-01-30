import React,{useState} from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView, View, Image, Pressable, TextInput } from 'react-native';
import { DarkBlue, VeryDarkBlue, Blue, Grey, DarkGrey, BgColor, styles} from './Style';
import "./global.js"

const logowanie = (mail,pass,navigation) => {
	var data = {
		mail:mail,
		pass:pass,
	}
	
	fetch('https://jakub-raczynski.pl/mobilne/login.php', {
			method: 'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then((response)=>response.json())
		.then((response)=>{
			if(response[0].mess=="zalogowano"){
				navigation.navigate('Main');
				global.mail = mail;
			}else{
				alert(response[0].mess);
			}
		})
		.catch((error)=>{
			alert("Error"+error);
		})
		
}

export default function Login({navigation}){
	
	const [mail, setMail] = useState('');
	const [pass, setPass] = useState('');
	
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
                        <TextInput onChangeText={newMail => setMail(newMail)} defaultValue={mail} style={[styles.inputText, {borderTopWidth: 0 }]} placeholder="E-mail" />
                        <TextInput onChangeText={newPass => setPass(newPass)} defaultValue={pass} style={styles.inputText} secureTextEntry={true} placeholder="Haslo" />
                    </View>
                </View>
            </ScrollView>
                <View style={[styles.mainBottom]}>
                
                <Pressable onPress={() => {logowanie(mail,pass,navigation)}} style={[styles.button, { backgroundColor: Blue, borderColor: DarkBlue, }]} ><Text style={[styles.buttonText, { color: "#fff" }]}>Zaloguj sie</Text></Pressable>
                <Pressable onPress={() => navigation.navigate('Register')} style={[styles.button, { borderWidth: 0, }]} ><Text style={[styles.buttonText, { color: DarkBlue, textDecorationLine: "underline", }]}>Zaloz konto</Text></Pressable>

                </View>
            
        </SafeAreaView>
    );
}






















