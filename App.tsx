import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, Image, Platform, Dimensions } from 'react-native';

import MessagesScreen from './app/screens/MessagesScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';


export default function App() {

  return (
    <ListingEditScreen/>
  );
}