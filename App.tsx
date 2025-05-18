import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, Image, Platform, Dimensions } from 'react-native';

import WelcomeScreen  from './app/screens/WelcomeScreen';
import ViewImageScreen  from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';


export default function App() {
  return (
    //<ListingDetailsScreen/>
    //<WelcomeScreen></WelcomeScreen>
    //<ViewImageScreen></ViewImageScreen>
    //<MessagesScreen/>
    //<AccountScreen/>
    <ListingsScreen></ListingsScreen>
  );
}

const styles = StyleSheet.create({
  
});
