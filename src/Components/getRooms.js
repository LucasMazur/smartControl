import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Avatar, Button, Divider, Icon, ListItem } from 'react-native-elements'

// import { Container } from './styles';

export default () => {

    const [teste, setTeste] = useState ('')

    fetch('http://172.16.30.171:3001/api/userDevices/get')
    .then((res) => res.json())
    .then((json) => {
        setTeste(json)
    })

    function getDevice ({item: device}) {
        console.log(device)
        return (
            <ListItem key={device._id} 
            bottomDivider>
                <Avatar source={{uri: device.imageUrl}} />
                <ListItem.Content>
                    <ListItem.Title>{device.deviceName}</ListItem.Title>                
                    <ListItem.Subtitle>{device.roomName}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user._id.toString()}
                data={teste}
                renderItem={getDevice}
            />
        </View>
    )
}