import React,{useState} from 'react';
import { CheckBox } from 'react-native-elements';
import { StyleSheet, Text, ScrollView, SafeAreaView, View, Image, Pressable, TextInput } from 'react-native';
import { DarkBlue, VeryDarkBlue, Blue, Grey, DarkGrey, BgColor, styles } from './Style';
import { Backend } from './Backend';


const newUser = (mail,pass,telefon,zgoda,mark) => {
	var data = {
		mail:mail,
		pass:pass,
		telefon:telefon,
		zgoda:zgoda,
		mark:mark
	}
	
	fetch('https://jakub-raczynski.pl/mobilne/insertUser.php', {
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


export default function Register({navigation}){
	
	const [mail, setMail] = useState('');
	const [pass, setPass] = useState('');
	const [telefon, setTelefon] = useState('');
	const [zgoda, setZgoda] = useState(true);
	const [mark, setMark] = useState(false);
	
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
                        <TextInput onChangeText={newMail => setMail(newMail)} defaultValue={mail} style={[styles.inputText, {borderTopWidth: 0 }]} placeholder="E-mail" />
                        <TextInput onChangeText={newPass => setPass(newPass)} defaultValue={pass} style={styles.inputText} placeholder="Haslo" />
                        <TextInput onChangeText={newTelefon => setTelefon(newTelefon)} defaultValue={telefon} style={styles.inputText} placeholder="Numer telefonu" />
						
                        
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox containerStyle={styles.checkboxContent} checked={zgoda} onPress={() => setZgoda(!zgoda)} title={"Zapoznalem sie z regulaminem"} />
                        <CheckBox containerStyle={styles.checkboxContent} checked={mark} onPress={() => setMark(!mark)} title={"Chce otrzymywac maile zwiazane z uslugami partnerow AirPolKet S.A." }/>

                    </View>
                </View>
            </ScrollView>
                <View style={[styles.mainBottom]}>
                
                <Pressable onPress={() => {newUser(mail,pass,telefon,zgoda,mark)}} style={[styles.button, { backgroundColor: Blue, borderColor: DarkBlue, }]} ><Text style={[styles.buttonText, { color: "#fff" }]}>Dalej</Text></Pressable>
                <Pressable onPress={() => navigation.navigate('Login')} style={[styles.button, { borderWidth: 0, }]} ><Text style={[styles.buttonText, { color: DarkBlue, textDecorationLine: "underline", }]}>Masz juz konto?</Text></Pressable>

                </View>
            
        </SafeAreaView>
    );
}
//





















