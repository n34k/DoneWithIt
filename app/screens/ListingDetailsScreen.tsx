import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import AppText from '../components/AppText';
import ListItem from '../components/lists/ListItem';
import colors from '../config/colors';

export default function ListingDetailsScreen() {
    return (
        <View style={styles.screen}>
            <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
            <View style={styles.itemInfo}>
                <AppText style={styles.titleText}>{'Red jacket for sale'}</AppText>
                <AppText style={styles.subTitleText}>{'$100'}</AppText>
                <ListItem 
                    title={'Neak Davies'} 
                    subTitle={'69 Listings'} 
                    image={require('../assets/mosh.jpg')} 
                    onPress={() => console.log('odncod')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemInfo: {
        margin: 15
    },
    screen: {
        flex: 1
    },
    titleText: {
        color: colors.black
    },
    subTitleText: {
        color: colors.gray
    },
    image: {
        width: '100%',
        height: '30%'
    },

    
})
