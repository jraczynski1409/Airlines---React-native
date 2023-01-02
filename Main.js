import React from 'react';
import { Alert, StyleSheet, Text, ScrollView, SafeAreaView, View, Image, Pressable } from 'react-native';
import Stack from './App';
import { DarkBlue, VeryDarkBlue, Blue, Grey, DarkGrey, BgColor, styles } from './Style';

// aplikacja
export default function Start({ navigation }) {

    return (

        <SafeAreaView style={[styles.container, { justifyContent: 'center', alignContent: 'center', alignItems: 'center', flex: 1 }]}>
            
                <Text style={styles.description}>Zwykla apka</Text>
                
        </SafeAreaView>
    );
}


