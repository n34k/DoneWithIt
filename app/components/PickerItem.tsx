import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import AppText from './AppText'
import { PickerItemProps } from '../types/propTypes';

export default function PickerItem({ label, onPress }:PickerItemProps) {
    return (
        <TouchableOpacity style={styles.text} onPress={onPress}>
            <AppText>{label}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20
    }
})