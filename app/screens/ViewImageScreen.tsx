import React from 'react';
import { SafeAreaView, View, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';

export default function ViewImageScreen() {

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.topButtonBox}>
                <MaterialCommunityIcons name='close' size={50} color={colors.white}/>
                <MaterialCommunityIcons name='trash-can-outline' size={50} color={colors.white}/>
            </View>
            <Image source={require('../assets/chair.jpg')} style={styles.img}/>
            <View></View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.black,
    },
    button: {
        width: 50,
        height: 50
    },
    topButtonBox: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 25,
        paddingRight: 25,
    },
    img: {
        width: '100%',
        height: '70%'
    },
    primary: {
        backgroundColor: colors.primary
    },
    secondary: {
        backgroundColor: colors.secondary
    }
})