import React, { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/lists/ListItem';
import ListItemSeperator from '../components/lists/ListItemSeperator';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
import { Message } from '../types/dataTypes';

const initialMessages:Message[] = [
    {
        id: 1,
        title: 'T2',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T333',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    }
]

export default function MessagesScreen({}) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = (message:Message) => {
        setMessages(messages.filter((m) => m.id !== message.id))
    }

    return (
        <SafeAreaView style={styles.screen}>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem 
                        title={item.title} 
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log('Message Selected', item)}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
                    />
                )}
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T333',
                            description: 'I am refresh nija',
                            image: require('../assets/mosh.jpg')
                        }
                    ])
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})
