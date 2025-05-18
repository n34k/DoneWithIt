import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';

import AppText from './AppText';
import colors from '../config/colors';
import { ListItemProps } from '../types/propTypes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function ListItem({ image, title, subTitle, onPress, renderRightActions }: ListItemProps) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight 
                    onPress={onPress}
                    underlayColor={colors.light}>
                    <View style={styles.listItem}>
                        <View style={styles.profilePic}>
                            <Image style={styles.profileImg} source={image}/>
                        </View>
                        <View style={styles.itemInfo}>
                            <AppText style={styles.titleText}>{title}</AppText>
                            <AppText style={styles.subTitleText}>{subTitle}</AppText>
                        </View>
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20
    },
    itemInfo: {
        paddingLeft: 20
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
