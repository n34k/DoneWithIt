import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';

import ListItem from '../components/ListItem';

export default function AccountScreen({}) {
    return (
        <SafeAreaView style={styles.screen}>
            <ListItem 
                title='Neak Davies' 
                subTitle='ndavis6969@yourmom.com'
                image={require('../assets/favicon.png')}
                onPress={() => console.log('nienr')}
            />
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    container: {
        height: 100,
        backgroundColor: 'yellow'
    }
})