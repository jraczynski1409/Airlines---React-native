import React,{useState} from 'react';
import { Picker } from '@react-native-picker/picker'; 
import { Text,  SafeAreaView, View, Image, Pressable} from 'react-native';
import { DarkBlue, VeryDarkBlue, Blue, Grey, DarkGrey, BgColor, styles } from './Style';
import "./global.js"


const updateUser = (country, currency ,navigation) => {
	var data = {
		mail:global.mail,
		country:country,
		currency:currency
	}
	
	fetch('https://jakub-raczynski.pl/mobilne/updateLocal.php', {
			method: 'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then((response)=>response.json())
		.then((response)=>{
			if(response[0].mess=="git"){
				navigation.navigate('Main');
			}else{
				alert(response[0].mess);
			}
		})
		.catch((error)=>{
			alert("Error"+error);
		})
		
}


export default function Lists({ navigation}) {
	
	const [country, setCountry] = useState('Polska');
	const [currency, setCurrency] = useState('PLN');
	
    return (
        <SafeAreaView style={styles.container}>
           
            <View style={[styles.LogoTop, { flex: 1 }]}>
                <Image
                    style={styles.smallLogo}
                    source={require('./images/Logo.png')}
                />
            </View>

            <View style={[styles.mainTop, { flex: 4 }]}>
                <Text style={styles.h1}>Gdzie terez jestes?</Text>
                <Text style={styles.description}>Wybierz swoj kraj, jezyk i walute, w ktorej beda wyswietlane ceny.</Text>
            </View>

            <View style={[{ width: '100%', justifyContent: 'center', alignContent: 'center' }, { flex: 3 }]}>
                <View style={{ flex:1 } }>
                    
                    <Picker style={styles.listInput} selectedValue={country} onValueChange={(value, index) => setCountry(value)}>
                        <Picker.Item label="Polska" value="Polska"/>
                        <Picker.Item label="Albania" value="Albania"/>
                        <Picker.Item label="Austalia" value="Austalia"/>
                        <Picker.Item label="Austria" value="Austria"/>
                        <Picker.Item label="Belgia" value="Belgia"/>
                        <Picker.Item label="Bosnia i Hercegowina" value="Bosnia i Hercegowina"/>
                        <Picker.Item label="Bulgaria" value="Bulgaria"/>
                        <Picker.Item label="Chorwacja" value="Chorwacja"/>
                        <Picker.Item label="Czechy" value="Czechy"/>
                        <Picker.Item label="Dania" value="Dania"/>
                        <Picker.Item label="Estonia" value="Estonia"/>
                        <Picker.Item label="Finlandia" value="Finlandia"/>
                        <Picker.Item label="Francja" value="Francja"/>
                        <Picker.Item label="Grecja" value="Grecja"/>
                        <Picker.Item label="Hiszpania" value="Hiszpania"/>
                        <Picker.Item label="Holandia" value="Holandia"/>
                        <Picker.Item label="Irlandia" value="Irlandia"/>
                        <Picker.Item label="Islanida" value="Islandia"/>
                        <Picker.Item label="Kazachstan" value="Kazachstan"/>
                        <Picker.Item label="Litwa" value="Litwa"/>
                        <Picker.Item label="Luksemburg" value="Luksemburg"/>
                        <Picker.Item label="Łotwa" value="Łotwa"/>
                        <Picker.Item label="Macedonia" value="Macedonia"/>
                        <Picker.Item label="Malta" value="Malta"/>
                        <Picker.Item label="Moldawia" value="Moldawia"/>
                        <Picker.Item label="Niemcy" value="Niemcy"/>
                        <Picker.Item label="Norwegia" value="Norwegia"/>
						<Picker.Item label="Portugalia" value="Portugalia"/>
						<Picker.Item label="Rumunia" value="Rumunia"/>
						<Picker.Item label="Serbia" value="Serbia"/>
						<Picker.Item label="Słowacja" value="Słowacja"/>
						<Picker.Item label="Szwajcaria" value="Szwajcaria"/>
						<Picker.Item label="Szwecja" value="Szwecja"/>
						<Picker.Item label="Turcaj" value="Turcja"/>
						<Picker.Item label="Ukraina" value="Ukraina"/>
						<Picker.Item label="USA" value="USA"/>
						<Picker.Item label="Watykan" value="Watykan"/>
						<Picker.Item label="Węgry" value="Węgry"/>
						<Picker.Item label="Wielka Brytania" value="Wielka Brytania"/>
						<Picker.Item label="Włochy" value="Włochy"/>
                    </Picker>
                    <Text style={{ width: '90%', alignSelf: 'center', marginTop: -63, marginLeft: 25, fontSize: 14 }}>Kraj</Text>
                </View>

                <View style={{ flex: 1 }}>
                    <Picker style={styles.listInput} selectedValue={currency} onValueChange={(value, index) => setCurrency(value)}>
                        <Picker.Item label="PLN (polski złoty)" value="PLN" />
                        <Picker.Item label="USD (dolar amerykański)" value="USD" />
                        <Picker.Item label="EUR (euro)" value="EUR" />
                    </Picker>
                    <Text style={{ width: '90%', alignSelf: 'center', marginTop: -63, marginLeft: 25, fontSize: 14 }}>Waluta</Text>
                </View>
            </View>

            <View style={[styles.mainBottom, { flex: 1 }]}>
                <Pressable onPress={() => {updateUser(country, currency ,navigation)}} style={[styles.button, { backgroundColor: Blue, borderColor: DarkBlue, }]} ><Text style={[styles.buttonText, { color: "#fff" }]}>Akceptuj</Text></Pressable>
            </View>

        </SafeAreaView>
    );
}






















