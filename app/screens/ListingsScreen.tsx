import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native';

import Card from '../components/Card';
import { Listing } from '../types/dataTypes';

const initialListings:Listing[] = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 1000,
        image: require('../assets/couch.jpg')
    }
]


export default function ListingsScreen({}) {
    const [listings, setListings] = useState(initialListings)
    
    return (
        <SafeAreaView style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={`$${item.price}`}
                        image={item.image}
                    />
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    }
})