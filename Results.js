import React from 'react';
import { Alert, StyleSheet, Text, ScrollView, SafeAreaView, View, Image, Pressable } from 'react-native';
import { DarkBlue, VeryDarkBlue, Blue, Grey, DarkGrey, BgColor, styles } from './Style';
import "./global.js"
// aplikacja
export default function CheckIn({ navigation }) {

    return (

        <ScrollView style={[styles.container, { alignContent: 'center',  flex: 1 }]}>

            <View style={styles.ticketContainerActive}>
                <Text style={styles.bigInfo}>Z: Maslow (MAS)</Text>
                <Text style={styles.bigInfo}>Do:  Radom (RAD)</Text>
                <Text style={styles.bigInfo}>10.01.2023 - 10:30</Text>
                <Text style={styles.info}>1 osoba</Text>
                <Text style={styles.info}>Klasa ekonomiczna</Text>
                <Text style={styles.bigInfo}>299 PLN</Text>
            </View>

            <View style={styles.ticketContainerActive}>
                <Text style={styles.bigInfo}>Z: Maslow (MAS)</Text>
                <Text style={styles.bigInfo}>Do:  Radom (RAD)</Text>
                <Text style={styles.bigInfo}>10.01.2023 - 11:30</Text>
                <Text style={styles.info}>1 osoba</Text>
                <Text style={styles.info}>Klasa ekonomiczna</Text>
                <Text style={styles.bigInfo}>299 PLN</Text>
            </View>

            <View style={styles.ticketContainerActive}>
                <Text style={styles.bigInfo}>Z: Maslow (MAS)</Text>
                <Text style={styles.bigInfo}>Do:  Radom (RAD)</Text>
                <Text style={styles.bigInfo}>11.01.2023 - 11:30</Text>
                <Text style={styles.info}>1 osoba</Text>
                <Text style={styles.info}>Klasa ekonomiczna</Text>
                <Text style={styles.bigInfo}>259 PLN</Text>

            </View>



                
        </ScrollView>
    );
}


