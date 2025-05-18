import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';
import { CardProps } from '../types/propTypes';

export default function Card({title, subTitle, image}:CardProps) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.textBox}>
                <AppText style={styles.titleText}>{title}</AppText>
                <AppText style={styles.subTitleText}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        width: '100%',
        height: 200,
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: '70%',
    },
    textBox: {
        paddingLeft: 20,
        paddingTop: 10
    },
    subTitleText: {
        color: colors.gray
    },
    titleText: {
        color: colors.black
    }
})
