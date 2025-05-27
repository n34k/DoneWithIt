import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity } from 'react-native';

import { BigButtonProps } from '../types/propTypes';
import AppText from './AppText';
import colors from '../config/colors'


export default function BigButton({title, onPress, color}:BigButtonProps) {

    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color}]}>
            <AppText style={{color: colors.white}}>{title}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 40,
        borderRadius: 20
    }
})
