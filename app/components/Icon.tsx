import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { IconProps } from '../types/propTypes';

export default function Icon({ name, size, backgroundColor, iconColor }:IconProps) {
    return (
        <View style={{backgroundColor: backgroundColor, 
                      height: size, 
                      width: size, 
                      borderRadius: size/2,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
            <MaterialCommunityIcons 
                name={name}
                size={size*0.5}
                color={iconColor}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    
})