import React from 'react';
import { Alert, StyleSheet, Text, SafeAreaView, View, Image, Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Start  from './Start';
import  Login  from './Login';
import  Register  from './Register';
import  Lists  from './Lists';
import  Main  from './Main';
import  Contact  from './Contact';
import  Calendar from './Calendar';
import  Results from './Results';
import Tickets from './CheckIn';
import "./global.js"




export const Stack = createStackNavigator();

 function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Start" component={Start} options={{title:' '} } />
            <Stack.Screen name="Login" component={Login} options={{ title: ' ' } } />
            <Stack.Screen name="Register" component={Register} options={{ title: ' ' }} />
            <Stack.Screen name="Lists" component={Lists} options={{ title: ' ' }} />
            <Stack.Screen name="Calendar" component={Calendar} options={{ title: ' ' }} />
            <Stack.Screen name="Results" component={Results} options={{ title: ' ' }} />
            <Stack.Screen name="Tickets" component={Tickets} options={{ title: ' ' }} />

            <Stack.Screen name="Contact" component={Contact} options={{ title: ' ' }} />

            <Stack.Screen name="Main" component={Main} options={{ title: ' ' }, { headerShown: false }} />
        </Stack.Navigator>
    );
 }


export default function App() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}

