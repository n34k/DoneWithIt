import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../AppText';
import colors from '../../config/colors';
import { ListItemProps } from '../../types/propTypes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function ListItem({ image, IconComponent, title, subTitle, onPress, renderRightActions, showChevron }: ListItemProps) {
    return (
        <GestureHandlerRootView style={{flex:0}}>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight 
                    onPress={onPress}
                    underlayColor={colors.light}>
                    <View style={styles.listItemContainer}>
                        <View style={styles.listItem}>
                            <View style={styles.profilePic}>
                                {IconComponent ? IconComponent : (
                                    image && <Image style={styles.profileImg} source={image} />
                                )}
                            </View>
                            <View style={styles.itemInfo}>
                                <AppText numberOfLines={1} style={styles.titleText}>{title}</AppText>
                                {subTitle && <AppText numberOfLines={1} style={styles.subTitleText}>{subTitle}</AppText>}
                            </View>
                        </View>
                        {showChevron ?
                            <MaterialCommunityIcons 
                                name="chevron-right" 
                                size={25} 
                                color={colors.placeholder}
                            /> : <></>}
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
        padding: 20,
        flexShrink: 1
    },
    listItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 5,
    },
    itemInfo: {
        flexShrink: 1,
        justifyContent: 'center',
        marginLeft: 10
    },
    profileImg: {
        height: '100%',
        width: '100%'
    },
    profilePic: {
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        height: 50,
        width: 50
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
