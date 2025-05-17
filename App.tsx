import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, Image, Platform, Dimensions } from 'react-native';
import WelcomeScreen  from './app/screens/WelcomeScreen';
import ViewImageScreen  from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

import Card from './app/components/Card';


export default function App() {
  return (
    //<ListingDetailsScreen/>
    //<WelcomeScreen></WelcomeScreen>
    <ViewImageScreen></ViewImageScreen>
  );
}

const styles = StyleSheet.create({
  
});
