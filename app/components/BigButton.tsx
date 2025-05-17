import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity } from 'react-native';

import { BigButtonProps } from '../types/PropTypes';
import AppText from './AppText';
import colors from '../config/colors'


export default function BigButton({title, onPress, color}:BigButtonProps) {

    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color}]}>
            <AppText textColor={colors.white}>{title}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
        height: 40,
        borderRadius: 20
    }
})
