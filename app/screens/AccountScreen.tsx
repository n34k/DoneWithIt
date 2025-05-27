import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList} from 'react-native';

import ListItem from '../components/lists/ListItem';
import Icon from '../components/Icon';
import colors from '../config/colors';
import ListItemSeperator from '../components/lists/ListItemSeperator';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
            size: 40,
            iconColor: colors.white
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
            size: 40,
            iconColor: colors.white
        }
    }
]

export default function AccountScreen({}) {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    title='Neak Davies' 
                    subTitle='ndavis6969@yourmom.com'
                    image={require('../assets/favicon.png')}
                    onPress={() => console.log('nienr')}
                />
                <View style={styles.menu}>
                    <FlatList
                        data={menuItems}
                        keyExtractor={item => item.title}
                        ItemSeparatorComponent={ListItemSeperator}
                        renderItem={({ item }) => 
                            <ListItem
                                title={item.title}
                                onPress={() => console.log()}
                                IconComponent={ 
                                    <Icon
                                        name={item.icon.name}
                                        backgroundColor={item.icon.backgroundColor}
                                        size={item.icon.size}
                                        iconColor={item.icon.iconColor}
                                    />
                                }/>
                        }
                    />
                </View>
                <ListItem
                    title='Log Out'
                    IconComponent={
                        <Icon
                            name='logout'
                            backgroundColor='#ffe66d'
                            size={40}
                            iconColor={colors.white}
                        />
                    }
                    onPress={() => console.log()}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.light
    },
    container: {
        flex: 1,
        gap: 25
     },
    menu: {
        flexShrink: 1
    },
})