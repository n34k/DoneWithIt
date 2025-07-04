import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../../config/colors';
import { ListItemDeleteActionProps } from '../../types/propTypes';

export default function ListItemDeleteAction({ onPress }:ListItemDeleteActionProps) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}> 
                <MaterialCommunityIcons 
                    name='trash-can' 
                    size={35} 
                    color={colors.white}/>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center'
    }
})