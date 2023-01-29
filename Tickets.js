import React from 'react';
import { Alert, StyleSheet, Text, ScrollView, SafeAreaView, View, Image, Pressable } from 'react-native';
import { DarkBlue, VeryDarkBlue, Blue, Grey, DarkGrey, BgColor, styles } from './Style';

// aplikacja
export default function CheckIn({ navigation }) {

    return (

        <ScrollView style={[styles.container, { alignContent: 'center',  flex: 1 }]}>

            <View style={styles.ticketContainerActive}>
                <Text style={styles.bigInfo}>Z: Maslow (MAS)</Text>
                <Text style={styles.bigInfo}>Do:  Radom (RAD)</Text>
                <Text style={styles.bigInfo}>07.01.2023 - 16:30</Text>
                <Text style={styles.info}>Jan Kowalski</Text>
                <Text style={styles.info}>Bag.podreczny + 50kg bag. rej.</Text>
                <Text style={styles.info}>Klasa VIP</Text>
            </View>

            <View style={styles.ticketContainerActive}>
                <Text style={styles.bigInfo}>Z: Maslow (MAS)</Text>
                <Text style={styles.bigInfo}>Do:  Radom (RAD)</Text>
                <Text style={styles.bigInfo}>07.01.2023 - 16:30</Text>
                <Text style={styles.info}>Halyna Nowak</Text>
                <Text style={styles.info}>Bag.podreczny + 180kg bag. rej.</Text>
                <Text style={styles.info}>Klasa ekonomiczna</Text>
            </View>

            <View style={styles.ticketContainerActive }>
                <Text style={styles.bigInfo}>Z: Radom (RAD)</Text>
                <Text style={styles.bigInfo}>Do:  Maslow (MAS)</Text>
                <Text style={styles.bigInfo}>06.01.2023 - 21:15</Text>
                <Text style={styles.info}>Jan Kowalski</Text>
                <Text style={styles.info}>Bag.podreczny</Text>
                <Text style={styles.info}>Klasa VIP</Text>
            </View>

            <View style={styles.ticketContainer}>
                <Text style={styles.bigInfo}>Z: Maslow (MAS)</Text>
                <Text style={styles.bigInfo}>Do:  Radom (RAD)</Text>
                <Text style={styles.bigInfo}>04.01.2023 - 20:30</Text>
                <Text style={styles.info}>Jan Kowalski</Text>
                <Text style={styles.info}>Bag.podreczny </Text>
                <Text style={styles.info}>Klasa VIP</Text>
            </View>

            <View style={styles.ticketContainer}>
                <Text style={styles.bigInfo}>Z: Radom (RAD)</Text>
                <Text style={styles.bigInfo}>Do:  Maslow (MAS)</Text>
                <Text style={styles.bigInfo}>03.01.2023 - 04:00</Text>
                <Text style={styles.info}>Jan Kowalski</Text>
                <Text style={styles.info}>Bag.podreczny + 25kg bag. rej.</Text>
                <Text style={styles.info}>Klasa VIP</Text>
            </View>

                
        </ScrollView>
    );
}


