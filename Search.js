import React from 'react';
import { Alert, StyleSheet, Text, ScrollView, SafeAreaView, View, Image, Pressable } from 'react-native';
import { DarkBlue, VeryDarkBlue, Blue, Grey, DarkGrey, BgColor, styles } from './Style';
import { Picker } from '@react-native-picker/picker'; 
import CalendarPicker from 'react-native-calendar-picker';

// aplikacja
export default function Search({ navigation }) {

    return (

        <SafeAreaView style={[styles.container, {  alignItems: 'center', flex: 1 }]}>
            

            <View style={{  flexDirection: 'row', width: '90%' }}>
                <Pressable style={[styles.searchTab, { backgroundColor: '#5aafdf', }]}><Text style={styles.searchTabText}>W obie strone</Text></Pressable>
                <Pressable style={[styles.searchTab, { backgroundColor: '#7ccfff', }]}><Text style={styles.searchTabText}>W jedna strone</Text></Pressable>
            </View>

            <View style={[styles.searchContainer, { marginTop: 0, padding: 20 }]}>
                <View style={{ flexDirection: 'row', width: '100%', marginBottom: 20 }}>
                    <View style={[styles.listInput, { width: '50%' }]}>
                        <Picker >
                            <Picker.Item label="Radom" value="RDM" />
                            <Picker.Item label="Maslow" value="MAS" />
                            <Picker.Item label="Daleszyce" value="DAL" />
                            <Picker.Item label="Kazimierza Wielka" value="KZW" />
                        </Picker>
                        <Text style={{ width: '90%', alignSelf: 'center', marginTop: -50, marginLeft: 10, fontSize: 10 }}>Skad?</Text>
                    </View>
                    <View style={[styles.listInput, { width: '50%' }]}>
                        <Picker >
                            <Picker.Item label="Maslow" value="MAS" />
                            <Picker.Item label="Radom" value="RAD" />
                            <Picker.Item label="Daleszyce" value="DAL" />
                            <Picker.Item label="Kazimierza Wielka" value="KZW" />
                        </Picker>
                        <Text style={{ width: '90%', alignSelf: 'center', marginTop: -50, marginLeft: 10, fontSize: 10 }}>Dokad?</Text>
                    </View>
                </View>

                
                <Pressable onPress={() => navigation.navigate('Calendar')} style={[styles.listInput, { width: '100%', marginBottom:15, }]}>
                       
                        <Text style={{ width: '90%', alignSelf: 'center', marginTop: 5, marginLeft: 10, fontSize: 10 }}>Data odlotu</Text>
                    </Pressable>
                <Pressable onPress={() => navigation.navigate('Calendar')} style={[styles.listInput, { width: '100%', marginBottom: 15, }]}>
                        
                        <Text style={{ width: '90%', alignSelf: 'center', marginTop: 5, marginLeft: 10, fontSize: 10 }}>Data powrotu</Text>
                </Pressable>

                <View style={[styles.listInput, { width: '100%', marginBottom: 15, }]}>
                    <Picker >
                        <Picker.Item label="Ekonomiczna" value="eko" />
                        <Picker.Item label="Pierwsza" value="fir" />
                        <Picker.Item label="Premium" value="pre" />
                        <Picker.Item label="Vip" value="vip" />
                    </Picker>
                    <Text style={{ width: '90%', alignSelf: 'center', marginTop: -50, marginLeft: 10, fontSize: 10 }}>Klasa</Text>
                </View>

                <View style={[styles.listInput, { width: '100%', marginBottom: 15, }]}>
                    <Picker >
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4(MAX)" value="4" />
                    </Picker>
                    <Text style={{ width: '90%', alignSelf: 'center', marginTop: -50, marginLeft: 10, fontSize: 10 }}>Ilosc pasazerow</Text>
                </View>

                <Pressable onPress={() => navigation.navigate('Results')} style={[styles.button, { width:'100%',backgroundColor: DarkBlue, borderColor: DarkBlue, marginTop:30}]} ><Text style={[styles.buttonText, { color: "#fff" }]}>Szukaj</Text></Pressable>    
                
            </View>
                
        </SafeAreaView>
    );
}


