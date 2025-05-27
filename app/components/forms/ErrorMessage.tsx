import React from 'react';
import { StyleSheet } from 'react-native';

import AppText from '../AppText';
import { ErrorMessageProps } from '../../types/propTypes';

export default function ErrorMessage({ error, visible }:ErrorMessageProps) {
    if (!visible || !error) return null;
    return (
        <AppText style={styles.error}>{error}</AppText>
    );
}

const styles = StyleSheet.create({
    error: { color: "red"}
})