import React from 'react';
import { Picker } from '@react-native-picker/picker'; 
import { Text,  SafeAreaView, View, Image, Pressable} from 'react-native';
import { DarkBlue, VeryDarkBlue, Blue, Grey, DarkGrey, BgColor, styles } from './Style';


// kolorki


// aplikacja
export default function Lists({ navigation }) {
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
                    
                    <Picker style={styles.listInput}>
                        <Picker.Item label="Polska" value="pl"/>
                        <Picker.Item label="Niemcy" value="de"/>
                        <Picker.Item label="USA" value="us"/>
                        <Picker.Item label="Hiszpania" value="es"/>
                    </Picker>
                    <Text style={{ width: '90%', alignSelf: 'center', marginTop: -63, marginLeft: 25, fontSize: 14 }}>Kraj</Text>
                </View>
         

                <View style={{ flex: 1 }}>
                    <Picker style={styles.listInput}>
                        <Picker.Item label="Polska" value="pl" />
                        <Picker.Item label="Angielski" value="us" />
                        <Picker.Item label="Niemiecki" value="de" />
                        <Picker.Item label="Hiszpanski" value="es" />
                    </Picker>
                    <Text style={{ width: '90%', alignSelf: 'center', marginTop: -63, marginLeft: 25, fontSize: 14 }}>Jezyk</Text>
                </View>

                <View style={{ flex: 1 }}>
                    <Picker style={styles.listInput}>
                        <Picker.Item label="PLN" value="pln" />
                        <Picker.Item label="USD" value="usd" />
                        <Picker.Item label="EUR" value="euro" />
                    </Picker>
                    <Text style={{ width: '90%', alignSelf: 'center', marginTop: -63, marginLeft: 25, fontSize: 14 }}>Waluta</Text>
                </View>
            </View>

            <View style={[styles.mainBottom, { flex: 1 }]}>
                <Pressable onPress={() => navigation.navigate('Main')} style={[styles.button, { backgroundColor: Blue, borderColor: DarkBlue, }]} ><Text style={[styles.buttonText, { color: "#fff" }]}>Zarejestruj sie</Text></Pressable>
            </View>

        </SafeAreaView>
    );
}






















