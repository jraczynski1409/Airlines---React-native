import React from 'react';
import { Alert, StyleSheet, Text, ScrollView, SafeAreaView, View, Image, Pressable } from 'react-native';
import { DarkBlue, VeryDarkBlue, Blue, Grey, DarkGrey, BgColor, styles } from './Style';
import CheckIn from './CheckIn';
import Tickets from './Tickets';
import Search from './Search';
import Account from './Account';
import Settings from './Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// aplikacja
export default function Main() {

    return (
        <Tab.Navigator>
            <Tab.Screen name={'Odprawa'} component={CheckIn} />
            <Tab.Screen name={'Moje loty'} component={Tickets} />

            <Tab.Screen name={'Szukaj'} component={Search} />
            <Tab.Screen name={'Konto'} component={Account} />
            <Tab.Screen name={'Wiecej'} component={Settings} />
        </Tab.Navigator>     
    );
}


