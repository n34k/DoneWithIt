import React, { useState } from 'react';
import { StyleSheet, View, FlatList, TouchableWithoutFeedback, Modal, Button, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';
import { PickerProps } from '../types/propTypes';
import defaultStyles from '../config/styles'
import AppText from './AppText';
import PickerItem from './PickerItem';

export default function Picker({ selectedItem, onSelectItem, icon, items, placeholder, width }:PickerProps) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.conatiner, {width}]}>
                    {(icon && 
                        <MaterialCommunityIcons 
                            name={icon} 
                            size={20} 
                            color={colors.gray} 
                            style={styles.icon}
                        />
                    )}
                    <AppText style={selectedItem ? styles.text : styles.grayText}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons 
                        name="chevron-down"
                        size={20} 
                        color={colors.gray} 
                    />
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.modalContainer}>

            <Modal visible={modalVisible} animationType='slide'>
                <SafeAreaView>
                    <Button title='Close' onPress={() => setModalVisible(false)}/>
                    <FlatList 
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        numColumns={3}
                        contentContainerStyle={styles.flatListContent}
                        renderItem={({ item }) => 
                            <PickerItem
                                label={item.label}
                                icon={item.icon}
                                color={item.color} 
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item)
                                }}
                            />}
                    />
                </SafeAreaView>
            </Modal>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    conatiner: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    flatListContent: {
        alignItems: 'center', // centers rows when there's extra space
    },
    grayText: {
        flex: 1,
        color: colors.placeholder
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    }
    
})