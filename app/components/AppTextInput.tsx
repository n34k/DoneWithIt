import React from 'react';
import { StyleSheet, View, TextInput, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';
import { AppTextInputProps } from '../types/propTypes';
import defaultStyles from '../config/styles'

export default function AppTextInput({ icon, width = '100%', ...otherProps }:AppTextInputProps) {
    return (
        <View style={[styles.conatiner, {width}]}>
            {icon && <MaterialCommunityIcons 
                        name={icon} 
                        size={20} 
                        color={colors.gray} 
                        style={styles.icon}
                    />
            }
            <TextInput style={defaultStyles.text} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    conatiner: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    
})