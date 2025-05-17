import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';
import { ListItemProps } from '../types/propTypes';

export default function ListItem({ image, title, subTitle }: ListItemProps) {
    return (
        <View style={styles.listItem}>
            <View style={styles.profilePic}>
                <Image style={styles.profileImg} source={image}/>
            </View>
            <View style={styles.itemInfo}>
                <AppText style={styles.titleText}>{title}</AppText>
                <AppText style={styles.subTitleText}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemInfo: {
        padding: 20
    },
    profileImg: {
        height: '100%',
        width: '100%'
    },
    profilePic: {
        overflow: 'hidden',
        borderRadius: 25,
        height: 50,
        width: 50
    },
    sellerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20
    },
    subTitleText: {
        color: colors.gray,
        fontSize: 17.5,
        fontWeight: 500
    },
    titleText: {
        color: colors.black,
        fontSize: 17.5,
        fontWeight: 500
    },
})
