import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../../config/colors';

export default function ListItemSeperator() {
    return (
        <View style={styles.seperator}/>
    );
}

const styles = StyleSheet.create({
    seperator: {
        width: "100%",
        height: .5,
        backgroundColor: colors.placeholder
    }
})