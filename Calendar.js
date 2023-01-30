import React from 'react';
import { Alert, StyleSheet, Text, ScrollView, SafeAreaView, View, Image, Pressable } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { DarkBlue, VeryDarkBlue, Blue, Grey, DarkGrey, BgColor, styles } from './Style';
import "./global.js"
// aplikacja
export default function Contact({ navigation }) {

    return (

        <SafeAreaView style={[styles.container]}>
            <View style={[styles.mainBottom, { flex: 5 }]}>
                <CalendarPicker />
            </View>  
        </SafeAreaView>
    );
}


