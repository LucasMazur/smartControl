import React from 'react'
import { View, Text, FlatList, Alert } from 'react-native'
import { Avatar, Button, Divider, Icon, ListItem } from 'react-native-elements'
import users from '../data/Users'

export default props => {

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    console.warn('Cliquei em sim')
                }
            },
            {
                text: 'Não'
            }
        ])
    }
    
    function getUserItem({ item: user }) {
        return (
            <ListItem key={user.id} 
            bottomDivider
            onPress={() => props.navigation.navigate('UserForm', user)}
            onLongPress={() => confirmUserDeletion(user)}>
                <Avatar source={{uri: user.avatarUrl}} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>                
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}