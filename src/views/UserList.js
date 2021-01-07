import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Avatar, Button, Divider, Icon, ListItem } from 'react-native-elements'
import users from '../data/Users'

export default props => {

    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange"/>}
                />
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red"/>}
                />
            </>
        )
    }
    
    function getUserItem({ item: user }) {
        return (
            <ListItem key={user.id} 
            bottomDivider
            rightElement={getActions(user)}     
            onPress={() => props.navigation.navigate('UserForm', user)}>
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