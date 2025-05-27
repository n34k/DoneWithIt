import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, Image, Platform, Dimensions } from 'react-native';

import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';


export default function App() {

  return (
    <SafeAreaView>
      <ListingEditScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});
