import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import AppText from './AppText'
import { PickerItemProps } from '../types/propTypes';
import colors from '../config/colors';
import Icon from './Icon';

export default function PickerItem({ label, icon, color, onPress }:PickerItemProps) {
    return (
        <TouchableOpacity style={styles.text} onPress={onPress}>
            <Icon
                backgroundColor={color}
                name={icon}
                size={75}
                iconColor={colors.white}
            />
            <AppText>{label}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        alignItems: 'center',
        padding: 20
    }
})
