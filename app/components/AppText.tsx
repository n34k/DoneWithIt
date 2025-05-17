import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

import { AppTextProps } from '../types/propTypes';

export default function AppText({children, style}: AppTextProps) {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir"
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto"
            }
        })
    }
})